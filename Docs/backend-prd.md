# Backend PRD - Head of Growth Super Agent

**Version:** 1.0
**Last Updated:** February 17, 2026
**Team:** Fernando (Developer Lead), Wes (Product Owner)

---

## Executive Summary

Build a **robust, scalable backend** that powers the AI content generation system. The backend handles content ingestion, AI processing, quality checks, scheduling, multi-channel publishing, and analytics tracking.

**Core Responsibilities:**
- Ingest content from multiple sources (Riverside, Grain, Gemini, manual uploads)
- Generate high-quality content using Claude API
- Validate content quality (AI detection, ICP scoring)
- Auto-save user edits and track learning patterns
- Publish to multiple platforms (LinkedIn, Customer.io, Webflow)
- Track performance and attribution

**Technology Stack:**
- **Runtime:** Python 3.11+
- **Framework:** FastAPI
- **Database:** PostgreSQL (Supabase)
- **Vector DB:** Pinecone (for RAG)
- **Queue:** Redis + Celery
- **Storage:** AWS S3
- **Hosting:** Railway or Fly.io

---

## 1. System Architecture

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                             │
│              (Next.js + React + Tailwind)                   │
└────────────────┬────────────────────────────────────────────┘
                 │ REST API
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                     API LAYER (FastAPI)                     │
├─────────────────────────────────────────────────────────────┤
│  Auth  │  Content  │  Publishing  │  Analytics  │  Webhooks│
└────┬────┴─────┬─────┴──────┬──────┴─────┬────────┴────┬─────┘
     │          │            │            │             │
     ▼          ▼            ▼            ▼             ▼
┌──────────────────────────────────────────────────────────────┐
│                    SERVICE LAYER                             │
├──────────────────────────────────────────────────────────────┤
│ Content      │ AI Content    │ Quality      │ Publishing    │
│ Ingestion    │ Generation    │ Validation   │ Service       │
│              │               │              │               │
│ • Riverside  │ • Claude API  │ • AI Detect  │ • LinkedIn    │
│ • Grain      │ • Prompts     │ • ICP Score  │ • Customer.io │
│ • Gemini     │ • RAG         │ • Learning   │ • Webflow     │
│ • Manual     │               │              │ • Notion      │
└────┬─────────┴──────┬────────┴──────┬───────┴────┬──────────┘
     │                │               │            │
     ▼                ▼               ▼            ▼
┌──────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                │
├──────────────────────────────────────────────────────────────┤
│ PostgreSQL      │ Pinecone        │ Redis        │ S3        │
│ (Structured)    │ (Vector Store)  │ (Queue/Cache)│ (Files)   │
└──────────────────────────────────────────────────────────────┘
```

### 1.2 Component Breakdown

**API Layer:**
- REST API (FastAPI)
- Authentication & Authorization
- Request validation (Pydantic)
- Rate limiting
- Error handling

**Service Layer:**
- Content Ingestion Service
- AI Generation Service
- Quality Validation Service
- Publishing Service
- Analytics Service

**Data Layer:**
- PostgreSQL: Structured data (content, users, schedules)
- Pinecone: Vector embeddings (knowledge base, ICP profiles)
- Redis: Task queue, caching
- S3: File storage (audio, images)

---

## 2. Database Schema

### 2.1 PostgreSQL Tables

**users:**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50), -- 'approver', 'admin', 'viewer'
  auth_provider VARCHAR(50), -- 'google', 'email'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**content_sources:**
```sql
CREATE TABLE content_sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_type VARCHAR(50), -- 'podcast', 'book_chapter', 'manual'
  source_id VARCHAR(255), -- Riverside episode ID, etc.
  title VARCHAR(500),
  description TEXT,
  metadata JSONB, -- Guest info, recording date, etc.
  file_url VARCHAR(500), -- S3 URL
  transcript TEXT,
  transcript_source VARCHAR(50), -- 'riverside', 'assemblyai', 'manual'
  status VARCHAR(50), -- 'ingested', 'processing', 'completed', 'failed'
  created_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP
);
```

**content_items:**
```sql
CREATE TABLE content_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_id UUID REFERENCES content_sources(id),
  content_type VARCHAR(50), -- 'linkedin_post', 'newsletter', 'blog_post'
  title VARCHAR(500),
  content TEXT, -- Markdown format
  version INT DEFAULT 1,
  status VARCHAR(50), -- 'generated', 'in_review', 'approved', 'scheduled', 'published', 'failed'

  -- Quality Metrics
  ai_detection_score FLOAT, -- 0-1, higher = more human-like
  ai_detection_passed BOOLEAN,
  icp_score INT, -- 0-100
  icp_passed BOOLEAN,

  -- Predictions
  predicted_engagement JSONB, -- { likes: 150, comments: 12, etc. }
  best_publish_time TIMESTAMP,

  -- Scheduling
  scheduled_publish_time TIMESTAMP,
  published_at TIMESTAMP,
  published_url VARCHAR(500),

  -- Platform
  target_platform VARCHAR(50), -- 'linkedin', 'customer_io', 'webflow'
  platform_specific_data JSONB,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**content_edits:**
