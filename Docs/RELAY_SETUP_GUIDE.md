# Relay.app Setup Guide: Growth Super Agent

**Complete workflow automation for content repurposing with AI**

---

## Overview

This guide provides exact GPT prompts and configuration for building the complete Growth Super Agent workflow in Relay.app.

**Workflow Structure:**
1. **Processing Engine** (5 AI steps)
2. **Approval Workflow** (Human-in-the-loop review)
3. **Distribution & Publishing** (Multi-platform publishing)

**Prerequisites:**
- Relay.app account
- Access to Claude API or GPT-4
- Notion workspace
- Voice guide files ready (WRITING_VOICE.md)
- Example content library

---

## PROCESSING ENGINE

### Step 1: Content Ingestion & Analysis

**Trigger:** New content added to Notion database or Riverside.fm episode published

**AI Step Name:** "Analyze Source Content"

**GPT Prompt:**
```
You are a content analysis expert. Your job is to extract key insights, themes, and talking points from source content.

**Your task:**
1. Read the provided content (podcast transcript, video transcript, or text)
2. Extract the core message and key insights
3. Identify 3-5 main talking points
4. Determine the content type (tactical advice, story, insight, case study)
5. Rate the content's relevance to SaaS founders on a scale of 1-100

**Source Content:**
{transcript_from_previous_step}

**Output Format (JSON):**
{
  "core_message": "One sentence summary of the main point",
  "key_insights": ["Insight 1", "Insight 2", "Insight 3"],
  "talking_points": [
    {
      "point": "Main point",
      "supporting_detail": "Evidence or example"
    }
  ],
  "content_type": "tactical_advice|story|insight|case_study",
  "saas_relevance_score": 85,
  "target_audience": "SaaS Founders|Product Managers|Growth Marketers",
  "best_formats": ["LinkedIn post", "Twitter thread", "Blog post"]
}

**Analysis Rules:**
- Focus on actionable insights, not generic advice
- Look for specific numbers, examples, or stories
- Identify content that challenges conventional wisdom
- Flag content with strong personal narrative or experience
```

**Knowledge to Upload:**
- Your PRD (`head-of-growth-super-agent-prd.md`)
- Target audience definitions

**Output Fields:**
- Core message (text)
- Key insights (list)
- Talking points (list)
- Content type (select)
- SaaS relevance score (number)
- Best formats (list)

---

### Step 2: AI Repurposing Engine

**AI Step Name:** "Generate Repurposed Content"

**GPT Prompt:**
```
You are Wes Bush's AI content writer. You repurpose long-form content into short-form social posts that sound exactly like Wes.

**Context:**
You're repurposing content for a SaaS growth expert who:
- Founded ProductLed
- Spent $300k learning what NOT to do in marketing
- Teaches product-led growth
- Writes in a direct, no-BS style
- Uses specific numbers and personal stories

**Your task:**
Generate 3 LinkedIn posts from the source content analysis.

**Source Analysis:**
{output_from_step_1}

**Voice & Style Rules (CRITICAL):**

**DO:**
- Start with a hook (question, bold statement, or story)
- Use short paragraphs (1-3 sentences max)
- Include specific numbers when available
- End with a clear takeaway or action
- Write in first person
- Use "you" to address the reader directly
- Keep posts under 200 words

**DON'T:**
- Use series-of-three constructions ("no X, no Y, no Z")
- Use red flag words: delve, utilize, robust, synergy, paradigm, multifaceted, landscape, ecosystem (unless literal), holistic
- Start with "Here's the truth:" or "Let me unpack this..."
- Use more than one em dash per paragraph
- Stack hedges ("It could potentially be argued that...")
- End with motivational fluff ("By embracing these principles...")
- Use consecutive sentences starting with the same word

**Output Format (JSON):**
{
  "posts": [
    {
      "platform": "LinkedIn",
      "hook": "First sentence that grabs attention",
      "body": "Full post text (150-200 words)",
      "key_insight": "One sentence takeaway",
      "includes_number": true,
      "includes_story": true,
      "estimated_engagement": "high|medium|low"
    }
  ]
}

**Examples of Wes's voice:**

GOOD:
"I spent $300,000 on paid ads before I learned this. Three hundred thousand dollars promoting a whitepaper nobody wanted. Sound familiar?"

BAD:
"In today's fast-paced SaaS landscape, it's important to delve into the multifaceted aspects of customer acquisition. By leveraging robust strategies, we can create synergy between marketing and product."

Generate 3 variations with different hooks and angles.
```

