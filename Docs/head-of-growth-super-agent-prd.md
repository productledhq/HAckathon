# Head of Growth Super Agent - Product Requirements Document

**Version:** 1.0
**Last Updated:** February 17, 2026
**Status:** Draft
**Owner:** ProductLed Growth Team

---

## Executive Summary

The Head of Growth Super Agent is an AI-powered marketing automation system designed to transform ProductLed's content distribution strategy. The system will enable the founder to maintain a high-volume, multi-channel content presence while reducing direct marketing time from ~10+ hours/week to ≤60 minutes/week.

**Core Value Proposition:**
- Automated repurposing of long-form content (podcasts, books) into short-form assets (LinkedIn posts, newsletters, blog posts)
- Multi-channel distribution with integrated approval workflow
- Self-improving AI that learns from user edits and maintains authentic voice
- Centralized content management via Notion with real-time tracking

**Primary Success Metric:** Reduce founder's weekly marketing time to 60 minutes while maintaining or improving content quality and output volume.

---

## 1. Problem Statement

### Current State
- **Volume bottleneck:** Team creates substantial long-form content but lacks systematic distribution
- **Founder time drain:** Content distribution requires 10+ hours/week of manual work
- **Inconsistent publishing:** Content sits idle instead of being repurposed across channels
- **Distribution gaps:** Good content doesn't reach maximum potential audience

### Pain Points
1. Founder loves creating (books, podcasts) but hates distributing (social posts, newsletters)
2. No automated system to break down long-form into short-form content
3. Manual posting across multiple platforms is time-consuming
4. No centralized view of what's published, when, and on which channels
5. Difficult to track content performance against business metrics

### Target State
- Automated content repurposing pipeline (long-form → short-form)
- Single weekly 60-minute approval session for all content
- Automated multi-channel distribution post-approval
- Real-time content calendar in Notion
- Self-improving AI that matches founder's voice and style
- Clear visibility into content performance and distribution health

---

## 2. Goals & Success Metrics

### Primary Goals
1. **Time Efficiency:** Reduce founder's marketing time to ≤60 minutes/week
2. **Content Volume:** Maintain consistent weekly output across all channels
3. **Quality:** Pass AI detection and maintain authentic voice
4. **Distribution:** Maximize reach of existing content assets

### Success Metrics

#### Operational Metrics
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Founder time spent/week | ≤60 minutes | Time tracking in approval workflow |
| LinkedIn posts/week | 5-7 | Notion database automation |
| Newsletter/week | 1 | Customer.io send logs |
| Blog posts/week | ≥1 | Webflow CMS records |
| Content approval time | <45 minutes | Timestamp tracking |
| AI detection pass rate | 100% | Automated checking before approval |

#### Quality Metrics
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| AI detection score | Pass Turnitin standard | Automated tool integration |
| Edit rate (% of content changed) | <20% after 3 months | Track changes in approval workflow |
| Voice consistency score | >85% | User satisfaction survey |
| Content reuse rate | >80% of long-form content | Notion database tracking |

#### Business Impact Metrics (Growth Scorecard)
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Website traffic | +20% QoQ | Google Analytics |
| Lead signups | +15% QoQ | CRM integration |
| Booked meetings | Track baseline → improvement | Salesforce/CRM |
| Digital product sales | Track baseline → improvement | Payment platform |
| Content attribution rate | >60% | UTM tracking + analytics |

---

## 3. User Personas

### Primary User: Wes (Founder)
**Role:** Content Creator & Final Approver
**Goals:**
- Spend time creating long-form content (books, podcasts)
- Minimize time on distribution and repurposing
- Maintain authentic voice and brand quality
- Track content performance against business goals

**Pain Points:**
- Hates repetitive content distribution tasks
- Limited time for marketing activities
- Needs to maintain quality control

**Usage Pattern:**
- Weekly: 1 approval session (~60 minutes)
- Occasional: Upload new book chapters, record podcasts
- Regular: Review growth scorecard metrics

### Secondary User: Team Members
**Role:** Content Operations & Support
**Goals:**
- Monitor system performance
- Handle edge cases and exceptions
- Track content calendar
- Report on distribution health

**Usage Pattern:**
- Daily: Monitor automated publishing
- Weekly: Review content calendar in Notion
- Monthly: Analyze performance metrics

---

## 4. System Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      INPUT SOURCES                           │
├─────────────────────────────────────────────────────────────┤
│  • Riverside (Podcast recordings)                           │
│  • Manual uploads (Book chapters, content ideas)            │
│  • Notion (Content ideas, scheduling tags)                  │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                   PROCESSING ENGINE                          │
├─────────────────────────────────────────────────────────────┤
│  1. Content Ingestion & Analysis                            │
│  2. AI Repurposing Engine (Claude/GPT-4)                    │
│  3. Voice & Style Adaptation Layer                          │
│  4. AI Detection & Quality Check                            │
│  5. Learning & Improvement Module                           │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│                   APPROVAL WORKFLOW                          │
├─────────────────────────────────────────────────────────────┤
│  • Consolidated weekly review interface                     │
│  • Side-by-side editing                                     │
│  • Batch approval/rejection                                 │
│  • Edit tracking for learning loop                          │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│              DISTRIBUTION & PUBLISHING                       │
├─────────────────────────────────────────────────────────────┤
│  • LinkedIn API (posts)                                     │
│  • Customer.io API (newsletters)                            │
│  • Webflow API (blog posts)                                 │
│  • Notion API (content database updates)                    │
│  • X/Twitter API (P2)                                       │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────┐
│              TRACKING & ANALYTICS                            │
├─────────────────────────────────────────────────────────────┤
│  • Notion content calendar (real-time)                      │
│  • Growth scorecard integration                             │
│  • Distribution health dashboard                            │
│  • Performance attribution                                  │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow
1. **Input:** New content detected (Riverside recording, book chapter upload)
2. **Processing:** AI analyzes and repurposes into target formats
3. **Quality Check:** AI detection + voice consistency validation
4. **Approval:** Present to user in consolidated weekly review
5. **Publishing:** Auto-distribute to approved channels
6. **Tracking:** Update Notion database + analytics
7. **Learning:** Capture edits and improve future outputs

---

## 5. Detailed Feature Requirements

### Phase 1 (P1) - Podcast Workflow MVP
**Target Launch:** 8-10 weeks from kickoff

#### 5.1 Content Ingestion

##### 5.1.1 Riverside Integration
- **Requirement:** Auto-detect new podcast recordings in Riverside
- **Trigger:** Webhook from Riverside when episode is published OR polling Riverside API every 2 hours
- **Data Captured:**
  - Episode title
  - Episode description
  - Audio file URL
  - Transcript (if available from Riverside)
  - Guest name(s)
  - Recording date
  - Publish date
- **Fallback:** Manual upload interface if Riverside API unavailable
- **Acceptance Criteria:**
  - System detects new recordings within 2 hours of publish
  - Automatically triggers repurposing workflow
  - Logs ingestion event in Notion

##### 5.1.2 Transcript Processing
- **Requirement:** Generate/process podcast transcript
- **Options:**
  - Use Riverside transcript (if included)
  - Use AssemblyAI/Deepgram for transcription
  - Use Whisper API for transcription
- **Processing:**
  - Clean transcript (remove filler words, false starts)
  - Identify key topics and themes
  - Extract quotable moments
  - Tag discussion segments
- **Acceptance Criteria:**
  - 95%+ transcript accuracy
  - Key moments identified automatically
  - Processing completes within 10 minutes of ingestion

#### 5.2 AI Content Generation

##### 5.2.1 Pre-Interview LinkedIn Posts
- **Requirement:** Generate 1-2 teaser posts before podcast records
- **Timing:** 2-3 days before scheduled recording
- **Content Strategy:**
  - Post 1: Introduce guest + their expertise
  - Post 2: Ask audience for questions they want answered
- **Inputs:**
  - Guest name and bio
  - Episode topic/theme
  - Scheduled recording date
- **Outputs:**
  - 2 LinkedIn posts (150-250 words each)
  - Engaging hook and CTA for questions
  - Tagged with guest (if they have LinkedIn)
- **Acceptance Criteria:**
  - Posts generated 48 hours before recording
  - Includes clear CTA for audience questions
  - Passes AI detection

##### 5.2.2 Post-Publish LinkedIn Posts
- **Requirement:** Generate 5-7 LinkedIn posts from podcast transcript
- **Content Strategy:**
  - Extract key insights, quotes, frameworks
  - Each post should stand alone (not require listening)
  - Mix of formats: quotes, insights, frameworks, stories
  - Include CTA to listen to full episode
- **Inputs:**
  - Full transcript
  - Key moments/timestamps
  - Guest information
  - Episode metadata
- **Outputs:**
  - 5-7 LinkedIn posts (200-400 words each)
  - Variety of angles/perspectives from episode
  - Links to podcast episode
- **Acceptance Criteria:**
  - Minimum 5 posts per episode
  - Each post provides standalone value
  - Diverse content types (not all quotes)
  - Passes AI detection
  - Maintains Wes's voice

##### 5.2.3 Newsletter Generation
- **Requirement:** Generate weekly newsletter from podcast
- **Content Strategy:**
  - Blog-post style long-form (1,000-1,500 words)
  - Deep dive into key insight from episode
  - Structured sections with headers
  - Actionable takeaways
  - CTA to listen to full episode
  - Substantial enough to repurpose as blog post
- **Inputs:**
  - Podcast transcript
  - Key themes
  - Supporting materials (if available)
- **Outputs:**
  - Newsletter draft (1,000-1,500 words)
  - Subject line options (3 variants)
  - Preview text
  - Formatted for Customer.io template
- **Acceptance Criteria:**
  - Passes AI detection
  - Matches Wes's newsletter voice
  - Includes clear structure and takeaways
  - Can be converted to blog post with minimal edits