```sql
CREATE TABLE content_edits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_item_id UUID REFERENCES content_items(id),
  user_id UUID REFERENCES users(id),
  edit_type VARCHAR(50), -- 'change', 'addition', 'deletion'
  original_text TEXT,
  edited_text TEXT,
  section VARCHAR(100), -- 'hook', 'body', 'cta', etc.
  pattern_tag VARCHAR(100), -- 'too_formal', 'weak_hook', etc.
  created_at TIMESTAMP DEFAULT NOW()
);
```

**schedules:**
```sql
CREATE TABLE schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_item_id UUID REFERENCES content_items(id),
  scheduled_time TIMESTAMP NOT NULL,
  timezone VARCHAR(50) DEFAULT 'America/New_York',
  status VARCHAR(50), -- 'pending', 'published', 'failed', 'cancelled'
  error_message TEXT,
  retry_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**publishing_logs:**
```sql
CREATE TABLE publishing_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_item_id UUID REFERENCES content_items(id),
  platform VARCHAR(50),
  status VARCHAR(50), -- 'success', 'failed', 'retrying'
  request_payload JSONB,
  response_data JSONB,
  error_message TEXT,
  published_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**analytics:**
```sql
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_item_id UUID REFERENCES content_items(id),
  platform VARCHAR(50),

  -- Engagement metrics
  impressions INT DEFAULT 0,
  clicks INT DEFAULT 0,
  likes INT DEFAULT 0,
  comments INT DEFAULT 0,
  shares INT DEFAULT 0,

  -- Conversion metrics
  website_visits INT DEFAULT 0,
  lead_signups INT DEFAULT 0,
  demo_requests INT DEFAULT 0,

  -- Attribution
  attributed_revenue DECIMAL(10, 2) DEFAULT 0,

  last_updated TIMESTAMP DEFAULT NOW(),

  UNIQUE(content_item_id, platform)
);
```

**knowledge_base:**
```sql
CREATE TABLE knowledge_base (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  item_type VARCHAR(50), -- 'playbook', 'example_post', 'framework', 'character_diamond'
  title VARCHAR(500),
  content TEXT,
  metadata JSONB, -- Performance data for examples, etc.
  embedding_id VARCHAR(255), -- Pinecone vector ID
  created_at TIMESTAMP DEFAULT NOW()
);
```

**icp_profiles:**
```sql
CREATE TABLE icp_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source VARCHAR(100), -- 'grain_call', 'gemini_call'
  source_id VARCHAR(255), -- Recording ID

  -- Extracted data
  pain_points TEXT[],
  language_patterns TEXT[],
  objections TEXT[],
  goals TEXT[],
  role VARCHAR(100),
  company_size VARCHAR(50),
  industry VARCHAR(100),

  embedding_id VARCHAR(255), -- Pinecone vector ID
  created_at TIMESTAMP DEFAULT NOW()
);
```

**objections:**
```sql
CREATE TABLE objections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  objection_text TEXT NOT NULL,
  category VARCHAR(100), -- 'feasibility', 'roi', 'resources', etc.
  frequency INT DEFAULT 1, -- How many times mentioned
  severity VARCHAR(50), -- 'high', 'medium', 'low'
  stage VARCHAR(50), -- 'awareness', 'consideration', 'decision'

  -- Content generated
  content_generated BOOLEAN DEFAULT FALSE,
  content_item_ids UUID[], -- References to content_items

  first_mentioned TIMESTAMP DEFAULT NOW(),
  last_mentioned TIMESTAMP DEFAULT NOW()
);
```

