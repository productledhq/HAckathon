# Build Plan - Head of Growth Super Agent

**Last Updated:** February 17, 2026
**Team:** Wes (Product), Fernando (Backend), Missy (Design)
**Timeline:** 12 weeks to MVP launch

---

## Overview

**Approach:** Build frontend first (weeks 1-5), then backend (weeks 6-10), then integration & testing (weeks 11-12).

**Why frontend first?**
- Wes can see and interact with UI early
- Design decisions validated before backend locks in
- Missy designs while Fernando sets up infrastructure
- Faster feedback loops

**Budget:** <$1k/month (target: $400-750/month)
**Success Metric:** Wes approving content in <60 min/week by Week 12

---

## Team Roles & Responsibilities

| Person | Role | Responsibilities | Time Commitment |
|--------|------|------------------|-----------------|
| Wes | Product Owner | Requirements, design approval, testing | ~5 hrs/week |
| Fernando | Full-Stack Dev | Backend + frontend integration | Full-time |
| Missy | Designer | Design system, mockups, visual assets | ~10-15 hrs/week |
| Josh | QA / Backup | Testing, backup approver | ~2-3 hrs/week |

---

## Phase 1: Foundation & Frontend (Weeks 1-5)

### Week 1: Setup & Design Foundation

**Missy (Design):**
- [ ] Design system in Figma
  - Color palette (dark mode primary)
  - Typography scale
  - Component library (buttons, cards, inputs)
- [ ] Wireframes for key screens:
  - Dashboard
  - Approval interface
  - Content card
- [ ] Deliver design tokens (CSS variables)

**Fernando (Development):**
- [ ] Set up Next.js 14 project
  - TypeScript configuration
  - Tailwind CSS setup
  - ESLint + Prettier
  - Git repository
- [ ] Install dependencies:
  ```bash
  npx create-next-app@latest growth-agent --typescript --tailwind --app
  cd growth-agent
  npm install @radix-ui/react-* lucide-react framer-motion zustand @tanstack/react-query
  ```
- [ ] Set up Shadcn/UI
  ```bash
  npx shadcn-ui@latest init
  npx shadcn-ui@latest add button card input
  ```
- [ ] Dark mode implementation
  - next-themes
  - CSS variables for colors
- [ ] Basic routing structure:
  ```
  app/
  ├── (auth)/login/page.tsx
  ├── (dashboard)/page.tsx
  ├── (dashboard)/approve/page.tsx
  └── layout.tsx
  ```

**Wes:**
- [ ] Review and approve design direction
- [ ] Provide example content for mockups
- [ ] Fill out Character Diamond

**Deliverables:**
- ✅ Design system in Figma
- ✅ Next.js project running locally
- ✅ Dark mode working
- ✅ Basic routing

---

### Week 2: Core Components

**Missy:**
- [ ] High-fidelity mockups:
  - Dashboard (all states)
  - Approval interface (main view)
  - Content card (editing state)
  - Mobile responsive layouts
- [ ] Icon set + empty state illustrations
- [ ] Animation storyboards (approve, reject)

**Fernando:**
- [ ] Build component library:
  ```typescript
  components/
  ├── ui/ (Shadcn components)
  │   ├── button.tsx
  │   ├── card.tsx
  │   ├── input.tsx
  │   └── ...
  ├── content/
  │   ├── ContentCard.tsx
  │   ├── BundleSidebar.tsx
  │   └── MetricBadge.tsx
  └── layout/
      ├── Header.tsx
      └── Sidebar.tsx
  ```
- [ ] Implement ContentCard component:
  - Header (title, badge)
  - Metrics display (ICP score, predictions)
  - Content preview
  - Action buttons
- [ ] Implement BundleSidebar:
  - Bundle list
  - Collapsible items
  - Filters
- [ ] State management setup (Zustand):
  ```typescript
  // store/useAppStore.ts
  interface AppState {
    pendingContent: ContentItem[];
    currentBundle: Bundle | null;
    filters: FilterState;
  }
  ```