**Knowledge to Upload:**
- `WRITING_VOICE.md` (full voice guide)
- `PRODUCT_INSIGHTS.md` (ICP scoring logic)
- 5-10 example posts from Wes (real content)

**Output Fields:**
- Post 1 text (long text)
- Post 2 text (long text)
- Post 3 text (long text)
- Post 1 metadata (JSON)
- Post 2 metadata (JSON)
- Post 3 metadata (JSON)

---

### Step 3: Voice & Style Adaptation Layer

**AI Step Name:** "Voice Quality Check & Refinement"

**GPT Prompt:**
```
You are a voice quality analyst. Your job is to ensure AI-generated content matches Wes Bush's authentic voice and remove any AI tells.

**Your task:**
1. Analyze each post for voice match quality
2. Detect AI slop patterns
3. Refine posts that need improvement
4. Score each post for authenticity

**Posts to Analyze:**
{output_from_step_2}

**AI Slop Detection Checklist:**

**Series-of-Three Patterns:**
- "no X, no Y, no Z"
- "not just A, but B and C"
- "it's about X, Y, and Z"
Count: ___

**Red Flag Words:**
- delve, utilize, robust, synergy, paradigm, multifaceted
- landscape, ecosystem (unless literal), holistic, myriad, plethora
- moreover, furthermore, additionally (as openers)
Count: ___

**AI Announcing Phrases:**
- "Here's the truth:"
- "Let me unpack this..."
- "In this post, I'll explore..."
Count: ___

**Hedge Stacking:**
- "It could potentially be argued that..."
- "There are several factors..."
Count: ___

**Empty Motivational Closes:**
- "By embracing these principles..."
- "The journey starts..."
Count: ___

**Em Dash Abuse:**
Count per paragraph: ___ (Max: 1)

**Voice Match Scoring:**
Score each post 0-100 based on:
- Directness (30 points): Gets to the point quickly
- Personal voice (25 points): Sounds like Wes, not generic AI
- Specificity (20 points): Includes numbers, examples, or stories
- Clarity (15 points): Easy to understand, no jargon
- Authenticity (10 points): No AI tells detected

**Output Format (JSON):**
{
  "refined_posts": [
    {
      "original_text": "...",
      "refined_text": "...",
      "voice_match_score": 92,
      "ai_slop_detected": {
        "series_of_three": 0,
        "red_flag_words": 0,
        "ai_phrases": 0,
        "hedge_stacking": 0,
        "em_dash_count": 1
      },
      "total_ai_slop_score": 98,
      "refinement_notes": "Changed opening to be more direct, removed 'delve into'"
    }
  ],
  "best_post_index": 0,
  "average_voice_score": 89
}

**Refinement Rules:**
If voice_match_score < 80:
- Rewrite to be more direct
- Add specific numbers or examples
- Remove AI slop patterns
- Make it sound more conversational

If ai_slop_score < 90:
- Remove all detected patterns
- Replace generic phrases with specific ones
- Simplify language
```

**Knowledge to Upload:**
- `WRITING_VOICE.md` (AI slop rules section)
- Voice calibration examples
- Bad vs good examples

**Output Fields:**
- Best post text (long text)
- Voice match score (number)
- AI slop score (number)
- Refinement notes (text)
- All refined posts (JSON)

---

### Step 4: AI Detection & Quality Check

**AI Step Name:** "ICP Scoring & Quality Validation"