### 2.2 Pinecone Index Schema

**knowledge_base_index:**
```python
{
  "dimension": 1536,  # OpenAI text-embedding-3-large
  "metric": "cosine",
  "metadata_config": {
    "indexed": ["item_type", "title", "performance_score"]
  }
}
```

**icp_index:**
```python
{
  "dimension": 1536,
  "metric": "cosine",
  "metadata_config": {
    "indexed": ["role", "company_size", "pain_point"]
  }
}
```

---

## 3. API Endpoints

### 3.1 Authentication

**POST /auth/login**
```json
Request:
{
  "email": "wes@productled.com",
  "provider": "google",
  "id_token": "..."
}

Response:
{
  "access_token": "jwt_token",
  "refresh_token": "refresh_token",
  "user": {
    "id": "uuid",
    "email": "wes@productled.com",
    "role": "approver"
  }
}
```

**POST /auth/refresh**
```json
Request:
{
  "refresh_token": "..."
}

Response:
{
  "access_token": "new_jwt_token"
}
```

### 3.2 Content Management

**GET /content/pending**
```json
Response:
{
  "bundles": [
    {
      "id": "uuid",
      "source_type": "podcast",
      "source_title": "Podcast #47 - Sarah Nguyen",
      "items": [
        {
          "id": "uuid",
          "content_type": "linkedin_post",
          "title": "The 5 Stages of PLG Maturity",
          "content": "...",
          "icp_score": 87,
          "predicted_engagement": {
            "likes": 150,
            "comments": 12
          },
          "scheduled_time": "2026-02-20T10:17:00Z",
          "status": "in_review"
        }
      ],
      "total_items": 11
    }
  ],
  "total_pending": 12
}
```

**PATCH /content/{id}**
```json
Request:
{
  "content": "Updated content...",
  "title": "New title"
}

Response:
{
  "id": "uuid",
  "content": "Updated content...",
  "version": 2,
  "updated_at": "2026-02-17T..."
}
```

**POST /content/{id}/approve**
```json
Request:
{
  "schedule_time": "2026-02-20T10:17:00Z",  # Optional
  "platform": "linkedin"  # Optional, defaults from content_type
}

Response:
{
  "status": "approved",
  "scheduled_for": "2026-02-20T10:17:00Z"
}
```

**POST /content/{id}/reject**
```json
Request:
{
  "reason": "Off-brand, doesn't sound like me"
}

Response:
{
  "status": "rejected"
}
```

**POST /content/bulk-approve**
```json
Request:
{
  "content_ids": ["uuid1", "uuid2", ...],
  "schedule_config": {
    "start_date": "2026-02-17",
    "distribution": "smart"  # or "manual"
  }
}

Response:
{
  "approved": 11,
  "scheduled_items": [...]
}
```

### 3.3 Content Generation

**POST /generate/podcast**
```json
Request:
{
  "source_type": "riverside_url",
  "source_data": "https://riverside.fm/...",
  "generate_types": ["pre_interview", "post_publish", "newsletter", "blog"]
}

Response:
{
  "job_id": "uuid",
  "status": "processing",
  "estimated_time_seconds": 120
}
```

**GET /generate/status/{job_id}**
```json
Response:
{
  "job_id": "uuid",
  "status": "completed",  # or "processing", "failed"
  "progress": 100,
  "generated_items": [
    {
      "id": "uuid",
      "content_type": "linkedin_post",
      "status": "in_review"
    }
  ]
}
```

### 3.4 Publishing

**POST /publish/{content_id}**
```json
Request:
{
  "platform": "linkedin",
  "schedule_time": "2026-02-20T10:17:00Z"  # Optional
}

Response:
{
  "status": "scheduled",  # or "published" if immediate
  "schedule_id": "uuid",
  "scheduled_for": "2026-02-20T10:17:00Z"
}
```

