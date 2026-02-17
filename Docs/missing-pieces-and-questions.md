# Missing Pieces & Unanswered Questions

**Document Purpose:** Identify gaps in the Head of Growth Super Agent PRD
**Last Updated:** February 17, 2026
**Status:** Discovery Phase

---

## ✅ Now Addressed (Added to PRD)

These were missing but have been added to the PRD:

1. **ICP Resonance Validation** ✅
   - Added: Section 5.8 - ICP Evaluator Agent
   - Uses implementer call recordings to validate content
   - Scores every piece before approval

2. **Content Ideas Generation** ✅
   - Added: Section 5.7 - Content Ideas Inbox
   - Integrates Grain + Gemini recordings
   - Weekly digest of ranked ideas

3. **UX/Design System** ✅
   - Added: Entire Section 7 - UX/Design Principles
   - Notion/ChatGPT-inspired editing
   - Typography system, spacing, color palette
   - Mobile experience, gamification

---

## 🔴 Critical Gaps Still Missing

### 1. Content Performance Feedback Loop
**The Gap:** Performance data is tracked but not systematically fed back into content generation

**Questions:**
- How do we automatically adjust content strategy based on what's working?
- If framework posts get 2x engagement vs. quotes, should system generate more frameworks?
- How quickly should system adapt to performance signals?

**Proposed Solution:**
- Weekly analysis of published content performance
- Auto-update prompts: "Framework posts performing +120%, increase to 40% of mix"
- Track topic resonance: "Pricing content = 3x engagement, suggest more pricing content"
- A/B testing: Generate 2 versions, publish best performer

**Impact:** High - System gets smarter over time, optimizes for ROI

---

### 2. Team Content Contribution Workflow
**The Gap:** Implementers have valuable insights from client calls, but no clear path to contribute

**Questions:**
- How do team members suggest content ideas?
- Can implementers flag "this call was gold, make content from it"?
- Who reviews team contributions before they go to AI generation?
- What's the approval chain for team-generated ideas?

**Proposed Solution:**
- Slack command: `/content-idea [description]` from any team member
- Flag recordings: "⭐ Star for content" button in Grain/Gemini
- Team idea queue: Wes reviews team suggestions weekly
- Auto-prioritize based on ICP relevance + team votes

**Impact:** Medium-High - Unlocks team's collective intelligence

---

### 3. Content Angle Selection System
**The Gap:** No systematic way to choose between multiple angles on same topic

**Questions:**
- Given topic "PLG Pricing", should we go:
  - Educational? ("How to Price a PLG Product")
  - Controversial? ("Why PLG Pricing Models Are Broken")
  - Framework? ("The 5-Stage PLG Pricing Maturity Model")
  - Story-driven? ("How We 10x Revenue by Changing Pricing")
- What factors determine angle choice?
- Should system present options and let user choose?