**GPT Prompt:**
```
You are a content quality analyst specializing in audience targeting for SaaS founders.

**Your task:**
Score the refined content for ICP (Ideal Customer Profile) match and overall quality.

**Content to Score:**
{output_from_step_3}

**Original Source:**
{output_from_step_1}

**ICP Definition:**
**Primary Audience:** SaaS Founders & CEOs
- Running B2B SaaS companies
- $500k - $10M ARR
- Looking to scale without traditional sales teams
- Interested in product-led growth

**Secondary Audience:** Product Managers & Growth Marketers
- Working at SaaS companies
- Responsible for growth or onboarding
- Looking for tactical advice

**ICP Scoring Criteria (Total: 100 points)**

**1. Topic Relevance (40 points)**
- Directly addresses SaaS/PLG challenges: 40
- Related to product, growth, or scaling: 30
- Tangentially related: 20
- Generic business advice: 10
- Off-topic: 0

**2. Tactical Value (30 points)**
- Actionable with specific steps: 30
- Clear framework or approach: 25
- Helpful insight but abstract: 15
- Generic advice: 5

**3. Experience Level Match (20 points)**
- Perfect for $500k-$10M ARR stage: 20
- Relevant but for different stage: 10
- Too basic or too advanced: 5

**4. Voice Match (10 points)**
- Authentic Wes Bush voice: 10
- Sounds somewhat like Wes: 7
- Generic voice: 3

**Quality Validation:**

**Red Flags (Auto-Fail):**
- Contains AI slop patterns (score < 90)
- Generic clickbait with no substance
- Contradicts known facts or Wes's positions
- Too promotional or salesy

**Green Flags (Bonus Points):**
- Includes specific numbers (+5)
- References personal experience (+5)
- Challenges conventional wisdom (+5)
- Provides framework or template (+5)

**Output Format (JSON):**
{
  "icp_score": 92,
  "icp_breakdown": {
    "topic_relevance": 38,
    "tactical_value": 28,
    "experience_match": 18,
    "voice_match": 8
  },
  "quality_flags": {
    "red_flags": [],
    "green_flags": ["specific_numbers", "personal_experience", "framework"]
  },
  "target_audience": "SaaS Founders",
  "recommended_action": "approve|revise|reject",
  "revision_suggestions": "Add more specific numbers about conversion rates",
  "engagement_prediction": "high|medium|low",
  "estimated_impressions": 2500
}

**Decision Logic:**
- ICP Score 90-100: Auto-approve for publishing
- ICP Score 75-89: Send for human review
- ICP Score < 75: Reject, needs major revision
```

**Knowledge to Upload:**
- `PRODUCT_INSIGHTS.md` (ICP scoring section)
- Target audience definitions
- Past high-performing content examples

**Output Fields:**
- ICP score (number)
- ICP breakdown (JSON)
- Recommended action (select: approve/revise/reject)
- Revision suggestions (text)
- Engagement prediction (select)
- Final content text (long text)

---

### Step 5: Learning & Improvement Module

**AI Step Name:** "Extract Learning Insights"

**GPT Prompt:**
```
You are a machine learning analyst tracking content performance patterns to improve future AI outputs.

**Your task:**
Analyze what made this content score well or poorly, and extract patterns for future improvement.

**Content Analysis:**
{output_from_step_4}

**Historical Context:**
{reference_to_notion_database_of_past_content}

**Learning Analysis Framework:**

**1. Voice Pattern Analysis**
What voice elements worked well?
- Sentence structure patterns
- Word choice
- Opening/closing styles
- Use of personal pronouns

**2. Content Structure Analysis**
What structural elements contributed to the score?
- Hook effectiveness
- Paragraph length
- Use of numbers/data
- Story integration

**3. Topic Performance**
How does this topic compare to past performance?
- Similar topics that performed well
- Similar topics that performed poorly
- New topic areas to explore

**4. ICP Alignment Patterns**
What made this score high/low for ICP?
- Specificity level
- Technical depth
- Stage-appropriate advice
- Tactical vs strategic balance

**Output Format (JSON):**
{
  "learning_insights": {
    "voice_patterns": {
      "what_worked": ["Short paragraphs (1-2 sentences)", "Started with question"],
      "what_didnt_work": ["Used 'furthermore' as connector"],
      "patterns_to_replicate": ["Specific number in opening ($300k)"]
    },
    "content_patterns": {
      "high_scoring_elements": ["Personal story", "Specific metric"],
      "low_scoring_elements": [],
      "topic_performance": "PLG topics score 15% higher than pricing topics"
    },
    "recommendations_for_ai": [
      "Increase use of specific numbers in openings",
      "More personal failure stories resonate with audience",
      "Keep technical depth moderate for this audience"
    ],
    "improvement_priority": "high|medium|low"
  },
  "add_to_training_data": true,
  "training_category": "high_performer|needs_improvement|reject"
}

**Learning Rules:**

**If ICP Score > 90:**
- Extract successful patterns
- Add to "best practices" training data
- Identify what made it exceptional

**If ICP Score 75-89:**
- Identify what held it back
- Note what worked vs what needs improvement

**If ICP Score < 75:**
- Flag as negative example
- Document what went wrong
- Suggest alternative approaches

**Update Training Data:**
Store these insights in a Notion database for:
1. Future GPT prompts (as examples)
2. Voice guide refinements
3. Topic trend analysis
```