**GET /publish/status/{schedule_id}**
```json
Response:
{
  "status": "published",
  "published_at": "2026-02-20T10:17:03Z",
  "published_url": "https://linkedin.com/posts/...",
  "early_metrics": {
    "likes": 23,
    "comments": 4
  }
}
```

### 3.5 Analytics

**GET /analytics/summary**
```json
Query params:
?start_date=2026-02-10&end_date=2026-02-17

Response:
{
  "period": "2026-02-10 to 2026-02-17",
  "metrics": {
    "posts_published": 7,
    "total_reach": 12400,
    "total_engagements": 1240,
    "new_leads": 23
  },
  "top_performer": {
    "title": "The PLG Paradox",
    "likes": 340,
    "url": "..."
  },
  "time_saved_hours": 14.2
}
```

**GET /analytics/content/{id}**
```json
Response:
{
  "content_id": "uuid",
  "platform": "linkedin",
  "impressions": 3200,
  "clicks": 240,
  "likes": 150,
  "comments": 12,
  "shares": 8,
  "lead_signups": 3,
  "last_updated": "2026-02-20T15:00:00Z"
}
```

### 3.6 Webhooks

**POST /webhooks/riverside**
```json
Riverside webhook payload:
{
  "event": "episode_published",
  "episode_id": "...",
  "title": "...",
  "audio_url": "...",
  "transcript": "..."
}

Response:
{
  "status": "received",
  "job_id": "uuid"
}
```

**POST /webhooks/grain**
```json
Grain webhook payload:
{
  "event": "recording_ready",
  "recording_id": "...",
  "title": "...",
  "transcript_url": "..."
}

Response:
{
  "status": "received",
  "job_id": "uuid"
}
```

---

## 4. Service Layer

### 4.1 Content Ingestion Service

**Purpose:** Fetch content from external sources

**Components:**
```python
class ContentIngestionService:
    def ingest_riverside(self, episode_url: str):
        # 1. Fetch episode metadata
        # 2. Download audio file → S3
        # 3. Get/generate transcript
        # 4. Save to content_sources table
        # 5. Trigger generation job

    def ingest_grain(self, recording_id: str):
        # 1. Fetch from Grain API
        # 2. Download transcript
        # 3. Extract key moments
        # 4. Save to content_sources

    def ingest_manual(self, file: UploadFile, metadata: dict):
        # 1. Upload file → S3
        # 2. Process based on type (PDF, audio, etc.)
        # 3. Save to content_sources
```

**API Integrations:**
- Riverside API (if available, else manual URL)
- Grain API
- Gemini API
- AssemblyAI (transcription fallback)

### 4.2 AI Content Generation Service

**Purpose:** Generate content using Claude API + RAG

**Components:**
```python
class AIContentGenerationService:
    def __init__(self):
        self.claude_client = Anthropic(api_key=CLAUDE_API_KEY)
        self.embeddings_client = OpenAI(api_key=OPENAI_API_KEY)
        self.pinecone = PineconeClient()

    def generate_linkedin_posts(self, source_id: str, count: int = 7):
        # 1. Fetch source content
        # 2. Retrieve relevant knowledge base (RAG)
        # 3. Build prompt with context
        # 4. Call Claude API
        # 5. Parse response into individual posts
        # 6. Save to content_items
        # 7. Run quality checks

    def generate_newsletter(self, source_id: str):
        # Similar to above but long-form

    def generate_blog_post(self, source_id: str):
        # Similar to above
```

**RAG Pipeline:**
```python
def retrieve_knowledge_base(self, query: str, top_k: int = 5):
    # 1. Generate embedding for query
    embedding = self.embeddings_client.embeddings.create(
        model="text-embedding-3-large",
        input=query
    )

    # 2. Query Pinecone
    results = self.pinecone.query(
        index_name="knowledge_base",
        vector=embedding.data[0].embedding,
        top_k=top_k,
        include_metadata=True
    )

    # 3. Return relevant context
    return [r.metadata for r in results.matches]
```