**Deliverables:**
- ✅ All mockups complete
- ✅ Core components built
- ✅ Component storybook (optional)

---

### Week 3: Rich Text Editor & Editing Experience

**Fernando:**
- [ ] Install Tiptap:
  ```bash
  npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder
  ```
- [ ] Build RichTextEditor component:
  ```typescript
  components/editor/
  ├── RichTextEditor.tsx
  ├── Toolbar.tsx
  ├── MenuBar.tsx
  └── extensions/
      ├── SlashCommand.tsx
      └── AIFix.tsx
  ```
- [ ] Implement features:
  - Slash commands (`/heading`, `/bullet`, etc.)
  - Markdown shortcuts
  - Inline toolbar (on text selection)
  - Auto-save (2 second debounce)
  - Block handles (drag to reorder)
- [ ] Auto-save indicator:
  ```tsx
  <AutoSaveIndicator status={saveStatus} />
  // "Saving..." | "Saved ✓" | "Error"
  ```
- [ ] Keyboard shortcuts:
  ```typescript
  useKeyboardShortcuts({
    'cmd+b': toggleBold,
    'cmd+enter': approveContent,
    'cmd+delete': rejectContent
  });
  ```

**Missy:**
- [ ] Editor UI polish
- [ ] Toolbar icon design
- [ ] Loading states

**Deliverables:**
- ✅ Full-featured rich text editor
- ✅ Auto-save working
- ✅ Keyboard shortcuts functional

---

### Week 4: Approval Workflow & Interactions

**Fernando:**
- [ ] Build approval interface layout:
  ```tsx
  app/(dashboard)/approve/page.tsx
  // Sidebar + Content Area + Actions
  ```
- [ ] Implement workflows:
  - Navigate between content items
  - Approve action (with animation)
  - Reject action (with animation)
  - Bulk approve bundle
- [ ] Animations (Framer Motion):
  ```typescript
  // Approve animation
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: 0, x: 100 }}
    transition={{ duration: 0.3 }}
  >
    {contentCard}
  </motion.div>
  ```
- [ ] Confetti animation (on approve)
- [ ] Mock data for testing:
  ```typescript
  mock/
  ├── mockContent.ts
  ├── mockBundles.ts
  └── mockAnalytics.ts
  ```

**Deliverables:**
- ✅ Full approval workflow functional
- ✅ Animations polished
- ✅ Works with mock data

---

### Week 5: Dashboard, Calendar & Mobile

**Fernando:**
- [ ] Build Dashboard:
  ```tsx
  app/(dashboard)/page.tsx
  // Pending approval widget
  // This week's schedule
  // Last week's impact
  // Time saved metric
  ```
- [ ] Build Calendar view:
  ```tsx
  app/(dashboard)/calendar/page.tsx
  // Week/month toggle
  // Scheduled items list
  // Edit/reschedule actions
  ```
- [ ] Mobile responsive:
  - Breakpoint handling
  - Touch gestures (react-use-gesture)
  - Mobile navigation
  - Swipe card interface
- [ ] Performance optimization:
  - Code splitting
  - Lazy loading
  - Image optimization

**Missy:**
- [ ] Empty state illustrations
- [ ] Success state designs
- [ ] Mobile UI refinements

**Deliverables:**
- ✅ Dashboard complete
- ✅ Calendar view complete
- ✅ Mobile responsive (80%+ coverage)
- ✅ Frontend MVP ready for backend integration

---

## Phase 2: Backend Development (Weeks 6-10)

### Week 6: Infrastructure & Database

**Fernando:**
- [ ] Set up infrastructure accounts:
  - Supabase (PostgreSQL)
  - Pinecone (vector DB)
  - Railway (hosting)
  - AWS S3 (file storage)
  - Upstash (Redis)