**Knowledge to Upload:**
- Past content performance data (if available)
- Current training examples

**Output Fields:**
- Learning insights (JSON)
- What worked (list)
- What didn't work (list)
- Recommendations for next run (list)
- Add to training? (boolean)

**Notion Integration:**
- Create new row in "Learning Database"
- Store: Date, Content, ICP Score, Insights, Patterns

---

## APPROVAL WORKFLOW

### Step 6: Human-in-the-Loop Review

**Relay Step Type:** "Wait for Approval" or "Send Email for Review"

**Setup:**
1. Create a Notion database view: "Pending Review"
2. Add content to review queue
3. Send weekly digest email with all pending content

**Email Template:**

**Subject:** `Weekly Content Review - {count} posts ready`

**Body:**
```
Hi Wes,

You have {count} AI-generated posts ready for review this week.

**Quick Stats:**
- Average ICP Score: {avg_icp_score}
- Average Voice Match: {avg_voice_score}
- Auto-approved (ICP 90+): {auto_approved_count}
- Needs review (ICP 75-89): {needs_review_count}

**Review them here:**
[Link to Notion Database View]

**For each post, you can:**
✓ Approve & Schedule
✏️ Edit & Approve
✕ Reject

The AI learns from your edits - any changes you make will improve future outputs.

Best,
Growth Super Agent 🤖
```

**Notion Database Structure:**

**Properties:**
- Title (title): Post headline/first line
- Status (select): Pending Review, Approved, Rejected, Published
- Platform (select): LinkedIn, Twitter, Blog
- ICP Score (number)
- Voice Match Score (number)
- AI Slop Score (number)
- Original Content (long text)
- AI Generated (long text)
- Your Edits (long text)
- Scheduled Date (date)
- Learning Notes (long text)

**Approval Actions:**

**Option 1: Approve as-is**
- Status → "Approved"
- Move to Distribution queue
- No learning data (AI got it right)

**Option 2: Edit & Approve**
- Status → "Approved"
- Track edits in "Your Edits" field
- Send edits to Learning Module
- Move to Distribution queue

**Option 3: Reject**
- Status → "Rejected"
- Add rejection reason in "Learning Notes"
- Send to Learning Module
- Do NOT move to Distribution

---

### Step 7: Edit Tracking for Learning Loop

**AI Step Name:** "Analyze User Edits"

**Trigger:** When "Status" changes to "Approved" AND "Your Edits" is not empty

**GPT Prompt:**
```
You are analyzing edits made by Wes to AI-generated content to improve future outputs.

**Your task:**
Compare the AI-generated version to Wes's edited version and extract patterns.

**AI Generated:**
{ai_generated_field}

**Wes's Edit:**
{your_edits_field}

**Analysis Framework:**

**1. Diff Analysis**
Identify what changed:
- Words/phrases removed
- Words/phrases added
- Sentence restructuring
- Paragraph reordering

**2. Pattern Extraction**
What patterns emerge?
- Specific words Wes avoids
- Specific words Wes prefers
- Sentence length preferences
- Structural preferences

**3. Voice Calibration**
How did the edit improve voice match?
- More direct?
- More conversational?
- More specific?
- Better storytelling?

**4. Learning Insight**
What should the AI do differently next time?

**Output Format (JSON):**
{
  "edit_summary": {
    "words_removed": ["leverage", "ecosystem"],
    "words_added": ["actually", "just"],
    "phrases_changed": [
      {
        "from": "In order to succeed",
        "to": "To succeed"
      }
    ],
    "structural_changes": "Moved story to opening, shortened by 30 words"
  },
  "patterns_detected": {
    "wes_avoids": ["In order to", "leverage", "facilitate"],
    "wes_prefers": ["just", "actually", "here's the thing"],
    "sentence_length_preference": "shorter (avg 12 words vs AI's 18)",
    "voice_improvements": "More direct, less formal"
  },
  "learning_for_ai": {
    "voice_rule_to_add": "Avoid 'in order to' - use 'to' instead",
    "example_to_add": {
      "bad": "In order to scale, you need product-market fit",
      "good": "To scale, you need product-market fit"
    },
    "priority": "high|medium|low"
  }
}

**Update Voice Guide:**
Add these patterns to the working voice guide for next content generation.
```