**Prompt Engineering:**
```python
def build_linkedin_post_prompt(self, transcript: str, knowledge: list):
    system_prompt = f"""
    You are Wes Bush, CEO of ProductLed and bestselling author.

    VOICE & STYLE (from Character Diamond):
    - Known for: PLG expertise, tactical frameworks
    - Quirks: Loves free stuff, data-driven
    - Passions: Pickleball, travel
    - Tone: Professional but not corporate, friendly

    CONTENT PRINCIPLES:
    - No AI slop - sound human, not robotic
    - Strong hooks (first line must grab attention)
    - Clear, actionable CTAs (not vague)
    - Use "you" not "users" or "companies"
    - Short sentences, easy to scan

    KNOWLEDGE BASE:
    {format_knowledge(knowledge)}

    Generate 7 LinkedIn posts from this podcast transcript.
    Each post should stand alone and provide value.
    Mix formats: insights, frameworks, stories, hot takes.
    """

    user_prompt = f"""
    Podcast Transcript:
    {transcript}

    Generate 7 LinkedIn posts (200-400 words each).
    """

    return system_prompt, user_prompt
```

**Quality Checks (Built-in):**
- No AI slop phrases ("delve", "navigate", "landscape", etc.)
- Hook validation (first line <100 chars, engaging)
- CTA validation (must have clear action)
- Length check (LinkedIn: 200-400 words, Newsletter: 1000-1500)

### 4.3 Quality Validation Service

**Purpose:** Validate content quality before approval

**Components:**
```python
class QualityValidationService:
    def validate_content(self, content_item_id: str):
        # 1. Run AI detection
        ai_passed = self.check_ai_detection(content_item_id)

        # 2. Run ICP scoring
        icp_score = self.score_icp_match(content_item_id)

        # 3. Update content_item record
        # 4. Return pass/fail

    def check_ai_detection(self, content_item_id: str) -> bool:
        # 1. Get content
        # 2. Call Turnitin/GPTZero API
        # 3. If fails → auto-rewrite (max 3 attempts)
        # 4. Return final pass/fail

    def score_icp_match(self, content_item_id: str) -> int:
        # 1. Get content
        # 2. Retrieve ICP profiles from Pinecone
        # 3. Score against:
        #    - Language match (25%)
        #    - Pain point relevance (25%)
        #    - Tone & style (20%)
        #    - Technical level (15%)
        #    - CTA appropriateness (15%)
        # 4. Return score 0-100
```

**AI Detection Tools:**
- Primary: Turnitin AI Writing Detection API
- Fallback: GPTZero API or Originality.ai

**Humanization Rewrite:**
```python
def humanize_content(self, content: str, attempt: int) -> str:
    system_prompt = """
    Rewrite this content to sound more human and less AI-generated.

    Techniques:
    - Vary sentence length (mix short and long)
    - Use contractions (it's, you're, don't)
    - Add personal touches (stories, examples)
    - Use rhetorical questions
    - Natural transitions (not formulaic)
    - Unexpected word choices
    """

    response = claude.messages.create(
        model="claude-3-5-sonnet-20241022",
        messages=[{
            "role": "user",
            "content": f"Rewrite to be more human:\n\n{content}"
        }],
        system=system_prompt
    )

    return response.content[0].text
```

### 4.4 Publishing Service

**Purpose:** Publish content to external platforms

**Components:**
```python
class PublishingService:
    def publish_to_linkedin(self, content_item_id: str):
        # 1. Get content_item
        # 2. Format for LinkedIn API
        # 3. POST to LinkedIn Posts API
        # 4. Handle response
        # 5. Log to publishing_logs
        # 6. Update content_item status

    def publish_to_customerio(self, content_item_id: str):
        # 1. Get newsletter content
        # 2. Create broadcast via Customer.io API
        # 3. Send to segment
        # 4. Log and update status

    def publish_to_webflow(self, content_item_id: str):
        # 1. Get blog post content
        # 2. Create CMS item via Webflow API
        # 3. Set to published or draft
        # 4. Log and update

    def update_notion(self, content_item_id: str):
        # 1. Get content_item
        # 2. Update Notion database via API
        # 3. Set status, publish date, URL
```

**Error Handling & Retries:**
```python
@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=4, max=10),
    retry=retry_if_exception_type(RateLimitError)
)
def publish_with_retry(self, platform: str, content: dict):
    # Publish with automatic retry logic
```