##### 5.2.4 Blog Post Generation (Podcast-based)
- **Requirement:** Convert newsletter into blog post format
- **Content Strategy:**
  - Adapt newsletter content for web
  - Add SEO optimization (keywords, meta description)
  - Include internal links where relevant
  - Add structured headings (H2, H3)
- **Inputs:**
  - Approved newsletter content
  - SEO keywords (optional)
  - Related blog posts for linking
- **Outputs:**
  - Blog post draft (1,200-2,000 words)
  - Meta title and description
  - Suggested featured image
  - Internal linking recommendations
- **Acceptance Criteria:**
  - SEO-optimized structure
  - Passes AI detection
  - Formatted for Webflow CMS
  - Maintains content quality from newsletter

#### 5.3 Quality & Voice Control

##### 5.3.1 AI Detection System
- **Requirement:** Every piece of content must pass AI detection before user review
- **Detection Tools:**
  - Primary: Turnitin AI detector (or equivalent)
  - Secondary: GPTZero or Originality.ai as backup
- **Process:**
  - Automatic check after initial generation
  - If fails: Auto-rewrite using "humanization" techniques
  - Re-check after rewrite
  - Maximum 3 rewrite attempts
  - Flag to user if still failing after 3 attempts
- **Humanization Techniques:**
  - Vary sentence structure and length
  - Add personal anecdotes/examples
  - Use contractions and conversational tone
  - Include rhetorical questions
  - Vary paragraph length
  - Add unexpected transitions
- **Acceptance Criteria:**
  - 100% of content presented to user has passed AI detection
  - <5% require manual intervention after 3 auto-rewrites
  - User never sees content that fails detection

##### 5.3.2 Voice & Style Learning System
- **Requirement:** System learns from user edits and improves over time
- **Learning Inputs:**
  - User edits during approval (track changes)
  - Consistent patterns across multiple reviews
  - Approved vs. rejected content
  - Per-content-type preferences (LinkedIn ≠ newsletter)
- **Learning Outputs:**
  - Updated system prompts per content type
  - Style guide refinements
  - Voice consistency improvements
- **Implementation:**
  - Track all edits in database with timestamps
  - Weekly analysis of edit patterns
  - Monthly prompt refinement based on patterns
  - A/B testing of prompt variations
- **Acceptance Criteria:**
  - Edit rate decreases by 25% after 3 months
  - User satisfaction score >85% after 6 months
  - System identifies 80%+ of consistent edit patterns