- [ ] Create FastAPI project:
  ```bash
  mkdir backend && cd backend
  python -m venv venv
  source venv/bin/activate
  pip install fastapi uvicorn sqlalchemy alembic psycopg2-binary
  ```
- [ ] Project structure:
  ```
  backend/
  ├── app/
  │   ├── api/
  │   │   ├── routes/
  │   │   │   ├── auth.py
  │   │   │   ├── content.py
  │   │   │   ├── publishing.py
  │   │   │   └── analytics.py
  │   │   └── deps.py
  │   ├── core/
  │   │   ├── config.py
  │   │   └── security.py
  │   ├── services/
  │   ├── models/
  │   └── main.py
  ├── alembic/
  └── tests/
  ```
- [ ] Database setup:
  - Create all tables (see backend PRD schema)
  - Alembic migrations
  - Seed data (for testing)
- [ ] Authentication:
  - JWT token generation
  - Google OAuth integration
  - User CRUD
- [ ] Basic API endpoints:
  ```python
  # POST /auth/login
  # GET /content/pending
  # PATCH /content/{id}
  ```

**Wes:**
- [ ] Provide API credentials:
  - Anthropic (Claude) API key
  - OpenAI API key
  - LinkedIn OAuth app
  - Customer.io API token
  - Webflow API token

**Deliverables:**
- ✅ Database running (Supabase)
- ✅ Basic API functional
- ✅ Authentication working

---

### Week 7: Content Ingestion & Transcription

**Fernando:**
- [ ] S3 integration:
  ```python
  # app/services/storage.py
  def upload_file_to_s3(file, bucket, key):
      s3_client.upload_fileobj(file, bucket, key)
  ```
- [ ] AssemblyAI integration:
  ```python
  # app/services/transcription.py
  def transcribe_audio(audio_url: str):
      # POST to AssemblyAI
      # Poll for completion
      # Return transcript
  ```
- [ ] Content ingestion endpoints:
  ```python
  # POST /ingest/manual (file upload)
  # POST /ingest/riverside (URL)
  # POST /webhooks/riverside (webhook handler)
  ```
- [ ] File processing pipeline:
  - Upload to S3
  - Trigger transcription
  - Save to content_sources table
  - Update status

**Deliverables:**
- ✅ Can upload files via API
- ✅ Transcription working (AssemblyAI)
- ✅ Content stored in database

---

### Week 8: AI Content Generation (Claude + RAG)

**Fernando:**
- [ ] Claude API integration:
  ```python
  # app/services/ai_generation.py
  import anthropic

  def generate_linkedin_posts(transcript: str, count: int = 7):
      # Build prompt with RAG context
      # Call Claude API
      # Parse response
      # Return posts
  ```
- [ ] Pinecone setup:
  ```python
  # app/services/knowledge_base.py
  def upload_knowledge_base():
      # Upload Product-Led Playbook
      # Generate embeddings (OpenAI)
      # Store in Pinecone
  ```
- [ ] RAG pipeline:
  ```python
  def retrieve_relevant_knowledge(query: str, top_k: int = 5):
      # Generate query embedding
      # Search Pinecone
      # Return relevant context
  ```
- [ ] Prompt engineering:
  - LinkedIn posts
  - Newsletter
  - Blog posts
  - Character Diamond integration
  - Voice & style guidelines
- [ ] Content generation endpoints:
  ```python
  # POST /generate/podcast
  # GET /generate/status/{job_id}
  ```
- [ ] Celery setup (async processing):
  ```python
  # tasks/generation.py
  @celery.task
  def generate_content_async(source_id: str):
      # Long-running generation task
  ```

**Wes:**
- [ ] Upload knowledge base materials:
  - Product-Led Playbook PDF
  - 10 best newsletters
  - 10 best LinkedIn posts
  - 5 best blog posts

**Deliverables:**
- ✅ Claude API generating content
- ✅ RAG working (relevant context retrieved)
- ✅ Content generation async (Celery)
- ✅ Generated content saved to database