**Rate Limiting:**
```python
# LinkedIn: Unknown (need to research)
# Customer.io: 1 req/10 sec
# Webflow: 60 req/min
# Notion: 3 req/sec

from ratelimit import limits, sleep_and_retry

@sleep_and_retry
@limits(calls=1, period=10)
def call_customerio_api(self, payload):
    # Rate-limited Customer.io calls
```

### 4.5 Analytics Service

**Purpose:** Track content performance and attribution

**Components:**
```python
class AnalyticsService:
    def sync_linkedin_metrics(self, content_item_id: str):
        # 1. Get published URL/ID
        # 2. Fetch metrics from LinkedIn API
        # 3. Update analytics table

    def sync_newsletter_metrics(self, content_item_id: str):
        # 1. Get broadcast ID from Customer.io
        # 2. Fetch open rate, click rate
        # 3. Update analytics

    def track_lead_attribution(self, lead_id: str, content_item_id: str):
        # 1. Link lead to content via UTM params
        # 2. Track in analytics table
        # 3. Enrich via n8n workflow

    def calculate_time_saved(self, user_id: str, period: str):
        # 1. Count approved content pieces
        # 2. Estimate manual time (10 min per piece)
        # 3. Track actual time spent in app
        # 4. Return difference
```

**RightMessage Integration:**
```python
def segment_audience(self, lead_data: dict):
    # 1. Call RightMessage API
    # 2. Get segment classification
    # 3. Store in user metadata
    # 4. Use for content targeting
```

**n8n Enrichment:**
```python
def enrich_lead(self, email: str):
    # 1. Trigger n8n workflow (webhook)
    # 2. n8n enriches via Clearbit/etc.
    # 3. n8n sends enriched data to Customer.io
    # 4. Update local analytics
```

---

## 5. Background Jobs (Celery)

### 5.1 Job Types

**Content Generation Jobs:**
```python
@celery.task
def generate_podcast_content(source_id: str):
    # Long-running AI generation
    # Progress updates via Redis

@celery.task
def generate_newsletter(source_id: str):
    # Similar
```

**Scheduled Publishing Jobs:**
```python
@celery.task
def publish_scheduled_content():
    # Runs every minute
    # Checks schedules table
    # Publishes items due now
```

**Analytics Sync Jobs:**
```python
@celery.task
def sync_all_metrics():
    # Runs every hour
    # Syncs LinkedIn, Customer.io metrics
    # Updates analytics table
```

**Learning & Optimization Jobs:**
```python
@celery.task
def analyze_edit_patterns():
    # Runs weekly
    # Analyzes content_edits table
    # Updates system prompts based on patterns

@celery.task
def update_icp_profiles():
    # Runs daily
    # Processes new Grain/Gemini calls
    # Extracts ICP insights
    # Updates Pinecone
```

### 5.2 Celery Configuration

```python
# celeryconfig.py
broker_url = 'redis://localhost:6379/0'
result_backend = 'redis://localhost:6379/0'

task_serializer = 'json'
accept_content = ['json']
timezone = 'America/New_York'
enable_utc = True

# Scheduled tasks
beat_schedule = {
    'publish-scheduled': {
        'task': 'publish_scheduled_content',
        'schedule': 60.0,  # Every minute
    },
    'sync-metrics': {
        'task': 'sync_all_metrics',
        'schedule': 3600.0,  # Every hour
    },
    'analyze-edits': {
        'task': 'analyze_edit_patterns',
        'schedule': crontab(day_of_week='monday', hour=0),  # Weekly
    },
}
```

---

## 6. External Integrations

### 6.1 LinkedIn API

**Authentication:**
- OAuth 2.0
- Scopes: `w_member_social` (personal posts), `rw_organization` (company pages)

**Endpoints:**
```python
# POST https://api.linkedin.com/rest/posts
headers = {
    "Authorization": f"Bearer {access_token}",
    "X-Restli-Protocol-Version": "2.0.0",
    "LinkedIn-Version": "202401",  # YYYYMM format
    "Content-Type": "application/json"
}

payload = {
    "author": f"urn:li:person:{person_id}",
    "commentary": "Post content here...",
    "visibility": "PUBLIC",
    "distribution": {
        "feedDistribution": "MAIN_FEED"
    },
    "lifecycleState": "PUBLISHED"
}
```