**Proposed Solution:**
- Generate 3 angle options for each topic
- Present with predicted performance for each
- User selects preferred angle OR system auto-selects based on:
  - Content gap (haven't done controversial in 3 weeks)
  - Audience fatigue (too many frameworks lately)
  - Business goal (launching product = more product-focused)

**Impact:** Medium - Increases content variety, prevents repetition

---

### 4. Crisis Management & Negative Feedback
**The Gap:** No plan for handling controversial posts or negative reactions

**Questions:**
- What if a post gets unexpected negative feedback?
- Can we pause/delete scheduled content quickly?
- Who monitors for brand risk or tone-deaf content?
- How do we respond to controversial comments?

**Proposed Solution:**
- Real-time sentiment monitoring (first 2 hours after publish)
- Alert if: comment sentiment <40% positive, unusual negative ratio
- Emergency actions:
  - Pause scheduled posts in same thread
  - Draft response template
  - Flag for manual review
- Pre-approved response templates for common objections

**Impact:** Medium - Protects brand reputation

---

### 5. Client Success Story Pipeline
**The Gap:** No systematic capture of client wins → content

**Questions:**
- How do we identify which client results should become content?
- Who gets client permission to share their story?
- What's the process for anonymizing if client wants privacy?
- How do we keep case studies fresh (clients evolve)?

**Proposed Solution:**
- Implementer checklist: "Got client win? Fill out case study form"
- Auto-detect wins from call transcripts: "conversion up 3x" triggers alert
- Request permission: Email template to client for approval
- Case study library in Notion
- Refresh cycle: Update case studies every 6 months

**Impact:** High - Social proof is most powerful content

---

### 6. Paid Distribution & Amplification
**The Gap:** System is organic-only, no paid distribution strategy

**Questions:**
- How much budget to allocate per month?
- Which content should we boost (all? top performers? specific topics)?
- When to boost (immediately? after organic traction?)?
- What's the ROI threshold (only boost if conversion potential >X)?
- Should system auto-boost or require approval?

**Proposed Solution:**
- Budget allocation: $500-1000/month for content boosting
- Auto-boost criteria:
  - Organic engagement >150 likes in first 6 hours
  - ICP score >85
  - Conversion potential: Medium or High
  - Topic aligns with current business goal
- Boost parameters:
  - LinkedIn: $50-100 per top post
  - Target: Lookalike audience of engaged followers
  - Duration: 7 days
- Track ROI: Boost spend → clicks → leads → revenue

**Impact:** High - 10x reach of best content

---

### 7. Content Deprecation & Sunsetting
**The Gap:** No strategy for when to stop talking about certain topics

**Questions:**
- How do we know when a topic is played out?
- What if market moves on from a framework we created?
- Should we actively sunset old content (remove from blog)?
- How often should we audit content library?

**Proposed Solution:**
- Topic fatigue monitoring:
  - Track engagement trend per topic (declining = fatigued)
  - Alert if topic engagement down >30% vs. baseline
  - Suggest: "Pricing content fatigued, try new angle or pause 3 months"
- Annual content audit:
  - Review all blog posts, update or remove outdated
  - Add redirects for removed content
  - Refresh top performers
- Sunset triggers:
  - Engagement below threshold for 6+ months
  - Topic no longer relevant (market shift)
  - Replaced by better content

**Impact:** Medium - Keeps content fresh, prevents spam perception

---

### 8. Multi-Format Repurposing (Beyond Text)
**The Gap:** System only generates text, no video/audio/visual content

**Questions:**
- Should podcasts also become YouTube videos?
- What about short-form video (Reels, TikTok, YouTube Shorts)?
- Can we auto-generate presentation slides from frameworks?
- Should LinkedIn posts include custom graphics?

**Proposed Solution:**
**Phase 1 (Text-First):**
- Current PRD - text only

**Phase 2 (Visual Addition):**
- Auto-generate:
  - Quote cards (Canva API integration)
  - Framework diagrams (Excalidraw or similar)
  - Data visualizations (Chart.js)
- Templates for each format type
- User reviews before publishing

**Phase 3 (Video):**
- Podcast → YouTube (direct upload)
- Podcast → Short clips (Descript API)
- Framework → Video explainer (AI video tools)

**Impact:** High - Multi-format = 3-5x content pieces from same source

---

### 9. Influencer & Partner Co-Creation
**The Gap:** No workflow for collaborative content with partners

**Questions:**
- How do we coordinate content with podcast guests?
- What if we want to co-author a post with a partner?
- Should guests approve content featuring them?
- How do we cross-promote (we post, they share)?

**Proposed Solution:**
- Guest approval workflow:
  - Generate posts featuring guest
  - Send for review: "Here's what we're posting about our convo"
  - Get approval (or edits)
  - Publish + notify guest to share
- Co-creation mode:
  - Google Docs-style collaboration
  - Both parties can edit
  - Version control + approval
- Partner content calendar:
  - Track partner commitments
  - Coordinate launch timing
  - Cross-promote strategically

**Impact:** Medium - Leverages guest audiences

---

### 10. Seasonality & Campaign Coordination
**The Gap:** No consideration for seasonal trends or coordinated campaigns

**Questions:**
- How do we plan around:
  - Industry events (SaaStr, conferences)
  - Holidays (end of year planning)
  - Earnings seasons (enterprise budget cycles)
  - Launch windows (new cohort, new product)
- Should content shift during these periods?
- How far in advance to plan seasonal content?

**Proposed Solution:**
- Marketing calendar in Notion:
  - Key dates, events, launches
  - Content themes per period
  - Ramp-up schedules (3 weeks before event)
- Campaign mode:
  - System shifts content mix for campaigns
  - Example: "Cohort launch in 2 weeks" → more enrollment-focused content
  - Post-event: Shift back to evergreen
- Seasonal templates:
  - "End of year PLG planning" content (Nov-Dec)
  - "Q1 goal-setting" content (Jan)
  - Conference recaps (after events)

**Impact:** Medium-High - Aligns content with business goals

---

### 11. Localization & International Markets
**The Gap:** Assumes English-only audience

**Questions:**
- Do we need content in other languages?
- What about regional PLG differences (US vs. EU vs. APAC)?
- Should timing adjust for time zones?
- How to handle cultural nuances?

**Proposed Solution (Future Phase):**
- English-first (current market)
- Phase 2: Consider if expanding internationally
- Auto-translation + native speaker review
- Regional content variations
- Time zone-aware posting

**Impact:** Low (current), High (if international expansion)

---

### 12. Legal & Compliance
**The Gap:** No mention of legal review, especially for claims

**Questions:**
- Do we need legal review for:
  - Client results/claims ("3x conversion")
  - Competitor comparisons
  - Revenue numbers
- Who approves sensitive content?
- What's prohibited (legal, compliance)?

**Proposed Solution:**
- Content review checklist:
  - Client permission for case studies
  - Fact-check specific claims
  - Avoid unsubstantiated numbers
  - Competitor mentions: Fair use only
- Legal flag triggers:
  - Revenue/ARR numbers
  - Client names (need permission)
  - Competitor comparisons
  - Any guarantees/promises
- Legal review queue (for flagged content)

**Impact:** Medium - Protects from legal risk

---

### 13. Brand Consistency Across Channels
**The Gap:** How to maintain voice while adapting to platform norms

**Questions:**
- LinkedIn = professional, Twitter = casual, Newsletter = long-form
- Should voice shift per platform?
- How much adaptation is too much (loses brand)?
- Who defines voice guidelines per platform?

**Proposed Solution:**
- Voice guidelines document:
  - Core voice: Always authentic, insight-driven, tactical
  - LinkedIn: Professional but not corporate, use frameworks
  - Newsletter: Conversational, story-driven, deep-dive
  - Twitter (P2): More casual, hot takes, engage in convos
- Platform-specific prompts:
  - System knows context (LinkedIn vs. Newsletter)
  - Adjusts tone accordingly
  - Maintains core voice across all
- Examples per platform in knowledge base

**Impact:** Medium - Consistency builds brand trust

---

### 14. User-Generated Content Integration
**The Gap:** No plan for leveraging audience content (testimonials, comments, DMs)

**Questions:**
- How do we surface great audience comments → content?
- Can we republish testimonials as social proof posts?
- What about DM questions → FAQ content?
- Permission needed for using audience content?

**Proposed Solution:**
- UGC monitoring:
  - Track high-quality comments
  - Save testimonials/praise to library
  - Collect common questions
- Content generation from UGC:
  - "Great question from [Name]: [Question]" → Answer post
  - Testimonial compilation → Social proof post
  - FAQ from DMs → FAQ blog post
- Permission workflow:
  - DM to ask: "Can we feature your comment?"
  - Template: "Thanks! Can we share this?"

**Impact:** Medium - Social proof + audience engagement

---

### 15. Measurement Beyond Engagement
**The Gap:** Focus on likes/comments, but what about actual business impact?

**Questions:**
- Which content drives:
  - Discovery calls booked?
  - Product sales?
  - Newsletter signups?
  - Email replies (engagement)?
- How long does content attribution last (30 days? 90 days?)?
- Multi-touch attribution (they saw 5 posts, which mattered most)?

**Proposed Solution:**
- Advanced attribution:
  - UTM parameters on all links
  - Track: First touch, last touch, multi-touch
  - CRM integration (HubSpot/Salesforce)
  - Tag deals: "Originated from LinkedIn post X"
- Content → Revenue dashboard:
  - Top revenue-driving content
  - ROI per content type
  - Time to conversion (post view → deal)
- Optimize for revenue, not just engagement
  - Post with 50 likes → $10k deal beats post with 500 likes → no deals

**Impact:** High - Focus on what drives $$$

---

## 🟡 Open Strategic Questions

### Content Strategy
1. **Frequency vs. Quality:** Is 5-7 LinkedIn posts/week too much? Risk of unfollows?
2. **Evergreen vs. Timely:** What's the right mix (80/20? 50/50?)?
3. **Owned vs. Borrowed:** How much to reference others vs. create original?

### Business Model
4. **White-Label Opportunity:** Could this system be a product itself? (Sell to other consultancies)
5. **Team Expansion:** At what point does this enable hiring (content strategist, designer)?
6. **ROI Validation:** How do we know this is worth building vs. hiring a marketer?

### Technical Decisions
7. **Build vs. Buy:** Are there existing tools we should integrate vs. build from scratch?
8. **AI Model Selection:** Claude vs. GPT-4 vs. open-source (cost, quality trade-offs)?
9. **Hosting:** Cloud costs at scale - what's the monthly burn rate?

### User Adoption
10. **Change Management:** How do we ensure Wes actually uses this consistently?
11. **Team Buy-In:** Do implementers want to contribute to content ideas?
12. **Trust Building:** How long before Wes trusts the AI enough for progressive autonomy?

---

## 📋 Discovery Phase Checklist

Before development, we need answers to:

### Business Questions
- [ ] What's the budget for this project (build + run)?
- [ ] What's the expected ROI (time saved + revenue impact)?
- [ ] Is this just for ProductLed or could it become a product?
- [ ] Who owns this project internally (PM, designer, developer)?

### Content Strategy
- [ ] Audit: What content has performed best historically?
- [ ] Define: What topics are off-limits (controversial, legal)?
- [ ] Identify: Which client stories can be shared publicly?
- [ ] Document: Voice guidelines per platform

### Technical Requirements
- [ ] Access: API credentials for all platforms
- [ ] Data: Upload all existing best-performing content
- [ ] Recordings: Get access to Grain + Gemini libraries
- [ ] Integration: Current Notion setup (database schema)
- [ ] Customer.io: Current template situation

### Team & Process
- [ ] Roles: Who on team will contribute to content ideas?
- [ ] Workflow: How do implementers flag "great content moments"?
- [ ] Approval: Backup approver if Wes unavailable?
- [ ] Legal: What requires legal review?

### Success Criteria
- [ ] Define: What does success look like in 3 months? 6 months? 12 months?
- [ ] Metrics: Which metrics matter most (time saved? revenue? leads?)?
- [ ] Baseline: Current performance to measure against
- [ ] Exit criteria: At what point would we shut this down if not working?

---

## 🎯 Recommended Next Steps

1. **Week 1-2: Discovery**
   - Schedule stakeholder interviews (Wes, team, implementers)
   - Audit existing content performance
   - Gather all technical access/credentials
   - Document voice guidelines

2. **Week 3: Validation**
   - Test ICP Evaluator concept (manual process)
   - Run Content Ideas Inbox manually for 1 week
   - Validate assumptions about time savings

3. **Week 4: Decision**
   - Build vs. buy analysis
   - ROI projection (costs vs. benefits)
   - Go/no-go decision
   - If go: Finalize PRD and start Phase 1

---

**Status:** This document identifies gaps for discussion. Many of these can be addressed in later phases (P2, P3, P4) rather than blocking P1 MVP.

**Priority:**
- 🔴 **Must Address Before P1:** Client success story pipeline, crisis management, legal compliance
- 🟡 **Should Address in P2:** Performance feedback loop, team contribution, paid distribution
- 🟢 **Nice to Have (P3+):** Multi-format repurposing, influencer co-creation, localization