---

### Week 9: Quality Validation & ICP Scoring

**Fernando:**
- [ ] AI detection integration:
  ```python
  # app/services/quality_validation.py
  def check_ai_detection(content: str):
      # Call Turnitin API
      # Return score + pass/fail
  ```
- [ ] Auto-rewrite logic:
  ```python
  def humanize_content(content: str, attempt: int):
      # Use Claude to rewrite
      # Check again
      # Max 3 attempts
  ```
- [ ] ICP scoring system:
  ```python
  def score_icp_match(content: str, icp_profiles: list):
      # Retrieve ICP profiles from Pinecone
      # Score against criteria:
      #   - Language match (25%)
      #   - Pain point relevance (25%)
      #   - Tone & style (20%)
      #   - Technical level (15%)
      #   - CTA appropriateness (15%)
      # Return score 0-100
  ```
- [ ] ICP profile extraction (from Grain/Gemini):
  ```python
  def extract_icp_profile(transcript: str):
      # Use Claude to extract:
      #   - Pain points
      #   - Language patterns
      #   - Objections
      #   - Goals
      # Save to database + Pinecone
  ```
- [ ] Quality gates:
  ```python
  @router.post("/generate/podcast")
  async def generate_podcast_content(source_id: str):
      # 1. Generate content
      # 2. Check AI detection (auto-rewrite if fail)
      # 3. Score ICP match (reject if <50)
      # 4. Return only passing content
  ```

**Wes:**
- [ ] Provide Grain/Gemini API access
- [ ] Share 5-10 client call recordings (for ICP extraction)

**Deliverables:**
- ✅ AI detection working
- ✅ ICP scoring functional
- ✅ Quality gates in place
- ✅ Only high-quality content reaches approval

---

### Week 10: Publishing & Scheduling

**Fernando:**
- [ ] LinkedIn API integration:
  ```python
  # app/services/publishing/linkedin.py
  def publish_to_linkedin(content_item_id: str):
      # Get content
      # Format for LinkedIn API
      # POST to /rest/posts
      # Handle response
      # Log to publishing_logs
  ```
- [ ] Customer.io integration:
  ```python
  # app/services/publishing/customerio.py
  def publish_newsletter(content_item_id: str):
      # Get newsletter content
      # Create broadcast
      # Send to segment
  ```
- [ ] Webflow CMS integration:
  ```python
  # app/services/publishing/webflow.py
  def publish_blog_post(content_item_id: str):
      # Get blog post
      # Create CMS item
      # Publish or draft
  ```
- [ ] Notion integration:
  ```python
  # app/services/publishing/notion.py
  def update_notion_database(content_item_id: str):
      # Update status, publish date, URL
  ```
- [ ] Scheduling system (Celery Beat):
  ```python
  @celery.task
  def publish_scheduled_content():
      # Runs every minute
      # Query schedules table for due items
      # Publish each
  ```
- [ ] Error handling & retries:
  ```python
  @retry(stop=stop_after_attempt(3), wait=wait_exponential())
  def publish_with_retry(platform: str, content: dict):
      # Automatic retry on failure
  ```
- [ ] Slack notifications:
  ```python
  # app/services/slack.py
  def notify_content_ready(count: int):
      # Send Slack message
      # Include link to approval interface
  ```

**Deliverables:**
- ✅ Can publish to LinkedIn
- ✅ Can send newsletters (Customer.io)
- ✅ Can create blog posts (Webflow)
- ✅ Notion database updated
- ✅ Scheduling working
- ✅ Slack notifications functional

---

## Phase 3: Integration & Testing (Weeks 11-12)

### Week 11: Frontend-Backend Integration

**Fernando:**
- [ ] Connect frontend to backend:
  - API client setup (React Query)
  - Auth flow (login → JWT)
  - Content fetching
  - Auto-save (PATCH /content/{id})
  - Approve/reject actions
  - Publishing triggers