**Rate Limits:** TBD (need research)

### 6.2 Customer.io API

**Authentication:**
- Bearer token (from UI)

**Endpoints:**
```python
# POST https://api.customer.io/v1/campaigns/{broadcast_id}/triggers
headers = {
    "Authorization": f"Bearer {api_token}",
    "Content-Type": "application/json"
}

payload = {
    "data": {
        "subject": "Newsletter subject",
        "body": "<html>Newsletter content</html>",
        "preview_text": "Preview..."
    },
    "recipients": {
        "segment": {
            "id": segment_id
        }
    }
}
```

**Rate Limits:** 1 req/10 sec

### 6.3 Webflow CMS API

**Authentication:**
- Bearer token (from project settings)

**Endpoints:**
```python
# POST https://api.webflow.com/v2/collections/{collection_id}/items
headers = {
    "Authorization": f"Bearer {api_token}",
    "Content-Type": "application/json"
}

payload = {
    "isArchived": False,
    "isDraft": False,
    "fieldData": {
        "name": "Blog post title",
        "slug": "blog-post-title",
        "post-body": "<html>Blog content</html>",
        "meta-title": "SEO title",
        "meta-description": "SEO description"
    }
}
```

**Rate Limits:** 60 req/min

### 6.4 Notion API

**Authentication:**
- OAuth or Internal Integration token

**Endpoints:**
```python
# PATCH https://api.notion.com/v1/pages/{page_id}
headers = {
    "Authorization": f"Bearer {token}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
}

payload = {
    "properties": {
        "Status": {
            "select": {
                "name": "Published"
            }
        },
        "Publish Date": {
            "date": {
                "start": "2026-02-20"
            }
        },
        "URL": {
            "url": "https://linkedin.com/posts/..."
        }
    }
}
```

**Rate Limits:** 3 req/sec

### 6.5 Grain API

**Authentication:** TBD (need API docs)

**Expected functionality:**
- Fetch meeting recordings
- Get transcripts
- Extract highlights/key moments

### 6.6 Gemini API

**Authentication:** TBD

**Similar to Grain - fetch implementer call data**

### 6.7 Riverside API

**Authentication:** TBD (check if API exists)

**Fallback:** Manual URL input + scraping or webhook

### 6.8 AssemblyAI (Transcription)

**Authentication:**
- API key

**Endpoints:**
```python
# POST https://api.assemblyai.com/v2/transcript
headers = {
    "authorization": api_key,
    "content-type": "application/json"
}

payload = {
    "audio_url": "https://s3.amazonaws.com/..."
}
```

**Cost:** ~$0.25/hour of audio

### 6.9 Anthropic Claude API

**Authentication:**
- API key (x-api-key header)

**Endpoints:**
```python
import anthropic

client = anthropic.Anthropic(api_key=CLAUDE_API_KEY)

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=4096,
    system="You are Wes Bush...",
    messages=[{
        "role": "user",
        "content": "Generate LinkedIn posts from this podcast..."
    }]
)
```

**Cost:** ~$3/$15 per million tokens (input/output)
**Estimated monthly:** ~$200-400 for content generation

---

## 7. Cost Estimation

### 7.1 Monthly Costs (Estimated)

| Service | Usage | Cost |
|---------|-------|------|
| **Hosting (Railway/Fly.io)** | API + Workers | $50-100 |
| **Database (Supabase)** | PostgreSQL | $25-50 |
| **Vector DB (Pinecone)** | 1M vectors | $70 |
| **Storage (AWS S3)** | Audio files, images | $10-20 |
| **Redis (Upstash)** | Queue + cache | $10-20 |
| **Claude API** | Content generation | $200-400 |
| **OpenAI (Embeddings)** | RAG | $10-20 |
| **AssemblyAI** | Transcription (4-8 hrs/month) | $1-2 |
| **AI Detection (Turnitin)** | Per check | $20-50 |
| **Monitoring (Sentry)** | Error tracking | $26 (free tier OK) |
| **Total** | | **~$400-750/month** |