**Knowledge to Upload:**
- Current `WRITING_VOICE.md`

**Output Fields:**
- Edit summary (JSON)
- Patterns detected (JSON)
- New voice rules (list)
- Update voice guide? (boolean)

**Automation:**
- Store insights in "Voice Learning" Notion database
- After 10+ edits, review patterns and update main voice guide
- Feed insights back into Step 2 (Repurposing Engine)

---

## DISTRIBUTION & PUBLISHING

### Step 8: Schedule Content

**Relay Step Type:** "Create rows in Notion" or "Update row in Notion"

**Trigger:** When Status = "Approved"

**Action:**
1. Move to "Publishing Queue" database
2. Assign publish date based on calendar rules
3. Add to appropriate platform queue

**Calendar Rules (GPT Prompt for Scheduling):**
```
You are a content scheduling optimizer.

**Your task:**
Assign optimal publish dates and times for approved content based on:
1. Current calendar (what's already scheduled)
2. Platform best practices
3. Content type and topic

**Approved Content:**
{approved_content_from_step_6}

**Current Schedule:**
{notion_publishing_queue}

**Scheduling Rules:**

**LinkedIn:**
- Post frequency: 3-4x per week
- Best times: Tuesday-Thursday, 9-11 AM PST
- Avoid weekends
- Space posts at least 48 hours apart

**Twitter:**
- Thread frequency: 2-3x per week
- Best times: Monday-Friday, 10 AM - 2 PM PST
- Can post same day as LinkedIn (different content)

**Blog:**
- Post frequency: 1x per week
- Best day: Wednesday
- Publish at 8 AM PST

**Content Balancing:**
- Don't publish 2 PLG topics in a row
- Mix tactical + strategic content
- Alternate between stories and frameworks

**Output Format (JSON):**
{
  "scheduled_content": [
    {
      "content_id": "123",
      "platform": "LinkedIn",
      "publish_date": "2025-02-19",
      "publish_time": "09:00 PST",
      "reason": "Tuesday, 9 AM optimal time, no conflicts"
    }
  ]
}
```

**Output Fields:**
- Publish date (date)
- Publish time (time)
- Platform (select)
- Status → "Scheduled"

---

### Step 9: Platform Publishing

**For each platform, create separate steps:**

#### 9A: LinkedIn Publishing

**Relay Step Type:** "HTTP Request" or "LinkedIn Integration" (if available)

**Trigger:** When publish date/time arrives AND Platform = "LinkedIn"

**API Setup:**
- Endpoint: LinkedIn API (requires auth)
- Method: POST
- Body: Post text + formatting

**Alternative (Manual):**
- Export to CSV or Google Sheets
- Use Buffer, Hootsuite, or manual posting

---

#### 9B: Twitter Publishing

**Relay Step Type:** "HTTP Request" or "Twitter Integration"

**Trigger:** When publish date/time arrives AND Platform = "Twitter"

**Thread Formatter (GPT Prompt):**
```
Convert this content into a Twitter thread.

**Content:**
{approved_content}

**Rules:**
- Max 280 characters per tweet
- Number tweets (1/X format)
- First tweet is the hook
- Last tweet is CTA or summary
- Break at natural points, not mid-sentence

**Output Format (JSON):**
{
  "thread": [
    "1/5 Hook tweet (under 280 chars)",
    "2/5 Main point 1...",
    "3/5 Main point 2...",
    "4/5 Supporting detail...",
    "5/5 Takeaway or CTA"
  ]
}
```

---

#### 9C: Blog Publishing

**Relay Step Type:** "Webflow API" or "Notion API"

**Trigger:** When publish date/time arrives AND Platform = "Blog"

**Blog Expander (GPT Prompt):**
```
Expand this LinkedIn post into a full blog post (800-1200 words).

**LinkedIn Post:**
{approved_content}

**Format:**
- Compelling headline
- Opening hook (2-3 paragraphs)
- Main content (3-5 sections with H2 headers)
- Examples or case studies
- Actionable takeaways
- CTA

**Voice:**
- Same direct, personal voice as LinkedIn
- More depth and detail
- Include additional examples
- Maintain Wes's tone throughout

**Output:**
Full blog post in Markdown format
```

---

### Step 10: Post-Publishing Tracking

**Relay Step Type:** "Update Notion row"

**Trigger:** After content is published

