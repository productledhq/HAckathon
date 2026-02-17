/**
 * Mock data for development
 * All content written in Wes Bush's voice (see Docs/WRITING_VOICE.md)
 */

import {
  User,
  ContentSource,
  ContentItem,
  ContentBundle,
  DashboardStats,
} from "./types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Wes Bush",
    email: "wes@productled.com",
    role: "admin",
  },
  {
    id: "user-2",
    name: "Fernando",
    email: "fernando@productled.com",
    role: "admin",
  },
  {
    id: "user-3",
    name: "Missy",
    email: "missy@productled.com",
    role: "approver",
  },
];

// Mock Podcast Sources
export const mockSources: ContentSource[] = [
  {
    id: "source-1",
    type: "podcast",
    title: "Why Most Free Trials Fail",
    episodeNumber: 47,
    recordingDate: "2026-02-10",
    duration: 2340, // 39 minutes
    transcriptUrl: "https://example.com/transcripts/ep47",
  },
  {
    id: "source-2",
    type: "podcast",
    title: "The $300K Whitepaper Mistake",
    episodeNumber: 46,
    recordingDate: "2026-02-03",
    duration: 2820, // 47 minutes
    transcriptUrl: "https://example.com/transcripts/ep46",
  },
  {
    id: "source-3",
    type: "podcast",
    title: "Bowling Alley Framework Deep Dive",
    episodeNumber: 45,
    recordingDate: "2026-01-27",
    duration: 3120, // 52 minutes
    transcriptUrl: "https://example.com/transcripts/ep45",
  },
];