**Well under $1k/month budget ✅**

### 7.2 Scaling Costs

If volume increases 10x:
- Claude API: ~$2k-4k
- Pinecone: ~$200
- Hosting: ~$200

**Still manageable for ROI**

---

## 8. Development Phases

### Phase 1: Core Infrastructure (Week 1-2)
- [ ] FastAPI setup + project structure
- [ ] PostgreSQL database + migrations (Alembic)
- [ ] Supabase setup
- [ ] Pinecone setup
- [ ] Authentication (JWT, Google OAuth)
- [ ] Basic CRUD endpoints

### Phase 2: Content Ingestion (Week 3)
- [ ] Manual upload endpoint
- [ ] S3 integration
- [ ] AssemblyAI transcription
- [ ] Content source processing

### Phase 3: AI Generation (Week 4-5)
- [ ] Claude API integration
- [ ] RAG pipeline (Pinecone + OpenAI embeddings)
- [ ] Knowledge base upload
- [ ] Prompt engineering
- [ ] LinkedIn post generation
- [ ] Newsletter generation
- [ ] Blog post generation

### Phase 4: Quality Validation (Week 6)
- [ ] AI detection integration
- [ ] ICP scoring system
- [ ] Auto-rewrite logic
- [ ] Quality gates

### Phase 5: Publishing (Week 7-8)
- [ ] LinkedIn API integration
- [ ] Customer.io integration
- [ ] Webflow integration
- [ ] Notion integration
- [ ] Scheduling system (Celery)
- [ ] Error handling & retries

### Phase 6: Analytics (Week 9)
- [ ] Metrics syncing
- [ ] Attribution tracking
- [ ] RightMessage integration
- [ ] n8n webhooks

### Phase 7: Learning & Optimization (Week 10)
- [ ] Edit tracking
- [ ] Pattern analysis
- [ ] Prompt refinement
- [ ] ICP profile updates

---

## 9. Testing Strategy

### 9.1 Unit Tests
- All service methods
- API endpoint logic
- Prompt building
- Data transformations

### 9.2 Integration Tests
- Database operations
- External API calls (mocked)
- End-to-end workflows

### 9.3 Load Tests
- API performance (100 req/s)
- Concurrent content generation
- Database query performance

---

## 10. Monitoring & Logging

### 10.1 Application Monitoring
- Sentry for error tracking
- Datadog/New Relic for APM
- Custom metrics (content generated, published, etc.)

### 10.2 Logging
- Structured logging (JSON format)
- Log levels: DEBUG, INFO, WARNING, ERROR
- Centralized logging (CloudWatch or Elasticsearch)

### 10.3 Alerts
- Publishing failures
- API rate limit warnings
- Quality validation failures (high reject rate)
- System downtime

---

## 11. Security

### 11.1 API Security
- Rate limiting (per user, per endpoint)
- Input validation (Pydantic)
- SQL injection prevention (parameterized queries)
- CORS configuration
- Webhook signature verification

### 11.2 Data Security
- API keys in environment variables (not code)
- AWS Secrets Manager for sensitive data
- Encryption at rest (database)
- Encryption in transit (TLS 1.3)
- Regular security audits

---

## 12. Deployment

### 12.1 Infrastructure
**Option 1: Railway**
- Easy deployment
- Auto-scaling
- Built-in PostgreSQL
- Good for MVP

**Option 2: Fly.io**
- More control
- Global deployment
- Better pricing at scale

**Recommended:** Start with Railway, migrate to Fly.io if needed

### 12.2 CI/CD
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: pytest
      - name: Deploy to Railway
        run: railway up
```

---

## 13. Next Steps

1. **Week 1:** Set up infrastructure (database, APIs, auth)
2. **Week 2-5:** Build core features (ingestion, generation, validation)
3. **Week 6-8:** Integrate publishing platforms
4. **Week 9-10:** Analytics and learning systems
5. **Week 11:** Testing and optimization
6. **Week 12:** Launch

---

**Questions for Wes:**
1. Do you have API access to Grain, Gemini, Riverside?
2. Which Customer.io templates should we use?
3. What's your Notion database structure?
4. Ready to provision infrastructure accounts (Supabase, Pinecone)?