**Action:**
1. Update Status → "Published"
2. Add published URL
3. Create placeholder for analytics

**Setup Analytics Tracking:**
- LinkedIn: Manual export or API (if available)
- Twitter: Twitter Analytics API
- Blog: Google Analytics or Webflow analytics

**Weekly Analytics Report (Separate Workflow):**
```
Fetch performance data for all published content from last 7 days:
- Impressions
- Engagement (likes, comments, shares)
- Engagement rate
- Click-through rate (for blog posts)

Update Notion database with metrics.

Send weekly summary email with:
- Top performing content
- Engagement trends
- ICP score correlation with performance
- Recommendations for next week
```

---

## WORKFLOW SUMMARY

**Complete Flow:**

```
1. Content Ingestion (AI) → Extract insights from source
2. Repurposing (AI) → Generate 3 LinkedIn posts
3. Voice Adaptation (AI) → Refine for authentic voice
4. Quality Check (AI) → Score for ICP match
5. Learning Module (AI) → Extract patterns

→ HUMAN REVIEW (Weekly batch)

6. Approval (Human) → Approve/Edit/Reject
7. Edit Tracking (AI) → Learn from edits

→ DISTRIBUTION

8. Scheduling (AI) → Assign optimal dates
9. Publishing (API) → Post to platforms
10. Tracking (Data) → Collect performance metrics

→ LEARNING LOOP (feeds back to Step 1)
```

---

## RELAY.APP CONFIGURATION TIPS

**Knowledge Upload Strategy:**

**For each AI step, upload:**
- Relevant PRD sections
- Voice guide excerpts
- Example content (good + bad)
- Keep knowledge focused (don't upload everything to every step)

**Best Practices:**

1. **Use Output Fields Consistently:**
   - Always output JSON for structured data
   - Use same field names across steps
   - Makes data passing easier

2. **Test Each Step Individually:**
   - Use "Test Run" feature
   - Verify outputs before connecting steps
   - Check for AI hallucinations

3. **Set Up Fallbacks:**
   - What happens if ICP score < 75?
   - What if API fails?
   - Have manual override options

4. **Monitor AI Credits:**
   - Steps 2-5 are most credit-intensive
   - Consider using GPT-4 only for Steps 2-3 (quality critical)
   - Use GPT-3.5 for Steps 1, 4-5 (analysis only)

5. **Versioning:**
   - Keep old voice guides as you update them
   - Track which version produced which content
   - A/B test prompt changes

---

## TESTING CHECKLIST

Before going live:

- [ ] Step 1: Test with 3 different content types (podcast, blog, video)
- [ ] Step 2: Verify all 3 posts sound like Wes (not generic AI)
- [ ] Step 3: Check AI slop detection catches known patterns
- [ ] Step 4: Validate ICP scores match your intuition
- [ ] Step 5: Confirm learning insights are actionable
- [ ] Step 6: Test approval workflow in Notion
- [ ] Step 7: Verify edit tracking captures changes
- [ ] Step 8: Check scheduling logic doesn't double-book
- [ ] Step 9: Test publishing to each platform (sandbox first!)
- [ ] Step 10: Confirm analytics data flows to Notion

**Success Metrics:**

- Voice Match Score: Target 90+
- AI Slop Score: Target 95+
- ICP Score: Target 85+
- Approval Rate: Target 70%+ auto-approved or quick approve
- Time Saved: Should take < 30 min per week for review vs 2-3 hours manually

---

## NEXT STEPS

1. **Start with Processing Engine only** (Steps 1-5)
   - Get AI quality dialed in first
   - Don't worry about distribution yet

2. **Test with 10 pieces of content**
   - Review all outputs manually
   - Refine prompts based on results

3. **Add Approval Workflow** (Steps 6-7)
   - Set up Notion database
   - Test edit tracking

4. **Add Distribution** (Steps 8-10)
   - Start with one platform (LinkedIn)
   - Expand to others once working

5. **Close the Learning Loop**
   - After 30 days, review learning insights
   - Update voice guide with patterns
   - Refine prompts in Steps 2-3

---

**Questions or Issues?**
Reference the mockups for UI/UX inspiration:
- Approval interface: `frontend/mockups/approval-workflow.html`
- Distribution queue: `frontend/mockups/distribution.html`
- Analytics dashboard: `frontend/mockups/analytics.html`

Built by Claude Code • Growth Super Agent v1.0