- [ ] Real-time updates:
  ```typescript
  // Use React Query's polling or websockets
  useQuery(['content', 'pending'], fetchPendingContent, {
    refetchInterval: 5000  // Poll every 5 seconds
  });
  ```
- [ ] Error handling UI:
  - Network errors
  - Publishing failures
  - Validation errors
- [ ] Loading states:
  - Skeleton screens
  - Progress indicators
- [ ] Environment setup:
  ```bash
  # frontend/.env.local
  NEXT_PUBLIC_API_URL=http://localhost:8000
  NEXT_PUBLIC_SLACK_WEBHOOK=...
  ```

**Testing:**
- [ ] End-to-end flow:
  1. Upload podcast transcript
  2. AI generates content
  3. Content appears in approval interface
  4. Wes edits inline
  5. Auto-save works
  6. Approve → scheduled
  7. Content publishes at scheduled time
  8. Notion updated
  9. Slack notification sent

**Deliverables:**
- ✅ Frontend-backend fully integrated
- ✅ End-to-end flow working
- ✅ No mock data, all real

---

### Week 12: Testing, Polish & Launch

**Fernando:**
- [ ] Bug fixes (from testing)
- [ ] Performance optimization:
  - API response times <200ms
  - Frontend load time <2s
  - Optimize database queries
- [ ] Security audit:
  - API rate limiting
  - Input validation
  - SQL injection checks
- [ ] Monitoring setup:
  - Sentry (error tracking)
  - Logging (structured logs)
  - Alerts (Slack)
- [ ] Deployment:
  ```bash
  # Backend: Railway
  railway up

  # Frontend: Vercel
  vercel --prod
  ```
- [ ] Documentation:
  - API docs (FastAPI auto-generated)
  - User guide (for team)
  - Runbook (for debugging)

**Wes:**
- [ ] User acceptance testing:
  - Full approval workflow
  - Edit content
  - Approve/reject
  - Check published posts
- [ ] Team testing:
  - Josh (backup approver)
  - Missy (viewer)
  - Fernando (admin)

**Missy:**
- [ ] Final UI polish
- [ ] Icon refinements
- [ ] Animation tweaks

**Launch Checklist:**
- [ ] All systems operational
- [ ] Knowledge base uploaded
- [ ] Example content populated
- [ ] Team trained
- [ ] Slack notifications working
- [ ] Monitoring active
- [ ] Backup plan in place

**Deliverables:**
- ✅ System launched in production
- ✅ Wes using it for real content
- ✅ Team has access
- ✅ Monitoring & alerts active

---

## Week-by-Week Schedule (Visual)

```
┌─────────────────────────────────────────────────────────────┐
│ FRONTEND PHASE (Weeks 1-5)                                  │
├──────┬──────┬──────┬──────┬──────┬───────────────────────────┤
│ W1   │ W2   │ W3   │ W4   │ W5   │                           │
│Setup │Comps │Editor│Workfl│Dashbd│                           │
│Design│      │Auto  │Animat│Mobile│                           │
│      │      │Save  │      │      │                           │
├──────┴──────┴──────┴──────┴──────┴───────────────────────────┤
│ BACKEND PHASE (Weeks 6-10)                                   │
├──────┬──────┬──────┬──────┬──────┬───────────────────────────┤
│ W6   │ W7   │ W8   │ W9   │ W10  │                           │
│Infra │Ingest│AI Gen│Qualit│Publis│                           │
│DB    │Trans │RAG   │ICP   │Schedu│                           │
│Auth  │      │      │      │Slack │                           │
├──────┴──────┴──────┴──────┴──────┴───────────────────────────┤
│ INTEGRATION & LAUNCH (Weeks 11-12)                           │
├──────┬──────┬──────────────────────────────────────────────┤
│ W11  │ W12  │                                               │
│Integr│Polish│                                               │
│E2E   │Launch│                                               │
│Test  │      │                                               │
└──────┴──────┴───────────────────────────────────────────────┘
```