// Mock Content Items
export const mockContentItems: ContentItem[] = [
  // Episode 47 - LinkedIn Post (Approved)
  {
    id: "content-1",
    sourceId: "source-1",
    source: mockSources[0],
    platform: "linkedin",
    type: "post",
    status: "approved",
    title: "Free trials that convert zero users",
    content: `I spent three weeks building the perfect free trial for Vidyard.

Beautiful onboarding. Clear product tours. Email drip campaigns ready to fire.

Three weeks later, not a single user upgraded without talking to sales.

That's when I learned the hard truth: your free trial isn't competing with other products. It's competing with the user's time.

Most teams obsess over features. They add more demos, more tooltips, more "helpful" emails.

But users don't want more. They want faster.

The products that win? They get users to value in under 5 minutes. Not 5 days.

Slack did this. Dropbox did this. Notion did this.

Your users say a simple prayer after signing up: "Please make this easy."

Answer that prayer, or watch them leave.`,
    originalContent: `Free trials are a critical component of product-led growth strategies. However, many companies struggle to optimize their free trial experience for maximum conversion rates. In this post, we'll explore the key factors that contribute to successful free trial conversions.`,
    icpScore: {
      score: 92,
      reasons: [
        "Specific personal story with concrete outcome",
        "Addresses B2B SaaS founder pain point",
        "Uses real company examples (Vidyard, Slack, Dropbox, Notion)",
        "Clear, actionable insight",
      ],
      suggestions: [],
    },
    aiDetectionScore: 8,
    createdAt: "2026-02-15T10:30:00Z",
    updatedAt: "2026-02-15T14:22:00Z",
    createdBy: mockUsers[0],
    lastEditedBy: mockUsers[0],
    approvedBy: mockUsers[2],
  },

  // Episode 47 - Newsletter (Pending)
  {
    id: "content-2",
    sourceId: "source-1",
    source: mockSources[0],
    platform: "newsletter",
    type: "newsletter",
    status: "pending",
    title: "The 5-Minute Rule: Why Fast Beats Perfect",
    content: `Last week, I audited 23 B2B SaaS free trials.

The average time to first value? 47 minutes.

The companies growing fastest? Under 5 minutes.

Here's what I found:

## The Time-to-Value Gap

Most product teams measure success by features shipped. More integrations. More customization. More "enterprise-ready" capabilities.

But users don't care about your roadmap. They care about solving their problem today.

I watched a user sign up for a project management tool. The onboarding asked for:
- Team size
- Industry
- Use case
- Integration preferences
- Notification settings

12 questions before they could create their first project.

They closed the tab at question 7.

## What Fast Looks Like

Notion gets you writing in 30 seconds. Slack gets you messaging in 45 seconds. Dropbox gets you sharing in under a minute.

They all follow the same pattern: core value first, customization later.

Your users will stick around to configure settings. But only after you've proven the product works.

## The Permission Paradox

Here's the part that trips up most founders: users don't want to "try" your product. They want to use it.

That means your free trial needs to feel like the real thing. Full access. No artificial limits. No "upgrade to unlock" messages on day one.

Calendly did this right. You can schedule unlimited meetings on the free plan. The upgrade only matters when you need team features.

The result? 70% of their revenue comes from self-serve. No sales calls needed.

## Your 5-Minute Audit

Open your product right now. Start a stopwatch. Sign up with a new account.

How long until you experience the core value? The thing your product is actually for?

If it's over 5 minutes, you're losing users.

Cut everything between signup and value. Move it to step two. Or step ten. Just get them to the moment they think "this actually works" as fast as possible.

Your product deserves to become the obvious choice in your market. Let's get to work.

— Wes`,
    originalContent: `In this newsletter edition, we explore the concept of time-to-value in product-led growth. Time-to-value (TTV) is a critical metric that measures how quickly users can derive value from your product after signing up.`,
    icpScore: {
      score: 88,
      reasons: [
        "Strong opening with specific data",
        "Real company examples with concrete details",
        "Actionable framework (5-minute audit)",
        "Signature Wes closing",
      ],
      suggestions: [
        "Could use one more personal failure story",
        "The 'Permission Paradox' section could be stronger",
      ],
    },
    aiDetectionScore: 12,
    createdAt: "2026-02-15T11:15:00Z",
    updatedAt: "2026-02-15T11:15:00Z",
    createdBy: mockUsers[0],
  },

  // Episode 46 - LinkedIn Post (Scheduled)
  {
    id: "content-3",
    sourceId: "source-2",
    source: mockSources[1],
    platform: "linkedin",
    type: "post",
    status: "scheduled",
    title: "The most expensive content I ever created",
    content: `I spent $300,000 promoting a whitepaper.

The content was solid. 42 pages of PLG research. Original data. Beautiful design.

We ran LinkedIn ads. Sponsored posts. Retargeting campaigns.

6,847 downloads in three months.

Three leads converted.

That's $100,000 per customer.

The mistake wasn't the content. It was the assumption that "more content" equals "more revenue."

Nobody reads 42-page PDFs anymore. They skim the summary. They share the headline. They move on.

Your buyers don't have time for your content. They have time for solutions.

The companies winning today? They build products that prove value in minutes, not whitepapers that prove expertise in pages.

Sound familiar?`,
    icpScore: {
      score: 95,
      reasons: [
        "Shocking, specific opening ($300,000)",
        "Concrete metrics (6,847 downloads, 3 conversions)",
        "Clear insight about content vs. product",
        "Classic Wes 'Sound familiar?' close",
      ],
    },
    aiDetectionScore: 5,
    scheduledFor: "2026-02-18T09:00:00Z",
    createdAt: "2026-02-14T16:45:00Z",
    updatedAt: "2026-02-16T10:12:00Z",
    createdBy: mockUsers[0],
    approvedBy: mockUsers[2],
  },

  // Episode 46 - Blog Post (Draft)
  {
    id: "content-4",
    sourceId: "source-2",
    source: mockSources[1],
    platform: "blog",
    type: "article",
    status: "draft",
    title: "Why Content Marketing Fails in PLG",
    content: `## The $300K Lesson

I used to believe in content marketing the way most B2B founders do: create great content, distribute it widely, watch the leads roll in.

Then I spent $300,000 promoting a whitepaper and got three customers.

This isn't a story about bad content or poor distribution. The whitepaper was good. The data was original. The design was professional. We promoted it everywhere.

The problem was deeper: content marketing doesn't work the way it used to.

## What Changed

Ten years ago, a well-researched whitepaper could generate hundreds of qualified leads. Your buyers had time. They read 40-page reports. They attended hour-long webinars. They requested demos.

Today? Your buyer is a product manager at a Series B startup. She's in back-to-back meetings. She has 47 browser tabs open. She doesn't have time for your whitepaper.

She has time for a product that solves her problem in the next 5 minutes.

That's the shift. Buyers moved from "research first, buy later" to "try first, research never."

## The New Playbook

[Content continues but needs development...]`,
    icpScore: {
      score: 72,
      reasons: [
        "Strong opening with the $300K story",
        "Good diagnosis of the problem",
      ],
      suggestions: [
        "Incomplete - needs 'The New Playbook' section",
        "Could use more specific company examples",
        "Missing actionable takeaways",
      ],
    },
    aiDetectionScore: 18,
    createdAt: "2026-02-16T09:00:00Z",
    updatedAt: "2026-02-16T09:45:00Z",
    createdBy: mockUsers[0],
    lastEditedBy: mockUsers[0],
  },

  // Episode 45 - LinkedIn Post (Published)
  {
    id: "content-5",
    sourceId: "source-3",
    source: mockSources[2],
    platform: "linkedin",
    type: "post",
    status: "published",
    title: "How Slack reached $5M ARR with 8 employees",
    content: `Stewart Butterfield launched Slack with a simple bet:

If we make the product effortless, we won't need sales reps.

They hit $5M ARR with 8 employees. No enterprise sales team. No BDRs. No SDRs.

There is no world in which they could have scaled this fast with a traditional sales-led motion.

Here's what they did differently:

They focused on one bowling pin. Tech startups who already used IRC and HipChat. People who understood the problem and could spot a better solution immediately.

They made onboarding stupid simple. Create a team. Invite three people. Send a message. Done in under 60 seconds.

They let the product sell itself. Every message sent in Slack was a mini-demo to everyone in that workspace.

The Bowling Alley Framework in action: dominate one niche, let word-of-mouth carry you to the next.

Your product can do this too. But only if you stop trying to be everything to everyone.

Pick your first bowling pin. Make the product effortless for them. Let the rest follow.`,
    icpScore: {
      score: 94,
      reasons: [
        "Specific company example with metrics ($5M ARR, 8 employees)",
        "Clear framework reference (Bowling Alley)",
        "Actionable pattern broken down into steps",
        "Strong opening and close",
      ],
    },
    aiDetectionScore: 7,
    publishedAt: "2026-02-12T14:00:00Z",
    createdAt: "2026-02-11T11:20:00Z",
    updatedAt: "2026-02-11T15:30:00Z",
    createdBy: mockUsers[0],
    approvedBy: mockUsers[2],
  },

  // Episode 45 - Newsletter (Rejected)
  {
    id: "content-6",
    sourceId: "source-3",
    source: mockSources[2],
    platform: "newsletter",
    type: "newsletter",
    status: "draft",
    title: "The Bowling Alley Strategy: A Deep Dive",
    content: `In today's competitive landscape, B2B SaaS companies need to leverage strategic frameworks to foster growth and build sustainable competitive advantages. The Bowling Alley Framework offers a robust approach to market development that can help organizations scale effectively.

## Understanding the Framework

The Bowling Alley Framework is a multifaceted strategy that focuses on sequential market penetration. By targeting specific customer segments systematically, companies can build momentum and create network effects that drive exponential growth.

## Key Components

There are several factors to consider when implementing this approach:

First, it's essential to identify your initial target market. This requires deep market research, customer interviews, and competitive analysis.

Second, you need to develop a value proposition that resonates with this specific segment. This means understanding their pain points, their workflows, and their decision-making processes.

Third, you must execute flawlessly within this market before expanding to adjacent segments.

## Implementation Roadmap

Here's how to get started with the Bowling Alley Framework:

Step 1: Market Research
Step 2: Segment Selection
Step 3: Value Prop Development
Step 4: Go-to-Market Execution
Step 5: Measure and Iterate

By embracing these principles and executing systematically, you'll be well on your way to building a category-defining company.`,
    icpScore: {
      score: 23,
      reasons: [
        "Generic corporate-speak throughout",
        "No specific company examples or metrics",
        "Uses multiple AI slop patterns",
      ],
      suggestions: [
        "REWRITE ENTIRELY - this doesn't sound like Wes",
        "Remove all series-of-three constructions",
        "Cut red flag words: leverage, robust, multifaceted, foster",
        "Replace generic opening with specific story",
        "Add concrete examples (Slack, Notion, etc.)",
        "Remove numbered steps, use narrative prose",
        "Cut empty motivational close",
      ],
    },
    aiDetectionScore: 89,
    createdAt: "2026-02-13T10:00:00Z",
    updatedAt: "2026-02-13T10:30:00Z",
    createdBy: mockUsers[0],
    rejectionReason:
      "This reads like a generic AI wrote it. Doesn't sound like Wes at all. See voice guide violations in ICP score suggestions.",
  },

  // Episode 47 - Blog Post (In Progress)
  {
    id: "content-7",
    sourceId: "source-1",
    source: mockSources[0],
    platform: "blog",
    type: "article",
    status: "in_progress",
    title: "The Free Trial Playbook: From Zero to Value in 5 Minutes",
    content: `I've audited over 200 B2B SaaS free trials in the past year.

The pattern is clear: products that get users to value in under 5 minutes convert at 3-5x the rate of products that take longer.

But most teams are still designing free trials like it's 2015.

## The Old Playbook Doesn't Work

Here's what I see constantly:

A user signs up. They're excited. They've heard good things about your product. They carved out 20 minutes to check it out.

Then you hit them with:
- "Tell us about your company"
- "How many people are on your team?"
- "What's your use case?"
- "Select your integrations"
- "Customize your settings"

Twelve questions later, they still haven't seen your product work.

[Section in progress - need to add: specific examples, the 5-minute framework, company case studies]`,
    icpScore: {
      score: 78,
      reasons: [
        "Strong opening with specific data (200 audits)",
        "Concrete conversion metric (3-5x)",
        "Good diagnosis of the problem",
      ],
      suggestions: [
        "Incomplete - needs framework section",
        "Add 2-3 specific company examples",
        "Needs conclusion with actionable steps",
      ],
    },
    aiDetectionScore: 14,
    createdAt: "2026-02-16T14:00:00Z",
    updatedAt: "2026-02-17T09:30:00Z",
    createdBy: mockUsers[0],
    lastEditedBy: mockUsers[0],
  },
];