##### 5.3.3 Knowledge Base Integration
- **Requirement:** Upload and integrate Product-Led Playbook and PLG materials
- **Knowledge Base Contents:**
  - **Product-Led Playbook** (book)
  - **Character Diamond** (Wes's personal brand framework)
    - What you're known for (PLG expertise)
    - Your quirks (loves free stuff)
    - Your passions (pickleball, travel)
    - Your kryptonite/flaws/pain/story (origin story, struggles)
    - Purpose: Ensures content reflects authentic personality
  - **Best-performing newsletters** (examples)
  - **Best-performing LinkedIn posts** (examples)
  - **Best-performing blog posts** (examples)
  - **PLG frameworks and methodologies**
  - **ProductLed product descriptions**
  - **Brand voice guidelines**
- **Usage:**
  - RAG (Retrieval Augmented Generation) for content generation
  - Reference frameworks and terminology
  - Maintain consistency with established PLG concepts
  - Inject personality from Character Diamond (quirks, passions)
  - Balance expertise with humanity (show the person, not just the expert)
- **Acceptance Criteria:**
  - All knowledge base materials uploaded and indexed
  - System correctly references PLG concepts
  - Generated content aligns with established frameworks
  - Terminology matches Product-Led Playbook
  - Content reflects Wes's personality (Character Diamond elements appear naturally)

##### 5.3.4 "Show Your Work" Content Prompt
- **Requirement:** Periodically prompt Wes to share behind-the-scenes work
- **Why:** Transparency builds trust, shows the journey not just outcomes
- **Trigger Scenarios:**
  - Writing book chapters ("I'm writing about X topic today")
  - Running experiments ("Testing a new PLG tactic with Client Y")
  - Creating frameworks ("Developing the [X] model this week")
  - Learning new things ("Deep dive into AI-powered onboarding")
  - Making mistakes ("Here's what didn't work and why")
- **Prompt System:**
  - Weekly check-in: "What are you working on this week?"
  - Auto-detect work from calendar: "Book writing block scheduled → prompt to share"
  - Notion integration: Track current projects, suggest sharing progress
- **Content Generated:**
  - LinkedIn post: "Working on [X] today. Here's what I'm learning..."
  - Newsletter section: "Behind the scenes this week"
  - Blog post series: "Building [Framework] in public"
- **Examples:**
  ```
  Prompt: "You have 'Book Writing' blocked today. Share your work?"

  Generated Post:
  "Spent the morning writing Chapter 8 on Growth Loops.

  One insight that's emerging: Most teams confuse growth loops with
  flywheels. They're related but different...

  [Thread explaining the distinction]

  This will be in the book, but wanted to share early. Thoughts?"
  ```
- **Benefits:**
  - Humanizes expertise (not just polished outcomes)
  - Creates content from daily work (leverage existing effort)
  - Builds audience connection (following the journey)
  - Generates engagement (people love WIP content)
- **Implementation:**
  - Calendar integration (detect "writing", "research", "building" blocks)
  - Notion project tracker (current priorities)
  - Weekly prompt: "Share your work?" checkbox
  - One-click generate from current project
- **Acceptance Criteria:**
  - System prompts weekly for work-in-progress sharing
  - Generated content maintains quality bar (not just status updates)
  - Includes insight/learning, not just "I'm working on X"
  - User can skip if no work to share that week

#### 5.4 Approval Workflow

##### 5.4.1 Consolidated Review Interface
- **Requirement:** Single weekly session to review all content
- **Interface Components:**
  - Left panel: List of all pending content grouped by type
  - Center panel: Content preview/editor
  - Right panel: Metadata, distribution settings, scheduling
- **Content Grouping:**
  - By source (Podcast Episode #123)
  - By type (LinkedIn, Newsletter, Blog)
  - By week (Week of Feb 17-23)
- **Actions:**
  - Approve (single item)
  - Approve all (bulk)
  - Edit inline
  - Reject with feedback
  - Schedule for later
- **Editing Features:**
  - Rich text editor
  - Track changes visible
  - Auto-save every 30 seconds
  - Undo/redo
  - Word count display
- **Acceptance Criteria:**
  - Complete review in <60 minutes
  - All content for week visible in one session
  - Edits tracked for learning system
  - Bulk actions available
  - Mobile-responsive for review on-the-go

##### 5.4.2 Publishing Controls
- **Requirement:** Configure distribution settings per content piece
- **Settings:**
  - Publish immediately vs. schedule
  - Select target platforms (LinkedIn, Newsletter, Blog, etc.)
  - Scheduling options (date + time)
  - Posting cadence (if scheduling multiple items)
- **Intelligent Scheduling:**
  - Recommend optimal posting times based on analytics
  - Auto-distribute 5-7 LinkedIn posts across week
  - Suggest newsletter send day/time
  - Prevent over-posting (max posts per day)
- **Acceptance Criteria:**
  - Granular control per content piece
  - Intelligent default recommendations
  - Calendar preview of scheduled posts
  - Ability to reschedule after approval

#### 5.5 Multi-Channel Distribution

##### 5.5.1 LinkedIn Integration
- **API:** LinkedIn Posts API
- **Functionality:**
  - Auto-post on approval (immediate or scheduled)
  - Post as Wes (personal profile)
  - Tag guests if mentioned
  - Include links to podcast episode
- **Posting Cadence:**
  - Spread 5-7 posts across week (not all at once)
  - Recommended times: M/W/F 9am, T/Th 2pm, weekend 10am
- **Error Handling:**
  - Retry logic (3 attempts with exponential backoff)
  - Alert user if posting fails
  - Log to Notion with error status
- **Acceptance Criteria:**
  - Posts appear on LinkedIn within 5 minutes of scheduled time
  - 99%+ posting success rate
  - Failures logged and alerted

##### 5.5.2 Customer.io Integration (Newsletter)
- **API:** Customer.io Campaigns & Broadcasts API
- **Functionality:**
  - Create newsletter broadcast
  - Use existing Customer.io template
  - Send to designated segment/list
  - Schedule send time
- **Newsletter Schedule:**
  - Default: Every Thursday 8am ET (proposed)
  - User can override per newsletter
- **Template Handling:**
  - Map content to template fields
  - Include subject line, preview text, body
  - Maintain template styling/formatting
- **Error Handling:**
  - Validate before sending
  - Preview link generated for user review
  - Confirmation before send
- **Acceptance Criteria:**
  - Newsletter sent at scheduled time
  - Correct template formatting
  - Sent to correct audience segment
  - Delivery confirmed in Customer.io

##### 5.5.3 Webflow Integration (Blog Posts)
- **API:** Webflow CMS API
- **Functionality:**
  - Create new blog post in CMS
  - Populate all required fields
  - Set to draft or publish immediately
  - Include SEO metadata
- **Blog Post Fields:**
  - Title
  - Slug (auto-generated from title)
  - Body content (rich text)
  - Featured image (uploaded or URL)
  - Meta title & description
  - Author (Wes)
  - Publish date
  - Categories/tags
- **Publishing Options:**
  - Draft mode (for user review in Webflow)
  - Immediate publish
  - Scheduled publish
- **Acceptance Criteria:**
  - Post created in Webflow CMS
  - All fields populated correctly
  - SEO metadata included
  - Published or staged as specified

##### 5.5.4 Notion Integration (Content Database)
- **API:** Notion Database API
- **Functionality:**
  - Update content database in real-time
  - Track all content pieces
  - Update status as workflow progresses
  - Provide calendar view
- **Database Fields:**
  - Content title
  - Type (LinkedIn, Newsletter, Blog, etc.)
  - Status (Generated, In Review, Approved, Published, Failed)
  - Source (Podcast Episode #, Book Chapter #, etc.)
  - Publish date/time
  - Platform(s)
  - Performance metrics (engagement, clicks, etc.)
  - Link to published content
- **Views:**
  - Calendar view (day-by-day publishing schedule)
  - Kanban view (by status)
  - Table view (all fields)
  - Gallery view (content preview)
- **Acceptance Criteria:**
  - Real-time updates (<30 seconds)
  - All content tracked
  - Accurate status updates
  - Multiple view options

#### 5.6 User Experience

##### 5.6.1 Login & Authentication
- **Requirement:** Clean, focused login - not overwhelming dashboard
- **Authentication:**
  - Email + password
  - Magic link option
  - Google OAuth option
  - Multi-factor authentication (optional)
- **Team Access:**
  - Multiple user accounts
  - Role-based permissions (Admin, Editor, Viewer)
  - Activity log (who did what)
- **Acceptance Criteria:**
  - Simple login flow (<3 steps)
  - Team members can access independently
  - Secure authentication (OAuth 2.0 standard)

##### 5.6.2 Main Dashboard
- **Requirement:** Overview of content pipeline and status
- **Dashboard Sections:**
  - Pending approval count
  - This week's publishing calendar
  - Recent activity feed
  - Quick actions (Start review, Upload content, View analytics)
  - System health indicators
- **Design Principles:**
  - Minimal, not overwhelming
  - Focus on action items
  - Quick access to approval workflow
- **Acceptance Criteria:**
  - Load time <2 seconds
  - Clear call-to-action
  - At-a-glance status understanding

##### 5.6.3 Content Upload Interface
- **Requirement:** Easy upload for book chapters, content ideas
- **Upload Options:**
  - Drag-and-drop file upload
  - Text paste
  - URL input (for podcast episodes if manual)
- **Supported Formats:**
  - PDF (book chapters)
  - Word documents (.docx)
  - Text files (.txt, .md)
  - Audio files (.mp3, .wav) - for podcast
  - URLs (Riverside episode links)
- **Metadata Collection:**
  - Content type
  - Title
  - Description (optional)
  - Target outputs (what to generate from this)
- **Acceptance Criteria:**
  - Upload completes in <30 seconds
  - Clear progress indicator
  - Confirmation message
  - Automatic trigger of processing

#### 5.7 Content Ideas Inbox
- **Requirement:** Automatically capture and generate content ideas from multiple sources
- **Why P1:** Ensures never running out of ideas; critical for maintaining weekly output
- **Data Sources:**
  - **Client calls** (transcribe → extract insights)
    - Grain recordings (all Wes's meetings)
    - Gemini recordings (all implementer meetings with clients)
    - Auto-detect: "This would make great content" moments
  - **Team conversations**
    - Slack channel monitoring (AI spots good stories)
    - Email threads with interesting insights
    - Internal notes from client success team
  - **Competitor intelligence**
    - Track competitor blogs, LinkedIn posts
    - Identify trending topics
    - Suggest counter-perspectives or gaps
  - **Google Alerts**
    - Monitor PLG topics, trends
    - News mentions of product-led growth
    - Industry developments
  - **Audience questions**
    - LinkedIn comment questions
    - Newsletter reply questions
    - DM inquiries

**Processing Pipeline:**
1. **Ingestion:** Collect from all sources (automated)
2. **Analysis:** AI extracts key insights, stories, quotes
3. **Ranking:** Score ideas by:
   - Relevance to ICP (see ICP Evaluator)
   - Trend momentum
   - Uniqueness/differentiation
   - Content gap (haven't covered recently)
4. **Presentation:** Weekly "Content Ideas Digest"

**Weekly Content Ideas Digest (Every Monday):**
```
📥 Content Ideas Inbox - Week of Feb 17

🔥 Top 5 Ideas (Ranked by Relevance):

1. ⭐⭐⭐⭐⭐ "The PLG Pricing Paradox"
   Source: Client call with Sarah (Grain recording)
   Insight: "We had 10,000 free users but couldn't figure out pricing.
            Once we implemented usage-based, conversion jumped 3x."
   Why it's hot: Pricing is #1 audience question (12 asks this week)
   Suggested format: Framework post + newsletter

2. ⭐⭐⭐⭐ "Why AI Makes PLG More Important (Not Less)"
   Source: Trending topic (+340% mentions this week)
   Counter-angle: Competitors saying "AI kills PLG"
   Your take: AI accelerates product-led motion
   Suggested format: Hot take post + thread

3. ⭐⭐⭐⭐ "How to Onboard 1,000 Users/Week Without Hiring"
   Source: Implementer call with Client X (Gemini recording)
   Story: Scaled onboarding 10x with automated flows
   Why it resonates: ICP pain point (63% struggle with scale)
   Suggested format: Case study + playbook

4. ⭐⭐⭐ "The 5-Question PLG Readiness Assessment"
   Source: Content gap (haven't covered in 8 months)
   Demand: High traffic on old post (still getting 200 views/week)
   Opportunity: Update for 2026, add AI considerations
   Suggested format: Lead magnet + blog post

5. ⭐⭐⭐ "Notion's PLG Strategy (What They Don't Tell You)"
   Source: Competitor analysis
   Angle: Reverse-engineer their growth tactics
   Differentiation: No one else covering this angle
   Suggested format: Deep-dive newsletter

💡 Other Ideas Worth Considering (15):
[Collapsed list...]

🎯 Actions:
[Select Ideas to Develop] [Defer All] [Add Custom Idea]
```

**Technical Implementation:**
- Grain API integration (fetch meeting recordings)
- Gemini API integration (fetch implementer recordings)
- Transcript processing (extract key moments)
- Slack monitoring (webhook or bot)
- Email parsing (Gmail API)
- Competitor tracking (RSS feeds, web scraping)
- Scoring algorithm (multi-factor ranking)
- Weekly digest generation

**Acceptance Criteria:**
- New ideas appear in inbox within 24 hours of source
- Minimum 10 ideas per week generated
- Top 5 ranked accurately (validated by Wes)
- One-click to convert idea → content generation
- Ideas linked back to original source (for context)

**Integration with ICP Evaluator:**
- Each idea scored against ICP resonance
- Ideas that won't resonate with ICP filtered out
- Only show ideas with ICP match >70%

---

#### 5.8 ICP Evaluator Agent
- **Requirement:** Validate content resonates with ideal customer profile BEFORE publishing
- **Why P1:** Critical quality filter - prevents content that doesn't land with target audience
- **The Problem:** AI can generate grammatically perfect content that completely misses the mark with your actual customers

**How It Works:**

**Step 1: Build ICP Knowledge Base**
- Upload implementer call recordings (Grain/Gemini)
  - 50+ client calls
  - Capture: pain points, language, objections, wins
- Extract ICP profile:
  - Demographics (role, company size, industry)
  - Psychographics (motivations, fears, goals)
  - Language patterns (how they describe problems)
  - Decision criteria (what makes them buy)
  - Common objections

**Step 2: Content Evaluation**
Before content goes to approval workflow, ICP Evaluator scores it:

```
🎯 ICP Resonance Check

Content: "The 5-Stage PLG Maturity Model"
Type: LinkedIn Post

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ICP Match Score: 87/100 ✅

✅ PASSES - Safe to publish

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Breakdown:

✅ Language Match: 92/100
   Uses ICP vocabulary: "time to value", "product-market fit",
   "expansion revenue" (all terms from client calls)

✅ Pain Point Relevance: 88/100
   Addresses top ICP pain: "We don't know what stage we're at"
   (mentioned in 12/50 client calls)

✅ Tone & Style: 85/100
   Matches ICP preference for frameworks + tactical advice
   (vs. theoretical or overly sales-y)

⚠️  Technical Level: 78/100
   Slightly too high-level for implementation teams
   Suggestion: Add 1-2 tactical examples

✅ CTA Appropriateness: 90/100
   Low-commitment CTA matches awareness stage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 ICP Simulation (Based on Real Client Calls):

Persona: Sarah - VP Product at Series B SaaS ($5M ARR)

Likely reaction: ✅ POSITIVE
"This is exactly what we needed! We've been stuck trying to
figure out if we should focus on acquisition or retention.
This framework shows we're clearly at Stage 2 and need to
prioritize onboarding. Sharing with my team."

Likely action:
• Saves post (82% probability)
• Shares with team (65% probability)
• Comments with question (45% probability)
• Books discovery call (12% probability)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✏️ Suggested Improvements:

1. Add tactical example in Stage 2:
   "Example: At Stage 2, Company X reduced onboarding time
   from 14 days to 3 days by implementing [specific tactic]"

2. Include self-assessment question:
   "Which stage is your company at? Comment below and I'll
   share specific tactics for your stage."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Accept As-Is] [Apply Suggestions] [Reject Content]
```

**Example: Content That FAILS ICP Check**

```
🎯 ICP Resonance Check

Content: "10 Productivity Hacks for Founders"
Type: LinkedIn Post

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ICP Match Score: 34/100 ❌

❌ DOES NOT PASS - Do not publish

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Issues:

❌ Relevance: 20/100
   Not related to PLG, product-led growth, or SaaS growth
   Your ICP follows you for PLG expertise, not general productivity

❌ Language Match: 40/100
   Generic "founder" language vs. specific PLG/product terminology

❌ Pain Point: 25/100
   Doesn't address any ICP pain points from client calls

❌ Brand Alignment: 35/100
   Off-brand - you're the PLG expert, not productivity guru

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 ICP Simulation:

Persona: Sarah - VP Product at Series B SaaS

Likely reaction: ❌ NEGATIVE
"This is weird... I followed Wes for PLG insights, why is he
posting productivity tips? Feels off-brand."

Likely action:
• Scrolls past (95% probability)
• Unfollows (8% probability)
• No engagement (98% probability)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  RECOMMENDATION: Do not publish

Alternative: Generate PLG-specific content instead
Suggested pivot: "10 Product-Led Growth Metrics Every VP Should Track"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Generate Alternative] [Reject Content]
```

**ICP Evaluator Training Data:**
- 50+ implementer call recordings (real ICPs talking about real problems)
- Best-performing historical content (what resonated)
- Worst-performing content (what flopped)
- Direct ICP feedback (comments, DMs, emails)
- Survey data (if available)

**Scoring Criteria:**
1. **Language Match (25%)** - Uses ICP vocabulary and terminology
2. **Pain Point Relevance (25%)** - Addresses actual ICP challenges
3. **Tone & Style (20%)** - Matches ICP communication preference
4. **Technical Level (15%)** - Appropriate depth for audience
5. **CTA Appropriateness (15%)** - Right ask for audience stage

**Pass/Fail Thresholds:**
- **90-100:** Exceptional - will likely be top performer
- **70-89:** Good - safe to publish
- **50-69:** Marginal - needs improvement
- **<50:** Fail - do not publish, regenerate

**Auto-Actions:**
- Score >70: Auto-pass to approval workflow
- Score 50-69: Flag for review with suggested improvements
- Score <50: Auto-reject, generate alternative

**Learning Loop:**
- Track published content performance
- Correlate ICP score with actual engagement
- Refine scoring model based on outcomes
- "This scored 65 but got 300 likes - update model"

**Technical Implementation:**
- RAG system with ICP call transcripts
- Semantic similarity matching (content vs. ICP language)
- Pain point extraction from transcripts
- Persona simulation using GPT-4 or Claude
- Scoring algorithm (multi-factor)
- Continuous learning pipeline

**Acceptance Criteria:**
- Every content piece evaluated before approval
- Evaluation completes in <30 seconds
- Score accuracy validated (high scores = high engagement)
- False positive rate <10% (good content flagged as bad)
- False negative rate <5% (bad content passes through)
- Wes agrees with evaluation 80%+ of the time

**Integration Points:**
- Runs AFTER AI detection check (no point evaluating if it fails detection)
- Runs BEFORE approval workflow (only show good content to Wes)
- Feeds data to Content Ideas Inbox (what topics resonate)
- Informs voice learning system (what language patterns work)

---

#### 5.9 Growth Session Sales Objection Intelligence
- **Requirement:** Extract sales objections from growth session calls and turn into content
- **Why P1/P2:** Addresses biggest barrier to conversion - answering objections publicly
- **Data Source:** Growth session call recordings (Grain/Gemini) with prospects and leads

**The Opportunity:**
Every sales objection is a content opportunity. If one prospect objects, hundreds more have the same concern but never voice it. Address objections through content = lower friction, higher conversion.

**How It Works:**

**Step 1: Objection Extraction**
- Analyze all growth session call transcripts (Grain/Gemini)
- Identify objections, concerns, hesitations:
  - "PLG won't work in enterprise"
  - "We tried PLG before, it didn't work"
  - "Our product is too complex for self-serve"
  - "We don't have eng resources for this"
  - "How long until we see results?"
- Classify by:
  - Type (feasibility, ROI, resources, timing, complexity)
  - Frequency (how often mentioned)
  - Stage (awareness, consideration, decision)
  - Severity (deal-breaker vs. minor concern)

**Step 2: Objection Clustering**
```
Objection: "PLG doesn't work in enterprise"
Frequency: 12 mentions across 45 calls
Severity: HIGH (deal-breaker)
Stage: Consideration

Related objections:
• "Long sales cycles conflict with PLG" (8 mentions)
• "Procurement blocks self-serve" (6 mentions)
• "Enterprise buyers want human touch" (7 mentions)

Cluster: "Enterprise PLG Skepticism"
```

**Step 3: Content Generation Strategy**

**For Common Objections (10+ mentions):**
→ Full blog post addressing objection

```
Objection: "PLG doesn't work in enterprise" (12 mentions)

Generated Content:
Blog Post: "Why PLG Works in Enterprise (Despite What You've Heard)"
- Address objection head-on
- Provide counter-examples (Slack, Notion, Figma)
- Framework: The Enterprise PLG Playbook
- Case studies: Enterprise companies who succeeded
- Action plan: How to implement

Newsletter: Feature blog post
LinkedIn: 3-5 posts from blog (myths, examples, framework)
```

**For Moderate Objections (5-9 mentions):**
→ LinkedIn post or newsletter section

```
Objection: "We don't have eng resources" (6 mentions)

Generated Content:
LinkedIn Post: "You Don't Need a Big Eng Team for PLG"
- Debunk misconception
- Low-code/no-code approaches
- Prioritization framework
- Start small examples
```

**For Minor Objections (2-4 mentions):**
→ FAQ, quick post, or save for content compilation

```
Objection: "How do we handle enterprise security?" (3 mentions)

Generated Content:
FAQ entry or Quick LinkedIn post
- Address briefly
- Link to resources
- Offer deeper dive call
```

**Step 4: Objection Content Calendar**

System generates content addressing top objections:

```
📊 Objection Intelligence Report - February 2026

Top Objections This Month:

1. 🔴 "PLG doesn't work in enterprise" (12 mentions)
   → GENERATE: Blog post + newsletter + 5 LinkedIn posts
   → PRIORITY: High (deal-breaker objection)
   → TIMELINE: Publish next week

2. 🟡 "How long to see results?" (9 mentions)
   → GENERATE: Blog post "PLG Timeline Expectations"
   → PRIORITY: Medium (decision factor)
   → TIMELINE: Month 2

3. 🟡 "Too complex for self-serve" (7 mentions)
   → GENERATE: LinkedIn post series + framework
   → PRIORITY: Medium
   → TIMELINE: Month 2

4. 🟢 "Need executive buy-in" (4 mentions)
   → GENERATE: Quick post + template
   → PRIORITY: Low
   → TIMELINE: Month 3

[Generate All] [Select Priority] [Defer]
```

**Step 5: Objection Response Templates**

For sales team to use immediately:

```
Objection: "PLG doesn't work in enterprise"

Quick Response Template:
"I hear this often! Actually, some of the most successful PLG
companies are enterprise-focused - Slack, Notion, Figma all
serve enterprise. The key is adapting PLG for enterprise buying
processes. I just wrote about this here: [link to content]

Would you like to see how Company X implemented this?"

CTA: Share content + book follow-up
```

**Benefits:**

1. **Proactive Objection Handling:** Address concerns before they arise
2. **Sales Enablement:** Give sales team content to share
3. **Content Market Fit:** Create content around real pain points
4. **Conversion Optimization:** Remove friction in buyer journey
5. **Thought Leadership:** Position as expert who understands challenges

**Content Types Generated:**

- **Blog Posts:** Deep dives on major objections
- **LinkedIn Posts:** Quick objection rebuttals
- **Newsletter Sections:** "Common Questions" feature
- **Case Studies:** Proof points for objections
- **Frameworks:** Tools to overcome objections
- **Templates:** For prospects to use internally

**Integration with Sales:**

- Share objection content in CRM (HubSpot/Salesforce)
- Auto-suggest content when objection mentioned in call
- Track: Content shared → objection overcome → deal closed
- Feedback loop: Did content help close deal?

**Technical Implementation:**

- Grain/Gemini API integration (fetch all growth session calls)
- Transcript analysis (NLP to extract objections)
- Clustering algorithm (group similar objections)
- Frequency tracking (count mentions over time)
- Content generation pipeline (objection → content brief → draft)
- CRM integration (link content to deals)

**Acceptance Criteria:**

- All growth session calls analyzed within 24 hours
- Objections extracted with >80% accuracy
- Top objections ranked by frequency + severity
- Content generated for objections with 5+ mentions
- Sales team can access objection library
- Track: objection content → deals influenced

**Phasing:**

- **P1:** Manual process (review calls, identify objections, generate content)
- **P2 (Month 4):** Automated extraction and clustering
- **P3 (Month 7):** Auto-generate content from objections
- **P4 (Month 10):** Predictive objection handling (anticipate objections)

---

### Phase 2 (P2) - Extended Features
**Target Launch:** 3-6 months post-P1

#### 5.7 Book Chapter Repurposing
- **Requirement:** Auto-repurpose book chapters into LinkedIn posts + newsletter
- **Content Strategy:**
  - 1 chapter → 7-10 LinkedIn posts
  - 1 chapter → 1 long-form newsletter (2,000+ words)
  - 1 chapter → 1-2 blog posts
- **Processing:**
  - Identify key concepts per chapter
  - Extract frameworks, examples, case studies
  - Generate standalone posts for each concept
  - Create deep-dive newsletter
- **Acceptance Criteria:**
  - Minimum 7 posts per chapter
  - Newsletter provides unique angle (not just summarizing)
  - Blog post includes additional context/examples

#### 5.8 Event Promotion Workflow
- **Requirement:** Generate promotion content for cohort launches, programs
- **Trigger:** User creates event in Notion or uploads event details
- **Content Generated:**
  - Pre-launch teaser posts (2-3 weeks before)
  - Launch announcement posts
  - Social proof posts (testimonials, case studies)
  - Last-chance posts (final week)
  - Post-event recap
- **Platforms:**
  - LinkedIn
  - Newsletter
  - Blog post (event announcement)
- **Acceptance Criteria:**
  - Complete promotion sequence generated
  - Timed appropriately (pre, during, post event)
  - Includes social proof and CTAs

#### 5.9 Remarketing Ad Generation
- **Requirement:** Generate ad copy for remarketing campaigns
- **Platforms:**
  - LinkedIn Ads
  - Facebook/Instagram Ads
  - Google Display Ads
- **Ad Formats:**
  - Single image ads
  - Carousel ads
  - Video ads (script generation)
- **Targeting:**
  - Past webinar attendees
  - Blog readers
  - Email subscribers (non-customers)
- **Acceptance Criteria:**
  - Multiple ad variants generated
  - Platform-specific formatting
  - Clear CTAs and value propositions

#### 5.10 YouTube Video Content
- **Requirement:** Generate YouTube video scripts and descriptions
- **Content Sources:**
  - Podcast episodes (full episode upload)
  - Podcast clips (highlights)
  - Original video content (planned recordings)
- **Outputs:**
  - Video title (SEO-optimized)
  - Description (keywords, links, timestamps)
  - Thumbnail suggestions
  - Video script (if original content)
- **Acceptance Criteria:**
  - YouTube-optimized titles and descriptions
  - Timestamp chapters for podcast episodes
  - SEO keywords integrated

#### 5.11 X/Twitter Integration
- **API:** X/Twitter API v2
- **Functionality:**
  - Auto-post tweets
  - Thread generation from long-form content
  - Cross-post from LinkedIn (adapted for Twitter style)
- **Content Strategy:**
  - 1-2 tweets per LinkedIn post (shorter format)
  - Threads for deep-dive topics
- **Acceptance Criteria:**
  - Posts within character limit
  - Thread formatting correct
  - Links and media included

#### 5.12 Notion-Based Scheduling
- **Requirement:** Change Notion tag to trigger posting
- **Workflow:**
  - Content sits in "Ready" status in Notion
  - User changes tag to "Post on [date]"
  - System detects tag change
  - Auto-publishes at specified date/time
- **Tag Options:**
  - "Post Now"
  - "Post on [specific date]"
  - "Schedule Optimal" (system chooses best time)
- **Acceptance Criteria:**
  - Tag changes detected within 5 minutes
  - Posts published at correct time
  - Status updated in Notion

---

## 6. Technical Requirements

### 6.1 Technology Stack

#### Backend
- **Primary:** Node.js or Python
  - Recommendation: **Python** (better AI/ML libraries, easier LLM integration)
- **Framework:** FastAPI or Flask
- **Database:** PostgreSQL (structured data) + Vector DB for knowledge base (Pinecone/Weaviate)
- **Queue System:** Redis + Celery (for async processing)
- **File Storage:** AWS S3 or Google Cloud Storage

#### AI/LLM Integration
- **Primary LLM:** Claude 3.5 Sonnet (Anthropic)
  - Reasoning: Best at maintaining consistent voice, following instructions
  - Fallback: GPT-4 Turbo (OpenAI)
- **Transcription:** AssemblyAI or Whisper API
- **AI Detection:** Turnitin AI Detector API + GPTZero
- **Embeddings:** OpenAI text-embedding-3-large (for knowledge base)

#### Frontend
- **Framework:** React or Next.js
- **UI Library:** Tailwind CSS + Shadcn/UI
- **State Management:** Zustand or Redux Toolkit
- **Rich Text Editor:** Tiptap or Lexical

#### Infrastructure
- **Hosting:** AWS, Google Cloud, or Vercel
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry (errors) + Datadog (performance)
- **Logging:** CloudWatch or Elasticsearch

### 6.2 API Integrations

#### Required APIs (P1)
| Service | API | Use Case | Rate Limits | Authentication |
|---------|-----|----------|-------------|----------------|
| LinkedIn | Posts API | Publishing posts | Unknown (research needed) | OAuth 2.0 |
| Customer.io | Campaigns API | Sending newsletters | 1 req/10 sec | Bearer token |
| Webflow | CMS API | Creating blog posts | 60 req/min | Bearer token |
| Notion | Database API | Content tracking | 3 req/sec | OAuth 2.0 or token |
| Riverside | API (TBD) | Fetching recordings | TBD | TBD |
| AssemblyAI | Transcription API | Podcast transcripts | Varies by plan | API key |
| Anthropic | Claude API | Content generation | Varies by tier | API key |
| Turnitin | AI Detection | Quality check | TBD | API key |

#### Additional APIs (P2)
- X/Twitter API v2 (posting)
- YouTube Data API v3 (video uploads, metadata)
- Google Analytics API (performance tracking)
- LinkedIn Ads API (remarketing)

### 6.3 Data Models

#### Content Piece
```json
{
  "id": "uuid",
  "type": "linkedin_post|newsletter|blog_post",
  "title": "string",
  "content": "string (markdown or HTML)",
  "status": "generated|in_review|approved|published|failed",
  "source_id": "uuid (podcast episode, book chapter, etc.)",
  "source_type": "podcast|book|manual",
  "created_at": "timestamp",
  "updated_at": "timestamp",
  "scheduled_publish_time": "timestamp",
  "published_at": "timestamp",
  "platform": "linkedin|customer_io|webflow",
  "metadata": {
    "ai_detection_score": "float",
    "edit_count": "int",
    "approval_time_seconds": "int",
    "published_url": "string"
  }
}
```

#### Podcast Episode
```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "guest_name": "string",
  "guest_bio": "string",
  "recording_date": "date",
  "publish_date": "date",
  "audio_url": "string",
  "transcript": "string",
  "transcript_source": "riverside|assemblyai|manual",
  "key_moments": [
    {
      "timestamp": "string (HH:MM:SS)",
      "topic": "string",
      "quote": "string"
    }
  ],
  "generated_content_ids": ["uuid array"],
  "status": "ingested|processing|completed"
}
```

#### User Edit
```json
{
  "id": "uuid",
  "content_piece_id": "uuid",
  "user_id": "uuid",
  "edit_type": "change|addition|deletion",
  "original_text": "string",
  "edited_text": "string",
  "section": "string (intro, body, cta, etc.)",
  "timestamp": "timestamp",
  "pattern_tag": "string (e.g., 'too_formal', 'missing_cta')"
}
```

### 6.4 Security & Compliance

#### Authentication & Authorization
- OAuth 2.0 for all third-party integrations
- JWT tokens for session management
- Role-based access control (RBAC)
- API keys stored in secure vault (AWS Secrets Manager)

#### Data Privacy
- GDPR compliance (data deletion, export)
- SOC 2 Type II considerations
- Encryption at rest (database) and in transit (TLS 1.3)
- Regular security audits

#### API Security
- Rate limiting on all endpoints
- Input validation and sanitization
- CORS policies
- Webhook signature verification

---

## 7. UX/Design Principles - Making It Fun for Busy Founders

### 7.1 Core Philosophy

**The Problem:** Most B2B tools are boring, functional, and feel like work.
**The Goal:** Make content approval genuinely enjoyable - something Wes looks forward to, not dreads.

**Design Principles:**
1. **Delight over Utility** - Beautiful, not just functional
2. **Speed over Features** - Fast interactions, instant feedback
3. **Clarity over Cleverness** - Obvious, not requiring onboarding
4. **Polish over Perfection** - Typography, spacing, micro-interactions matter

---

### 7.2 Visual Design System

#### Design Inspiration
- **Notion:** Clean, minimal, great typography, content-focused
- **ChatGPT:** Conversational, easy to scan, clear hierarchy
- **Linear:** Fast, polished, satisfying interactions
- **Arc Browser:** Beautiful, opinionated, delightful details

#### Color Palette
```
Primary: ProductLed Brand Colors
Background: #FFFFFF (light mode), #1A1A1A (dark mode)
Surface: #F7F7F7 (light), #2A2A2A (dark)
Text Primary: #1A1A1A (light), #F7F7F7 (dark)
Text Secondary: #6B6B6B (light), #A0A0A0 (dark)
Accent: #0066FF (primary action)
Success: #00C853 (approved, published)
Warning: #FFA726 (needs attention)
Error: #FF5252 (failed, rejected)
```

#### Typography System

**Font Stack:**
```
Headings: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Code/Mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace
```

**Type Scale:**
```
Hero (H1):      32px / 40px line height / 600 weight / -0.02em letter-spacing
Title (H2):     24px / 32px / 600 / -0.01em
Heading (H3):   18px / 28px / 600 / -0.01em
Body Large:     16px / 24px / 400 / normal
Body:           14px / 21px / 400 / normal
Body Small:     12px / 18px / 400 / normal
Caption:        11px / 16px / 500 / 0.01em (uppercase)
```

**Typography Rules:**
- Minimum 1.5 line-height for readability
- Max 70 characters per line for body text
- Generous spacing between paragraphs (1.5em)
- Use system font stack for performance
- Dark mode: Slightly reduce font weight (optical compensation)

#### Spacing System
```
Base unit: 4px

Spacing scale:
xs:   4px   (tight elements)
sm:   8px   (related items)
md:   16px  (sections)
lg:   24px  (major sections)
xl:   32px  (page sections)
2xl:  48px  (page divisions)
3xl:  64px  (major breaks)
```

**Spacing Philosophy:**
- More whitespace = less overwhelming
- Generous padding on interactive elements (min 44px touch target)
- Consistent rhythm (multiples of 4px)

---

### 7.3 Approval Workflow UX

#### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Header (72px fixed)                                        │
│  ┌──────────────────────┬─────────────┬──────────────────┐  │
│  │ Logo  "12 to review" │  Progress   │  Profile  [Exit] │  │
│  └──────────────────────┴─────────────┴──────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Sidebar (280px)       │  Content Area (fluid)              │
│  ┌─────────────────┐   │  ┌──────────────────────────────┐ │
│  │                 │   │  │                              │ │
│  │ Content List    │   │  │  Content Preview/Editor      │ │
│  │                 │   │  │                              │ │
│  │ [Bundle 1]  (3) │   │  │  [Rich text editor]          │ │
│  │ [Bundle 2]  (7) │   │  │                              │ │
│  │ [Bundle 3]  (2) │   │  │  Scrollable content          │ │
│  │                 │   │  │                              │ │
│  │                 │   │  │                              │ │
│  │ Filters ▼       │   │  │                              │ │
│  │ □ LinkedIn      │   │  │                              │ │
│  │ □ Newsletter    │   │  └──────────────────────────────┘ │
│  │ □ Blog          │   │                                    │
│  │                 │   │  Actions (sticky bottom)           │
│  │                 │   │  ┌──────────────────────────────┐ │
│  │                 │   │  │ [Reject] [Edit] [Approve] ✓  │ │
│  │                 │   │  └──────────────────────────────┘ │
│  └─────────────────┘   │                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Notion-Inspired Editing Experience

**Features:**
- **Slash commands:** Type `/` for quick actions
  - `/heading` - Insert heading
  - `/bullet` - Bullet list
  - `/quote` - Block quote
  - `/cta` - Call-to-action block
- **Markdown shortcuts:** `##` for heading, `*` for bold, `-` for list
- **Block-based editing:** Each paragraph is a block, hover to see actions
- **Drag to reorder:** Grab handle on left to reorder blocks
- **Inline formatting:** Highlight text to see formatting menu
- **Auto-save:** Every 2 seconds, with subtle indicator

**Editing Toolbar (on text selection):**
```
┌─────────────────────────────────────────┐
│ B  I  U  S  Code  Link  ✨ AI Fix      │
└─────────────────────────────────────────┘
```

**AI Fix Button:**
- Highlight awkward sentence → Click "✨ AI Fix"
- Instantly rewrites to be more natural
- Shows before/after, accept or reject

#### ChatGPT-Inspired Content Display

**Features:**
- Clean, conversational layout
- Generous line-height for easy scanning
- Clear visual hierarchy (headings stand out)
- Syntax highlighting for code snippets (if any)
- Progressive disclosure (expand for details)

**Content Card Style:**
```
┌─────────────────────────────────────────────────┐
│  LinkedIn Post #1 of 7                    [✓]  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                 │
│  The 5 Stages of PLG Maturity                   │
│                                                 │
│  Most SaaS companies think they're "doing PLG"  │
│  but they're actually stuck at Stage 1...       │
│                                                 │
│  [Read full content 240 words ↓]                │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │ 🎯 ICP Score: 87/100 ✅                  │   │
│  │ 📊 Predicted: ~150 likes                │   │
│  │ ⏰ Best time: Thu 10:17 AM               │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  [Reject]  [Edit]  [Approve ✓]                 │
└─────────────────────────────────────────────────┘
```

---

### 7.4 Micro-Interactions & Delight

#### Satisfying Feedback
- **Approve:** Smooth checkmark animation + subtle confetti burst
- **Reject:** Card slides left and fades out
- **Edit Save:** Pulsing save indicator "Saved ✓" fades in/out
- **Content Generated:** Progress bar with estimated time remaining
- **Publishing:** Rocket ship animation 🚀 when post goes live

#### Keyboard Shortcuts
```
Navigation:
↑/↓          Navigate content list
Enter        Expand/edit current item
Cmd+Enter    Approve current item
Cmd+Delete   Reject current item
Tab          Jump to next editable section

Editing:
Cmd+B        Bold
Cmd+I        Italic
Cmd+K        Add link
Cmd+Z        Undo
Cmd+S        Save (though auto-save handles this)
Esc          Exit editing mode

Power User:
Cmd+A        Approve all visible
Cmd+Shift+A  Approve entire bundle
Cmd+/        Show keyboard shortcuts
```

**Keyboard Shortcut Hints:**
- Subtle grey text shows shortcuts next to buttons
- Example: "Approve ✓  ⌘↵"
- Tooltip on hover shows full shortcut

#### Loading States
**Never show spinners - show progress:**
- ~~"Loading..."~~ ❌
- "Generating 7 LinkedIn posts... (2/7)" ✅
- Progress bar with estimated time
- Show what's happening: "Analyzing transcript..."

#### Empty States
**Make them encouraging, not boring:**
- ~~"No content to review"~~ ❌
- "🎉 You're all caught up! Next batch ready Monday." ✅
- Include illustration or animation
- Suggest next action

#### Error States
**Friendly, actionable, never blaming:**
- ~~"Error: Failed to publish"~~ ❌
- "Couldn't publish to LinkedIn. Check connection? [Retry]" ✅
- Show what went wrong and how to fix
- Auto-retry in background when possible

---

### 7.5 Mobile Experience

#### Philosophy
**Mobile = Quick Actions, Not Full Editing**

Mobile is for:
- ✅ Reviewing content on-the-go
- ✅ Quick approvals (swipe right)
- ✅ Voice feedback ("make this more casual")
- ✅ Checking status
- ❌ NOT for deep editing (use desktop)

#### Mobile Layout

**Content Swipe Cards:**
```
┌──────────────────────────┐
│                          │
│    ← Reject    Approve → │
│                          │
│  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  │
│                          │
│  LinkedIn Post 3 of 12   │
│                          │
│  The PLG Metrics That    │
│  Actually Matter         │
│                          │
│  Most teams track the    │
│  wrong metrics...        │
│                          │
│  [Tap to read full]      │
│                          │
│  🎯 ICP: 92/100          │
│  📊 Est: 180 likes       │
│                          │
│  ↑ Swipe up to edit      │
│                          │
└──────────────────────────┘

[Progress: ●●●●●○○○○○○○]
```

**Gestures:**
- **Swipe Right:** Approve ✅
- **Swipe Left:** Reject ❌
- **Swipe Up:** Edit ✏️
- **Long Press:** Voice feedback 🎤
- **Double Tap:** Expand to full view

**Voice Feedback:**
```
┌──────────────────────────┐
│                          │
│   🎤 Recording...        │
│                          │
│   ⏺ Hold to record       │
│      feedback            │
│                          │
│   [Waveform animation]   │
│                          │
│   Release when done      │
│                          │
└──────────────────────────┘
```

**Voice Commands:**
- "Approve" - Approves current card
- "Reject" - Rejects current card
- "Make it shorter" - Edits content
- "Too formal, make it casual" - Tone adjustment
- "Add a CTA for the book" - Content addition
- "Approve all" - Batch approval

---

### 7.6 Gamification & Engagement

#### Progress Indicators
**Weekly Goal Tracker:**
```
┌────────────────────────────────────────┐
│  This Week's Content Goal              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Published: 12/15 posts                │
│  ████████████░░░░ 80%                  │
│                                        │
│  On track for Friday completion 🎯     │
└────────────────────────────────────────┘
```

#### Approval Speed
**Show time savings:**
```
┌────────────────────────────────────────┐
│  ⚡ Review Session Complete             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Time spent: 23 minutes                │
│  Content approved: 12 pieces           │
│  Time saved: ~3 hours                  │
│                                        │
│  🏆 New record! (prev: 28 min)         │
└────────────────────────────────────────┘
```

#### Weekly Recap
**Celebrate wins:**
```
┌────────────────────────────────────────┐
│  📊 This Week's Impact                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Posts published: 7 ✅                  │
│  Newsletter sent: 1 ✅                  │
│  Blog posts: 2 ✅                       │
│                                        │
│  Total reach: 12,400 people            │
│  Engagement: 1,240 interactions        │
│  New leads: 23 🎉                      │
│                                        │
│  Top performer:                        │
│  "The PLG Paradox" - 340 likes         │
│                                        │
│  Your time invested: 42 minutes        │
│  ROI: 17.6x (hours saved vs. spent)    │
└────────────────────────────────────────┘
```

#### Streaks
**Consistency rewards:**
```
🔥 7 Week Streak
You've approved content on time every week!

Keep it going to unlock:
□ 10 weeks: Advanced analytics
□ 20 weeks: Priority support
□ 50 weeks: Custom feature
```

---

### 7.7 Performance & Speed

#### Speed Targets
```
Page load:           <1 second
Content generation:  <30 seconds (with progress)
Save/edit:           <100ms
Approval action:     <200ms (instant feedback)
Publishing:          <5 seconds (background)
```

#### Optimization Strategies
- **Lazy loading:** Load content as you scroll
- **Prefetching:** Pre-load next content card in background
- **Optimistic UI:** Show success immediately, sync in background
- **Service workers:** Cache static assets, work offline
- **Code splitting:** Load only what's needed for current view
- **Image optimization:** WebP, lazy load, responsive sizes

#### Perceived Performance
**Make it FEEL fast even if it's not:**
- Skeleton screens (not spinners)
- Instant feedback (before API response)
- Progress indicators (show what's happening)
- Smooth animations (60fps)
- Preemptive loading (predict next action)

---

### 7.8 Accessibility

#### WCAG 2.1 AA Compliance
- Color contrast ratio ≥4.5:1 for body text
- Color contrast ratio ≥3:1 for large text
- Keyboard navigation for all actions
- Screen reader support (ARIA labels)
- Focus indicators on all interactive elements
- No content flashing >3 times/second

#### Keyboard Users
- Tab through all interactive elements
- Clear focus indicators (2px outline)
- Skip links ("Skip to content")
- Keyboard shortcuts (with hints)

#### Screen Readers
- Semantic HTML (proper heading hierarchy)
- ARIA labels on icons
- Alt text on images
- Live regions for dynamic updates
- Descriptive link text (not "click here")

---

### 7.9 Dark Mode

#### Auto-Detection
- Respect system preference (prefers-color-scheme)
- Manual toggle in settings
- Remember user preference

#### Dark Mode Adjustments
- Reduce pure white to #F7F7F7 (less eye strain)
- Reduce pure black to #1A1A1A (better contrast)
- Slightly reduce font weight (optical compensation)
- Desaturate bright colors (less harsh)
- Higher contrast on interactive elements

---

### 7.10 Design System Implementation

#### Component Library
**Build reusable components:**
- Button (primary, secondary, ghost, danger)
- Input (text, textarea, select, checkbox)
- Card (content card, bundle card, stat card)
- Modal (dialog, sheet, popover)
- Toast (success, error, warning, info)
- Badge (status, count, label)
- Progress (bar, circle, step indicator)
- Avatar (user, team, system)

#### Shadcn/UI Integration
- Use Shadcn/UI as foundation
- Customize with ProductLed brand colors
- Add custom components as needed
- Ensure consistency across all views

#### Storybook Documentation
- Document all components
- Show all variants and states
- Provide usage guidelines
- Include accessibility notes

---

### 7.11 Fun Factor Checklist

**Every screen should:**
- [ ] Load in <1 second
- [ ] Have generous whitespace (not cramped)
- [ ] Use consistent typography (type scale)
- [ ] Provide instant feedback on actions
- [ ] Show progress, not just "loading"
- [ ] Use satisfying micro-animations
- [ ] Support keyboard shortcuts
- [ ] Work beautifully in dark mode
- [ ] Have delightful empty states
- [ ] Celebrate wins (gamification)
- [ ] Make Wes smile at least once per session 😊

---

## 8. Solutions to Open Questions

### 7.1 Riverside Auto-Export Mechanism
**Question:** How to trigger content ingestion from Riverside?

**Proposed Solution:**
- **Option 1 (Preferred):** Riverside Webhook
  - Configure webhook in Riverside to notify our system when episode publishes
  - Webhook payload includes episode metadata + transcript
  - Most reliable, real-time trigger
- **Option 2 (Fallback):** API Polling
  - Poll Riverside API every 2 hours for new episodes
  - Compare against last processed episode
  - Auto-trigger ingestion for new episodes
- **Option 3 (Manual):** Email Trigger
  - Riverside sends notification email when episode published
  - Parse email, extract episode URL
  - Trigger ingestion from URL

**Implementation:** Start with Option 2 (polling), upgrade to Option 1 if Riverside supports webhooks

### 7.2 Pre-Interview Post Timing
**Question:** When to post pre-interview teaser posts?

**Proposed Solution:**
- **Timeline:**
  - **Post 1 (Guest Introduction):** 3 days before recording
  - **Post 2 (Audience Questions):** 2 days before recording
- **Reason:** Gives audience time to submit questions, but not so early that they forget
- **Trigger:** User sets recording date in Notion → system auto-schedules posts
- **Manual Override:** User can adjust timing in approval workflow

### 7.3 Post-Publish Clips: Text vs. Video
**Question:** Should post-publish content be text quotes or video clips?

**Proposed Solution:**
- **P1 (MVP):** Text-based posts only
  - Extract quotes and insights from transcript
  - Faster to generate, easier to approve
  - Lower production overhead
- **P2 (Enhancement):** Add video clip generation
  - Automatically clip key moments from video
  - Generate captions and subtitles
  - Requires video editing automation (Descript API, etc.)

**Reasoning:** Start simple with text, validate system, then add video complexity

### 7.4 Notion Database Structure
**Question:** What fields and statuses in Notion content database?

**Proposed Solution:**
```
Database Name: "Content Calendar"

Fields:
- Title (Title field)
- Type (Select: LinkedIn Post, Newsletter, Blog Post, Twitter Thread, etc.)
- Status (Select: Generated, In Review, Approved, Scheduled, Published, Failed)
- Source (Relation to "Content Sources" database)
- Publish Date (Date)
- Platform (Multi-select: LinkedIn, Customer.io, Webflow, Twitter, etc.)
- Published URL (URL)
- Performance (Rollup from analytics)
- Generated At (Created time)
- Approved By (Person)
- Notes (Text)

Views:
1. Calendar View (by Publish Date)
2. Kanban Board (by Status)
3. This Week (filter: Publish Date = this week)
4. Pending Approval (filter: Status = In Review)
```

### 7.5 Newsletter Day & Timing
**Question:** Which day and time to send newsletter?

**Proposed Solution:**
- **Day:** Thursday
- **Time:** 8:00 AM ET
- **Reasoning:**
  - Thursday = high email engagement day (mid-week, pre-weekend)
  - 8 AM ET = catches both East Coast morning and West Coast early hours
  - Avoids Monday (inbox overload) and Friday (weekend mode)
- **Flexibility:** User can override per newsletter in approval workflow
- **Testing:** A/B test timing after 3 months, optimize based on open rates

### 7.6 Newsletter Content Strategy
**Question:** Weekly podcast summary vs. standalone deep-dive?

**Proposed Solution:**
- **Hybrid Approach:**
  - **Core Content:** Deep-dive into ONE key insight from podcast (not a summary)
  - **Structure:**
    - Hook: Start with compelling problem/story
    - Insight: Expand on single concept from podcast
    - Framework: Provide actionable framework/steps
    - Examples: Include 1-2 real-world applications
    - CTA: Link to full podcast for deeper exploration
  - **Benefit:** Provides standalone value + drives podcast listens

### 7.7 Customer.io Template Situation
**Question:** Use existing templates or create new?

**Proposed Solution:**
- **Phase 1:** Audit existing Customer.io templates
  - If suitable template exists → use it
  - Map our content fields to template structure
- **Phase 2:** Create dedicated "AI-Generated Content" template
  - Design template specifically for our system's output format
  - Include dynamic sections (header, body, CTA, footer)
  - Ensure mobile-responsive and on-brand
- **Fallback:** Generate HTML directly from our system, send as custom HTML via API

**Action Item:** Review current Customer.io setup in discovery phase

### 7.8 LinkedIn Posting Schedule
**Question:** Immediate posting vs. scheduled throughout week?

**Proposed Solution:**
- **Strategy:** Scheduled distribution throughout week
- **Cadence:** 5-7 posts spread across 7 days
- **Optimal Times (based on B2B engagement data):**
  - Monday: 9:00 AM ET
  - Tuesday: 2:00 PM ET
  - Wednesday: 9:00 AM ET
  - Thursday: 10:00 AM ET
  - Friday: 2:00 PM ET
  - Saturday: 10:00 AM ET (optional)
  - Sunday: Skip (low engagement)
- **Reasoning:**
  - Consistent presence without overwhelming audience
  - Maximizes reach across different time zones
  - Aligns with when B2B audience is active
- **Manual Override:** User can adjust timing in approval workflow

### 7.9 Optimal Posting Cadence
**Question:** How to determine best posting frequency?

**Proposed Solution:**
- **Initial Cadence:**
  - LinkedIn: 5-7 posts/week (no more than 1/day)
  - Newsletter: 1/week (Thursday 8am ET)
  - Blog: 1-2/week (publish Mon/Thurs)
  - Twitter (P2): 2-3/day
- **Optimization Process:**
  - Track engagement metrics per platform
  - A/B test posting times (weeks 8-12)
  - Analyze engagement drop-off if posting too frequently
  - Adjust cadence based on data
- **Guardrails:**
  - Never more than 1 LinkedIn post per day (avoid spam perception)
  - Newsletter always weekly (consistency builds trust)
  - Blog posts minimum 3 days apart (avoid content cannibalization)

---

## 8. Implementation Roadmap

### Phase 1: MVP - Podcast Workflow (Weeks 1-10)

#### Week 1-2: Foundation & Setup
- [ ] Finalize technical architecture
- [ ] Set up development environment
- [ ] Configure database (PostgreSQL + vector DB)
- [ ] Set up API authentication for all services
- [ ] Create Notion database structure
- [ ] Audit existing Customer.io templates

#### Week 3-4: Content Ingestion
- [ ] Build Riverside integration (polling mechanism)
- [ ] Implement transcript processing (AssemblyAI)
- [ ] Create podcast episode data model
- [ ] Build manual upload interface
- [ ] Test end-to-end ingestion flow

#### Week 5-6: AI Content Generation
- [ ] Integrate Claude API
- [ ] Build knowledge base (RAG system)
- [ ] Upload Product-Led Playbook + examples
- [ ] Implement pre-interview post generation
- [ ] Implement post-publish post generation (5-7 posts)
- [ ] Implement newsletter generation
- [ ] Implement blog post generation

#### Week 7: Quality & Learning Systems
- [ ] Integrate AI detection API (Turnitin)
- [ ] Build auto-rewrite logic
- [ ] Implement edit tracking system
- [ ] Create learning loop (analyze edit patterns)
- [ ] Test humanization techniques

#### Week 8: Approval Workflow
- [ ] Build review interface (frontend)
- [ ] Implement inline editing
- [ ] Add bulk actions (approve all, reject, etc.)
- [ ] Create publishing controls
- [ ] Implement scheduling logic

#### Week 9: Distribution & Publishing
- [ ] LinkedIn API integration
- [ ] Customer.io API integration
- [ ] Webflow API integration
- [ ] Notion database updates
- [ ] Error handling and retry logic
- [ ] Build publishing confirmation system

#### Week 10: Testing & Launch
- [ ] End-to-end testing with real podcast
- [ ] User acceptance testing (Wes)
- [ ] Fix bugs and refinements
- [ ] Create user documentation
- [ ] Launch to production
- [ ] Monitor first week of usage

### Phase 2: Extended Features (Weeks 11-24)

#### Weeks 11-14: Book Chapter Repurposing
- [ ] Book chapter ingestion
- [ ] Chapter-to-posts generation logic
- [ ] Long-form newsletter from chapters
- [ ] Testing with real book chapters

#### Weeks 15-17: Event Promotion
- [ ] Event data model
- [ ] Promotion sequence generation
- [ ] Timeline-based scheduling
- [ ] Social proof integration

#### Weeks 18-20: YouTube & Video
- [ ] YouTube API integration
- [ ] Video script generation
- [ ] SEO optimization for video
- [ ] Thumbnail suggestions

#### Weeks 21-22: X/Twitter Integration
- [ ] Twitter API v2 integration
- [ ] Thread generation logic
- [ ] Cross-posting from LinkedIn

#### Weeks 23-24: Notion-Based Scheduling & Polish
- [ ] Tag-based trigger system
- [ ] Advanced scheduling options
- [ ] Performance analytics dashboard
- [ ] System optimizations

### Phase 3: Growth & Optimization (Ongoing)

#### Months 4-6:
- [ ] A/B testing of posting times
- [ ] Voice model refinement (learning loop results)
- [ ] Performance attribution (growth scorecard)
- [ ] Distribution health monitoring
- [ ] Remarketing ad generation
- [ ] Advanced analytics integration

---

## 9. Growth Scorecard Integration

### 9.1 Metrics to Track

#### Top-of-Funnel
- Website traffic (total, unique visitors)
- Traffic by source (LinkedIn, newsletter, blog, organic search)
- Content engagement (time on page, bounce rate)
- Social media engagement (likes, comments, shares)

#### Middle-of-Funnel
- Lead signups (newsletter subscribers, content downloads)
- Email list growth rate
- Lead magnet conversion rate
- Webinar registrations

#### Bottom-of-Funnel
- Booked meetings (implementation program)
- Digital product sales
- Cohort program enrollments
- Revenue attributed to content

### 9.2 Attribution Model

**Multi-Touch Attribution:**
- **First-Touch:** Which content piece brought them in?
- **Last-Touch:** Which content piece converted them?
- **Multi-Touch:** All content pieces in their journey

**Implementation:**
- UTM parameters on all links
- Cookie-based tracking on website
- CRM integration (track content → lead → customer journey)
- Email link tracking (Customer.io)

### 9.3 Reporting Dashboard

**Weekly Report:**
- Content published this week
- Total reach (impressions, views)
- Engagement metrics (likes, comments, shares, clicks)
- New leads generated
- Content attribution

**Monthly Report:**
- Top-performing content pieces
- Channel performance comparison
- Lead-to-customer conversion by content type
- Revenue attributed to content
- ROI calculation (cost of system vs. revenue generated)

**Quarterly Report:**
- Growth trends (traffic, leads, revenue)
- Content strategy adjustments
- A/B test results
- System improvement metrics (edit rate, AI detection pass rate)

---

## 10. Distribution Health Monitoring

### 10.1 Distribution Checklist
**Concept:** "WiFi test" equivalent for content distribution

**Health Indicators:**
- ✅ All scheduled posts published on time
- ✅ No publishing errors in last 7 days
- ✅ All platforms receiving content
- ✅ Engagement rate above baseline
- ✅ No spam flags or account issues

**Health Score Calculation:**
```
Distribution Health =
  (Publishing Success Rate × 0.3) +
  (Platform Coverage × 0.2) +
  (Engagement Rate × 0.3) +
  (Error-Free Days × 0.2)

Scale: 0-100
- 90-100: Excellent
- 75-89: Good
- 60-74: Fair
- <60: Needs Attention
```

### 10.2 Reach Maximization

**Strategies:**
- Cross-posting to all approved platforms
- Optimal timing for each platform
- Engagement triggers (respond to comments)
- Boost high-performing posts (paid promotion)
- Repurpose top content after 90 days

**Monitoring:**
- Track reach per content piece
- Identify underperforming platforms
- Alert if reach drops >20% week-over-week
- Suggest optimizations

---

## 11. Risk Mitigation

### 11.1 Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| API rate limiting | High | Medium | Implement queue system, respect rate limits, add delays |
| AI detection failures | High | Medium | Multiple rewrite attempts, manual fallback, alternative humanization |
| LLM hallucinations | Medium | Medium | RAG with knowledge base, fact-checking prompts, user review |
| Platform API changes | High | Low | Monitor API changelogs, version pinning, graceful degradation |
| Publishing failures | Medium | Low | Retry logic, error alerts, manual fallback |
| Data loss | High | Low | Regular backups, database replication, version control |

### 11.2 Content Quality Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Off-brand voice | High | Medium | Voice learning system, knowledge base, user feedback |
| Factual inaccuracies | High | Low | RAG, reference materials, user review, fact-check prompts |
| Repetitive content | Medium | Medium | Diversity prompts, content deduplication, varied angles |
| Low engagement | Medium | Medium | A/B testing, performance analysis, continuous optimization |
| Spam/account flags | High | Low | Respect platform guidelines, human review, posting cadence limits |

### 11.3 Operational Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| User adoption | High | Medium | Intuitive UX, onboarding, training, quick wins |
| Time savings not realized | High | Low | Streamlined workflow, bulk actions, intelligent defaults |
| System complexity | Medium | Medium | Phased rollout, clear documentation, support |
| Dependence on founder | Medium | Low | Team access, knowledge transfer, documented processes |

---

## 12. Success Criteria & KPIs

### 12.1 Phase 1 Success Criteria (Week 10)

**Operational:**
- [ ] Founder spends ≤60 minutes/week on content approval
- [ ] System generates 5+ LinkedIn posts per podcast episode
- [ ] System generates 1 newsletter per week
- [ ] System generates 1 blog post per week
- [ ] 100% of content passes AI detection before user review

**Quality:**
- [ ] User edit rate <30% (words changed / total words)
- [ ] User satisfaction score ≥7/10
- [ ] 95%+ publishing success rate (no errors)
- [ ] Content voice matches founder's style (subjective, user-validated)

**Technical:**
- [ ] End-to-end workflow functional (ingestion → approval → publishing)
- [ ] All API integrations working
- [ ] Notion database updating in real-time
- [ ] No critical bugs

### 12.2 Phase 2 Success Criteria (Month 6)

**Operational:**
- [ ] Founder time remains ≤60 minutes/week with expanded features
- [ ] Book chapters successfully repurposed into content
- [ ] Event promotion sequences automated
- [ ] Multiple content types supported (podcast, book, manual)

**Quality:**
- [ ] User edit rate <20% (improved from P1)
- [ ] User satisfaction score ≥8/10
- [ ] Voice consistency score >85%

**Business Impact:**
- [ ] Website traffic +20% vs. baseline (6 months prior)
- [ ] Lead signups +15% vs. baseline
- [ ] Content attribution rate >60% (60%+ of leads touched content)

### 12.3 Long-Term KPIs (Month 12)

**Efficiency:**
- Founder time: ≤60 minutes/week
- Content output: 5-7 LinkedIn/week, 1 newsletter/week, 1-2 blogs/week
- Publishing success rate: >98%

**Quality:**
- User edit rate: <15%
- User satisfaction: ≥9/10
- AI detection pass rate: 100%

**Business Impact:**
- Website traffic: +40% YoY
- Lead signups: +30% YoY
- Content-attributed revenue: $200k+ ARR
- ROI: >5x (revenue / system cost)

---

## 13. Open Items & Next Steps

### 13.1 Discovery Phase Requirements

**Before development starts:**
- [ ] Audit existing Customer.io templates
- [ ] Review current Notion setup and database structure
- [ ] Gather best-performing content examples (newsletters, LinkedIn, blog)
- [ ] Obtain access credentials for all APIs
- [ ] Define voice guidelines document
- [ ] Upload Product-Led Playbook
- [ ] Interview Wes about content preferences and style
- [ ] Research Riverside API capabilities (webhook support)
- [ ] Evaluate AI detection tools (Turnitin access, alternatives)
- [ ] Select hosting/infrastructure provider

### 13.2 Decisions Needed

**By Week 1:**
- [ ] Finalize technology stack (Python vs. Node.js)
- [ ] Choose vector database (Pinecone vs. Weaviate)
- [ ] Select primary LLM (Claude vs. GPT-4)
- [ ] Confirm Riverside integration approach
- [ ] Approve Notion database structure

**By Week 4:**
- [ ] Finalize newsletter send day/time
- [ ] Approve LinkedIn posting cadence
- [ ] Confirm Customer.io template approach
- [ ] Define approval workflow UX (wireframes)

### 13.3 Questions for Stakeholders

**For Wes:**
1. What are your biggest content pet peeves? (What do you always edit?)
2. Which of your newsletters/posts are you most proud of? (Examples to learn from)
3. How much control do you want over scheduling vs. trusting system defaults?
4. Are there topics/frameworks you want the system to prioritize?
5. What's your risk tolerance for publishing AI-generated content with minimal review?

**For Team:**
1. Who else needs access to the system besides Wes?
2. What's the current process for tracking content performance?
3. Are there existing integrations or tools we should leverage?
4. What's the backup plan if Wes is unavailable for approval?

---

## 14. Appendix

### 14.1 Glossary

- **AI Detection:** Automated tools that identify AI-generated content
- **Content Repurposing:** Converting long-form content into multiple short-form pieces
- **Distribution Health:** Metric indicating how well content is reaching target audience
- **Growth Scorecard:** Dashboard tracking business impact of content marketing
- **Humanization:** Techniques to make AI-generated content sound more natural/human
- **Learning Loop:** System that improves based on user feedback and edits
- **P1/P2:** Phase 1 (MVP) and Phase 2 (extended features)
- **PLG:** Product-Led Growth
- **RAG:** Retrieval Augmented Generation (AI with knowledge base)
- **Voice Consistency:** How well AI-generated content matches founder's writing style

### 14.2 References

**LinkedIn API:**
- [Posts API Documentation](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api)

**Customer.io API:**
- [Campaigns & Broadcasts API](https://docs.customer.io/journeys/types-of-campaigns-and-broadcasts/)

**Webflow API:**
- [CMS API Documentation](https://developers.webflow.com/data/reference/cms)

**Notion API:**
- [Database API Documentation](https://developers.notion.com/reference/database)

**AI Detection Tools:**
- Turnitin AI Writing Detection
- GPTZero
- Originality.ai

### 14.3 Contact & Ownership

**Product Owner:** Wes (Founder, ProductLed)
**Development Team:** TBD
**Project Start Date:** TBD
**Target P1 Launch:** TBD + 10 weeks

---

**Document Status:** Draft v1.0
**Next Review:** After stakeholder feedback
**Approval Required From:** Wes (Founder), Development Lead