---

## Success Milestones

### Week 5: Frontend Demo
- [ ] Wes can click through full UI (with mock data)
- [ ] Approve/reject flows work
- [ ] Editing feels good
- [ ] Mobile responsive

### Week 10: Backend Ready
- [ ] Can upload podcast → AI generates content
- [ ] Content appears in database
- [ ] Quality checks pass
- [ ] Publishing works (test accounts)

### Week 12: Launch
- [ ] Wes approves real content
- [ ] Content publishes successfully
- [ ] Time spent <60 min/week
- [ ] Team can access system

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| API access issues (Grain, Riverside) | High | Fallback to manual upload for MVP |
| Claude API too expensive | Medium | Monitor costs, optimize prompts |
| Quality not good enough | High | Iterate prompts, add more examples |
| Publishing failures | Medium | Robust error handling, retries, alerts |
| Wes doesn't save time | High | Obsess over UX, track time metrics |

---

## Post-Launch (Week 13+)

### Month 2 (Weeks 13-16):
- [ ] Monitor usage & metrics
- [ ] Fix bugs (from real usage)
- [ ] Collect feedback from Wes
- [ ] Optimize based on edit patterns

### Month 3 (Weeks 17-20):
- [ ] Add P2 features:
  - Content Ideas Inbox
  - Growth Session Objection Analysis
  - Client Success Story Pipeline
- [ ] Performance improvements
- [ ] Cost optimization

### Month 4+:
- [ ] Predictive Performance Scoring
- [ ] Mobile app (voice approval)
- [ ] Content Feedback Loop
- [ ] Paid Distribution Strategy

---

## Cost Tracking

**Monthly Budget:** <$1,000
**Target:** $400-750/month

| Month | Estimated Cost | Actual Cost | Notes |
|-------|---------------|-------------|-------|
| Month 1 | $500 | TBD | Infrastructure setup |
| Month 2 | $600 | TBD | Normal usage |
| Month 3 | $700 | TBD | Added features |

**Review monthly and optimize if approaching $1k.**

---

## Communication & Standups

**Daily Async Updates (Slack):**
- What did you do yesterday?
- What are you doing today?
- Any blockers?

**Weekly Sync (30 min):**
- Review progress
- Demo new features
- Discuss blockers
- Plan next week

**Bi-Weekly with Wes (60 min):**
- Design reviews
- Feature demos
- Feedback & iteration
- Prioritization

---

## Tools & Resources

**Design:**
- Figma (design system, mockups)
- Notion (documentation)

**Development:**
- VSCode (IDE)
- GitHub (code repository)
- Linear (task tracking)
- Slack (communication)

**Infrastructure:**
- Vercel (frontend hosting)
- Railway (backend hosting)
- Supabase (database)
- Pinecone (vector DB)
- AWS S3 (storage)

**Monitoring:**
- Sentry (errors)
- Vercel Analytics (frontend)
- Railway Logs (backend)

---

## Next Immediate Steps (This Week)

**Wes:**
1. Fill out Character Diamond
2. Provide 5 example newsletters
3. Provide 10 example LinkedIn posts
4. Share Product-Led Playbook PDF

**Missy:**
1. Start design system in Figma
2. Create wireframes for dashboard + approval interface
3. Design button/card components

**Fernando:**
1. Set up Next.js project
2. Install Tailwind + Shadcn/UI
3. Implement dark mode
4. Create basic routing

**All:**
1. Review PRDs (frontend, backend, this build plan)
2. Ask questions in Slack
3. Align on timeline

---

**Let's build this! 🚀**

---

**Questions?**
- Design questions → Ask Wes or Missy
- Technical questions → Ask Fernando
- Priority questions → Ask Wes
- Blockers → Flag in Slack immediately