// Mock Content Bundles
export const mockBundles: ContentBundle[] = [
  {
    source: mockSources[0],
    items: mockContentItems.filter((item) => item.sourceId === "source-1"),
    stats: {
      total: 3,
      pending: 1,
      approved: 1,
      scheduled: 0,
      published: 0,
    },
  },
  {
    source: mockSources[1],
    items: mockContentItems.filter((item) => item.sourceId === "source-2"),
    stats: {
      total: 2,
      pending: 0,
      approved: 0,
      scheduled: 1,
      published: 0,
    },
  },
  {
    source: mockSources[2],
    items: mockContentItems.filter((item) => item.sourceId === "source-3"),
    stats: {
      total: 2,
      pending: 0,
      approved: 0,
      scheduled: 0,
      published: 1,
    },
  },
];

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalContent: 7,
  pendingApproval: 1,
  scheduledToday: 0,
  publishedThisWeek: 1,
  avgIcpScore: 77,
  timeSaved: 340, // minutes
};

// Helper function to get content by status
export function getContentByStatus(status: ContentItem["status"]) {
  return mockContentItems.filter((item) => item.status === status);
}

// Helper function to get bundle by source ID
export function getBundleBySourceId(sourceId: string) {
  return mockBundles.find((bundle) => bundle.source.id === sourceId);
}
