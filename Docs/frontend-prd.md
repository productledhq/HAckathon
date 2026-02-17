# Frontend PRD - Head of Growth Super Agent

**Version:** 1.0
**Last Updated:** February 17, 2026
**Team:** Wes (Product Owner), Fernando (Developer), Missy (Designer)

---

## Executive Summary

Build a **beautiful, fast, Notion/ChatGPT-inspired** content approval interface that makes reviewing AI-generated content genuinely enjoyable. The frontend is the face of the system - it needs to delight, not feel like work.

**Core User Experience:**
- Wes reviews content in one weekly 60-minute session
- Direct inline editing (no "click save" buttons - auto-save everything)
- Smart bundling (review by podcast episode, not individual pieces)
- Dark mode by default (with light mode option)
- Mobile-responsive for quick approvals on-the-go

---

## 1. User Personas & Access Levels

### Primary User: Wes (Approver)
- **Role:** Final content approver
- **Permissions:** Full access - review, edit, approve, reject, publish
- **Usage:** Weekly 60-min approval session
- **Preferences:**
  - Hates AI slop, bad hooks/closes
  - Wants direct editing (no prompting AI to change)
  - Auto-save everything (no "save" buttons)
  - Trusts system defaults for scheduling

### Secondary Users (Team)
| User | Role | Permissions | Use Cases |
|------|------|-------------|-----------|
| Josh | Head of Ops | Backup approver | Review when Wes unavailable |
| Missy | Designer | View + comment | Suggest visual improvements |
| Fernando | Developer | Admin access | System management |
| Kim | Admin | View + analytics | Track performance |
| Ralph | EA | View + schedule | Calendar coordination |

---

## 2. Design System

### 2.1 Visual Identity

**Inspiration:**
- Notion: Clean, minimal, content-focused
- ChatGPT: Conversational, easy to scan
- Linear: Fast, polished, satisfying
- Arc Browser: Beautiful details

**Design Principles:**
1. **Content first** - Remove visual noise
2. **Speed** - Instant feedback, fast load times
3. **Delight** - Micro-animations, satisfying interactions
4. **Clarity** - Obvious actions, no guessing

### 2.2 Color System

```css
/* Light Mode */
--bg-primary: #FFFFFF;
--bg-secondary: #F7F7F7;
--bg-tertiary: #F0F0F0;
--text-primary: #1A1A1A;
--text-secondary: #6B6B6B;
--text-tertiary: #A0A0A0;
--accent: #0066FF;
--success: #00C853;
--warning: #FFA726;
--error: #FF5252;
--border: #E5E5E5;

/* Dark Mode (Default) */
--bg-primary: #1A1A1A;
--bg-secondary: #2A2A2A;
--bg-tertiary: #333333;
--text-primary: #F7F7F7;
--text-secondary: #A0A0A0;
--text-tertiary: #6B6B6B;
--accent: #3B82F6;
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--border: #404040;
```

### 2.3 Typography

```css
/* Font Stack */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

/* Type Scale */
--text-hero: 32px / 40px / 600;       /* H1 */
--text-title: 24px / 32px / 600;      /* H2 */
--text-heading: 18px / 28px / 600;    /* H3 */
--text-large: 16px / 24px / 400;      /* Body Large */
--text-body: 14px / 21px / 400;       /* Body */
--text-small: 12px / 18px / 400;      /* Small */
--text-caption: 11px / 16px / 500;    /* Caption */

/* Letter Spacing */
--tracking-tight: -0.02em;  /* Large headings */
--tracking-normal: 0em;     /* Body text */
--tracking-wide: 0.01em;    /* Small caps */
```

**Typography Rules:**
- Line-height minimum 1.5 for readability
- Max 70 characters per line for body text
- 1.5em spacing between paragraphs
- Dark mode: Reduce font weight by 100 for optical balance

### 2.4 Spacing System

```css
/* Base: 4px */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

**Spacing Philosophy:**
- Everything is multiple of 4px
- Generous whitespace (don't cram UI)
- Touch targets minimum 44px
- Consistent rhythm throughout

### 2.5 Component Tokens

```css
/* Buttons */
--button-height: 40px;
--button-padding: 12px 20px;
--button-radius: 8px;

/* Cards */
--card-padding: 24px;
--card-radius: 12px;
--card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
--card-shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.15);

/* Inputs */
--input-height: 40px;
--input-padding: 8px 12px;
--input-radius: 6px;
--input-border: 1px solid var(--border);

/* Transitions */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 3. Page Layouts

### 3.1 Main Approval Interface

**Layout Structure:**
```
┌─────────────────────────────────────────────────────────┐
│ Header (72px) - Fixed                                   │
│ [Logo] [Pending: 12 items] [Progress] [Wes] [Settings] │
├────────┬────────────────────────────────────────────────┤
│        │                                                │
│ Side   │  Content Area                                  │
│ bar    │  ┌──────────────────────────────────────────┐ │
│ (280)  │  │ Content Card                             │ │
│        │  │ - ICP Score: 87/100                      │ │
│ Bund   │  │ - Predicted: 150 likes                   │ │
│ les    │  │ - Post Time: Thu 10:17am                 │ │
│        │  │                                          │ │
│ [○ 3]  │  │ [Editable content...]                    │ │
│ [○ 7]  │  │                                          │ │
│ [○ 2]  │  │ Auto-saves as you type...                │ │
│        │  │                                          │ │
│ ───    │  └──────────────────────────────────────────┘ │
│        │                                                │
│ Filt   │  Actions (Sticky Bottom)                       │
│ ers    │  [Reject] [Schedule] [Approve & Publish ✓]    │
│        │                                                │
└────────┴────────────────────────────────────────────────┘
```

**Key Features:**
- **Sidebar:** Bundle view (by podcast episode)
- **Content Area:** Full-width editing with preview
- **Actions:** Sticky at bottom, always visible
- **No "Save" button:** Auto-save every 2 seconds

### 3.2 Dashboard (Home)

**Purpose:** Quick overview + fast access to approval workflow

```
┌─────────────────────────────────────────────────────────┐
│ Header                                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📋 Pending Approval                                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 12 items ready to review                        │   │
│  │ Estimated time: 45 minutes                      │   │
│  │                                                 │   │
│  │ [Start Review Session]                          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  📅 This Week's Schedule                                │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Mon  Feb 17  9:00 AM  LinkedIn Post #1          │   │
│  │ Wed  Feb 19  9:00 AM  LinkedIn Post #2          │   │
│  │ Thu  Feb 20  8:00 AM  Newsletter → 4,231 subs   │   │
│  │ Fri  Feb 21  10:00AM  Blog Post                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  📊 Last Week's Impact                                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 7 posts published                               │   │
│  │ 12,400 people reached                           │   │
│  │ 1,240 engagements                               │   │
│  │ 23 new ICP leads ✨                              │   │
│  │                                                 │   │
│  │ Top performer: "The PLG Paradox" (340 likes)    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ⏱️  Time Saved This Month: 14.2 hours                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Key Features:**
- Big "Start Review Session" CTA
- Calendar view of upcoming posts
- Last week's impact (celebrate wins)
- Time saved metric (justify ROI)

### 3.3 Content Calendar View

**Purpose:** See publishing schedule at a glance

```
┌─────────────────────────────────────────────────────────┐
│ Header                 [Week] [Month] [Filter ▼]        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  February 17-23, 2026                                   │
│  ┌───┬───┬───┬───┬───┬───┬───┐                        │
│  │Mon│Tue│Wed│Thu│Fri│Sat│Sun│                        │
│  ├───┼───┼───┼───┼───┼───┼───┤                        │
│  │ • │ • │ • │📧 │ • │   │   │  • = LinkedIn Post     │
│  │ • │   │ • │📝 │   │   │   │  📧 = Newsletter       │
│  │   │   │   │   │   │   │   │  📝 = Blog Post        │
│  └───┴───┴───┴───┴───┴───┴───┘                        │
│                                                         │
│  Scheduled (7)                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Mon Feb 17, 9:00 AM                             │   │
│  │ LinkedIn: "The 5 Stages of PLG Maturity"        │   │
│  │ Status: Scheduled  ICP: 87/100                  │   │
│  │ [Edit] [Reschedule] [Cancel]                    │   │
│  ├─────────────────────────────────────────────────┤   │
│  │ ... more items                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Component Library

### 4.1 Buttons

**Variants:**
```jsx
<Button variant="primary">Approve & Publish</Button>
<Button variant="secondary">Schedule</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="danger">Reject</Button>
```

**States:**
- Default
- Hover (slight scale, shadow increase)
- Active (scale down slightly)
- Disabled (opacity 0.5, cursor not-allowed)
- Loading (spinner, disabled)

**Animations:**
- Hover: Scale 1.02, shadow increase, 150ms
- Click: Scale 0.98, 100ms

### 4.2 Content Card

**Structure:**
```jsx
<ContentCard>
  <CardHeader>
    <Title>LinkedIn Post #1 of 7</Title>
    <Badge>Scheduled</Badge>
  </CardHeader>

  <CardMetrics>
    <Metric icon="🎯" label="ICP Score" value="87/100" status="good" />
    <Metric icon="📊" label="Predicted" value="~150 likes" />
    <Metric icon="⏰" label="Best Time" value="Thu 10:17 AM" />
  </CardMetrics>

  <CardContent>
    {/* Editable rich text */}
  </CardContent>

  <CardActions>
    <Button variant="ghost">Reject</Button>
    <Button variant="secondary">Schedule</Button>
    <Button variant="primary">Approve ✓</Button>
  </CardActions>
</ContentCard>
```

**States:**
- Default
- Hover (shadow increase)
- Selected (border accent color)
- Editing (border accent, toolbar visible)

### 4.3 Rich Text Editor

**Based on Tiptap (Notion-like editor)**

**Features:**
- **Slash commands:** `/` for quick actions
- **Markdown shortcuts:** `##` heading, `**` bold, `-` list
- **Inline toolbar:** Appears on text selection
- **Block handles:** Drag to reorder
- **Auto-save:** Every 2 seconds, subtle indicator

**Toolbar (on selection):**
```
┌─────────────────────────────────────────────┐
│ B  I  U  S  Link  ✨ AI Fix                 │
└─────────────────────────────────────────────┘
```

**AI Fix Button:**
- Select awkward text → Click "✨ AI Fix"
- AI rewrites instantly
- Shows diff (what changed)
- Accept or reject

**Auto-Save Indicator:**
```
Bottom right corner:
"Saving..." (spinner)
"Saved ✓" (fades out after 2s)
```

### 4.4 Bundle Sidebar

**Purpose:** Group content by source (podcast episode)

```
┌─────────────────────┐
│ Bundles             │
├─────────────────────┤
│                     │
│ ● Podcast #47       │
│   Sarah Nguyen      │
│   ┌───────────────┐ │
│   │ 2 Pre-interview│ │
│   │ 1 Newsletter  │ │
│   │ 7 LinkedIn    │ │
│   │ 1 Blog        │ │
│   └───────────────┘ │
│   [Review Bundle]  │
│                     │
│ ○ Podcast #48       │
│   Mike Johnson      │
│   (3 items)         │
│                     │
│ ○ Book Chapter 8    │
│   (5 items)         │
│                     │
├─────────────────────┤
│ Filters             │
│ □ LinkedIn          │
│ □ Newsletter        │
│ □ Blog              │
│ □ Twitter           │
└─────────────────────┘
```

**Interactions:**
- Click bundle → expand/collapse
- Click item → navigate to content
- Keyboard: ↑↓ to navigate, Enter to open

### 4.5 Metrics Display

**ICP Score Badge:**
```jsx
<ICPScore score={87}>
  <ScoreNumber>87/100</ScoreNumber>
  <ScoreLabel>ICP Match</ScoreLabel>
  <ScoreIndicator status="good" /> {/* ✅ */}
</ICPScore>
```

**Color Coding:**
- 90-100: Green (✅ Exceptional)
- 70-89: Green (✅ Good)
- 50-69: Yellow (⚠️ Marginal)
- <50: Red (❌ Fail)

**Predictive Metrics:**
```jsx
<PredictionCard>
  <Icon>📊</Icon>
  <Label>Predicted Engagement</Label>
  <Value>~150 likes</Value>
  <Subtext>23% above average</Subtext>
</PredictionCard>
```

---

## 5. Key Interactions & Workflows

### 5.1 Content Approval Flow

```
User Flow:
1. Dashboard → "Start Review Session" (CTA)
2. First bundle auto-opens (Podcast #47)
3. First content card displayed
4. User edits inline (auto-saves)
5. User clicks "Approve ✓" → Card slides away with checkmark animation
6. Next content card appears
7. Repeat until bundle complete
8. Bundle collapses, next bundle opens
9. After all reviewed → Success screen
```

**Keyboard Shortcuts:**
- `↓` or `J`: Next item
- `↑` or `K`: Previous item
- `Cmd+Enter`: Approve current
- `Cmd+Delete`: Reject current
- `E`: Start editing
- `Esc`: Exit editing
- `Cmd+/`: Show shortcuts

### 5.2 Editing Experience

**Inline Editing (No "Edit Mode"):**
- Click anywhere in content → Start typing
- Changes auto-save every 2 seconds
- "Saved ✓" indicator bottom-right

**AI Fix Feature:**
```
User Flow:
1. Select awkward sentence
2. Inline toolbar appears
3. Click "✨ AI Fix"
4. AI rewrites (150ms delay for UX feel)
5. Shows diff:
   ❌ "This is the thing that you should do"
   ✅ "Here's what you should do"
6. [Accept] or [Reject]
```

### 5.3 Bulk Actions

**Approve All in Bundle:**
```jsx
<BundleHeader>
  <Title>Podcast #47 - Sarah Nguyen (11 items)</Title>
  <Actions>
    <Button onClick={approveAll}>Approve All ✓</Button>
    <Button variant="ghost">Review Individual</Button>
  </Actions>
</BundleHeader>
```

**Confirmation:**
```
Modal:
"Approve all 11 items from Podcast #47?"

This will schedule:
• 2 pre-interview posts (Feb 15-16)
• 7 LinkedIn posts (Feb 17-23)
• 1 newsletter (Feb 20)
• 1 blog post (Feb 21)

[Cancel] [Yes, Approve All]
```

### 5.4 Scheduling Interface

**Quick Schedule (Default):**
- System recommends times (8-10am EST)
- LinkedIn: Spread across week (M/W/F 9am, T/Th 2pm)
- Newsletter: Thursday 8am EST
- Blog: Thursday 10am EST

**Custom Schedule:**
```jsx
<ScheduleModal>
  <DatePicker />
  <TimePicker />
  <TimezonePicker defaultValue="America/New_York" />

  <SmartSuggestions>
    <Suggestion>
      📊 Best time: Thu Feb 20, 10:17 AM
      (23% higher engagement)
    </Suggestion>
  </SmartSuggestions>

  <Actions>
    <Button>Schedule</Button>
  </Actions>
</ScheduleModal>
```

---

## 6. Mobile Experience

### 6.1 Mobile Layout (Responsive)

**Breakpoints:**
```css
--mobile: 0-640px;
--tablet: 641-1024px;
--desktop: 1025px+;
```

**Mobile Layout:**
```
┌─────────────────────┐
│ Header (Compact)    │
│ [☰] [12] [👤]       │
├─────────────────────┤
│                     │
│ Content Card        │
│ (Full Width)        │
│                     │
│ ← Swipe to Reject   │
│ → Swipe to Approve  │
│ ↑ Swipe to Edit     │
│                     │
│ [════════]          │
│ Progress: 3/12      │
│                     │
└─────────────────────┘
```

**Mobile Gestures:**
- Swipe Right: Approve
- Swipe Left: Reject
- Swipe Up: Edit
- Long Press: Voice feedback
- Double Tap: Expand full view

**Mobile Optimizations:**
- Touch targets minimum 44px
- No hover states (use active)
- Bottom navigation (thumb-friendly)
- Minimal sidebar (drawer on tap)

---

## 7. Performance Requirements

### 7.1 Speed Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | <1.0s | Lighthouse |
| Time to Interactive | <2.0s | Lighthouse |
| Content card load | <200ms | Custom |
| Auto-save latency | <100ms | Custom |
| Approve action | <200ms | Custom |
| Page transition | <300ms | Custom |

### 7.2 Optimization Strategies

**Code Splitting:**
- Lazy load routes (React.lazy)
- Lazy load editor (only when editing)
- Lazy load calendar (only when viewing)

**Caching:**
- Service worker for offline support
- Cache API responses (5 min TTL)
- Optimistic UI updates

**Bundle Size:**
- Target: <200KB initial bundle
- <500KB total (all code)
- Use tree-shaking (Vite/Webpack)

**Images:**
- Use WebP with fallback
- Lazy load below fold
- Responsive srcset

---

## 8. Accessibility (WCAG 2.1 AA)

### 8.1 Requirements

**Color Contrast:**
- Text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

**Keyboard Navigation:**
- All actions accessible via keyboard
- Visible focus indicators (2px outline)
- Skip links ("Skip to content")
- Logical tab order

**Screen Readers:**
- Semantic HTML (nav, main, article, etc.)
- ARIA labels on icons
- Alt text on images
- Live regions for dynamic updates

**Testing:**
- Lighthouse accessibility score >90
- Manual testing with screen reader (NVDA/JAWS)
- Keyboard-only navigation testing

---

## 9. Error Handling & Edge Cases

### 9.1 Error States

**Network Error:**
```
┌───────────────────────────────┐
│ ⚠️  Connection Lost            │
│ Couldn't save your changes.   │
│ Retrying in 5 seconds...      │
│ [Retry Now]                   │
└───────────────────────────────┘
```

**Publishing Failed:**
```
┌───────────────────────────────┐
│ ❌ Failed to Publish           │
│ Couldn't post to LinkedIn.    │
│ Check your connection?        │
│ [Retry] [Cancel Schedule]     │
└───────────────────────────────┘
```

**Auto-Save Failed:**
```
Bottom-right indicator:
"⚠️ Save failed - Retrying..."
"✓ Recovered, all changes saved"
```

### 9.2 Empty States

**No Pending Content:**
```
┌───────────────────────────────┐
│ 🎉 You're all caught up!      │
│ No content to review.         │
│                               │
│ Next batch ready Monday 9am.  │
│                               │
│ [View Calendar] [Upload Content]│
└───────────────────────────────┘
```

**No Published Content (This Week):**
```
┌───────────────────────────────┐
│ 📭 Nothing published yet      │
│ Approve some content to see   │
│ your impact here!             │
└───────────────────────────────┘
```

---

## 10. Animations & Micro-Interactions

### 10.1 Key Animations

**Approve Action:**
```
1. Button click: Scale down (0.95), 100ms
2. Card: Checkmark slides in from top, 200ms
3. Confetti burst (subtle), 300ms
4. Card slides right and fades out, 300ms
5. Next card slides in from bottom, 300ms
```

**Reject Action:**
```
1. Button click: Shake animation, 200ms
2. Card slides left and fades out, 300ms
3. Next card appears
```

**Auto-Save:**
```
"Saving..." appears bottom-right with spinner
After save:
Spinner → Checkmark (morph animation)
"Saved ✓" text fades in
Fades out after 2 seconds
```

**Loading Skeleton:**
```
Instead of spinners, show content skeleton:
┌─────────────────────────┐
│ ████████ ████           │
│ ████ ████████ ████      │
│ ████████ ████ ████████  │
│                         │
│ Shimmer animation →     │
└─────────────────────────┘
```

### 10.2 Transition Timings

```css
/* Fast: UI feedback */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);

/* Base: Most UI transitions */
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);

/* Slow: Page transitions */
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 11. Slack Integration (Notifications)

### 11.1 Notification Triggers

**Content Ready for Review:**
```slack
🔔 Content Ready for Review

12 items pending approval
Estimated time: 45 minutes

Podcast #47 - Sarah Nguyen (11 items)
Book Chapter 8 (1 item)

[Review Now] [Snooze 2 hours]
```

**Urgent: Posting Soon, Not Approved:**
```slack
⚠️ URGENT: Content Not Approved

You have 7 posts scheduled for tomorrow but haven't approved them yet.

Deadline: Tonight 11:59 PM
Time needed: ~30 minutes

[Review Now] [Postpone Publishing]
```

**Weekly Reminder (If Not Approved):**
```slack
📅 Weekly Reminder

It's Thursday and you haven't reviewed this week's content yet.

Pending: 12 items
Impact if not approved: No posts next week

[Review Now]
```

**Success Notification:**
```slack
✅ Content Published

Your LinkedIn post just went live!

"The 5 Stages of PLG Maturity"
Early signals: 23 likes in 10 minutes 🔥

[View Post]
```

### 11.2 Slack Commands

```
/content status - Check pending items
/content review - Open approval interface
/content schedule - View this week's calendar
/content stats - This week's performance
```

---

## 12. State Management

### 12.1 State Architecture

**Global State (Zustand):**
```typescript
interface AppState {
  user: User;
  pendingContent: ContentItem[];
  bundles: Bundle[];
  calendar: ScheduledItem[];
  filters: FilterState;
  ui: UIState;
}
```

**Local State (React):**
- Form inputs
- UI toggles (modals, dropdowns)
- Temporary editing state

**Server State (React Query):**
- Content fetching
- Auto-save mutations
- Publishing actions
- Analytics data

### 12.2 Data Flow

```
1. User opens approval interface
2. React Query fetches pending content
3. Content grouped into bundles (client-side)
4. User edits → Debounced auto-save (2s)
5. Auto-save mutation → Backend
6. Optimistic UI update (instant feedback)
7. User approves → Mutation → Backend
8. Update local state + refetch
```

---

## 13. Tech Stack

### 13.1 Framework & Build

```json
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript",
  "build": "Turbopack",
  "bundler": "Webpack 5",
  "deployment": "Vercel"
}
```

**Why Next.js:**
- Server-side rendering (fast initial load)
- API routes (backend integration)
- File-based routing
- Optimized builds
- Vercel deployment (fast, easy)

### 13.2 UI Libraries

```json
{
  "ui": "Shadcn/UI (Radix + Tailwind)",
  "styling": "Tailwind CSS",
  "icons": "Lucide React",
  "editor": "Tiptap (ProseMirror)",
  "animations": "Framer Motion",
  "charts": "Recharts"
}
```

### 13.3 State & Data

```json
{
  "state": "Zustand",
  "server-state": "TanStack Query (React Query)",
  "forms": "React Hook Form",
  "validation": "Zod"
}
```

### 13.4 Development Tools

```json
{
  "linting": "ESLint",
  "formatting": "Prettier",
  "testing": "Vitest + Testing Library",
  "e2e": "Playwright",
  "types": "TypeScript 5.3"
}
```

---

## 14. File Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (auth)/
│   │   │   └── login/page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── page.tsx         # Dashboard
│   │   │   ├── approve/page.tsx # Approval interface
│   │   │   └── calendar/page.tsx
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── ui/                 # Shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── content/
│   │   │   ├── ContentCard.tsx
│   │   │   ├── BundleSidebar.tsx
│   │   │   └── RichTextEditor.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   │
│   ├── lib/
│   │   ├── api.ts             # API client
│   │   ├── hooks/             # Custom hooks
│   │   └── utils.ts           # Utilities
│   │
│   ├── store/
│   │   └── useAppStore.ts     # Zustand store
│   │
│   └── styles/
│       └── globals.css         # Global styles + Tailwind
│
├── public/
│   └── fonts/                  # Inter font files
│
└── package.json
```

---

## 15. Development Phases

### Phase 1: Foundation (Week 1)
- [ ] Next.js setup + Tailwind config
- [ ] Design system tokens (colors, spacing, typography)
- [ ] Shadcn/UI installation + customization
- [ ] Basic routing (login, dashboard, approve)
- [ ] Dark mode implementation

### Phase 2: Core Components (Week 2)
- [ ] Content Card component
- [ ] Bundle Sidebar component
- [ ] Rich Text Editor (Tiptap)
- [ ] Button variants
- [ ] Auto-save functionality

### Phase 3: Approval Interface (Week 3)
- [ ] Main approval layout
- [ ] Bundle navigation
- [ ] Inline editing
- [ ] Approve/reject actions
- [ ] Keyboard shortcuts

### Phase 4: Dashboard & Calendar (Week 4)
- [ ] Dashboard layout
- [ ] Calendar view
- [ ] Analytics cards
- [ ] Empty states

### Phase 5: Polish & Testing (Week 5)
- [ ] Animations & micro-interactions
- [ ] Mobile responsive
- [ ] Accessibility testing
- [ ] Performance optimization
- [ ] E2E tests

---

## 16. Key User Flows (Detailed)

### Flow 1: First-Time Approval Session

```
1. User: Click "Start Review Session" on dashboard
   → Frontend: Navigate to /approve
   → Backend: Fetch pending content
   → Frontend: Display loading skeleton

2. Backend returns content
   → Frontend: Group into bundles (client-side)
   → Auto-open first bundle (Podcast #47)
   → Display first content card

3. User reads content card
   → See ICP score (87/100 ✅)
   → See predicted engagement (~150 likes)
   → See scheduled time (Thu 10:17 AM)

4. User clicks into content to edit
   → Cursor appears, content editable
   → Toolbar appears on text selection
   → User types changes

5. After 2 seconds of no typing
   → Auto-save triggered
   → "Saving..." indicator bottom-right
   → API mutation to backend
   → "Saved ✓" appears, fades out

6. User clicks "Approve ✓"
   → Checkmark animation
   → Card slides right, fades out
   → Next card slides in from bottom
   → Progress indicator updates (2/12)

7. Repeat steps 3-6 for all items

8. After last item approved
   → Success animation (confetti 🎉)
   → Summary screen:
     "✅ 12 items approved
      📅 Scheduled across Feb 17-23
      ⏱️  Time spent: 38 minutes
      🏆 New record! (prev: 42 min)"
   → [View Calendar] [Back to Dashboard]
```

### Flow 2: Bulk Approve Bundle

```
1. User: Click on "Podcast #47" bundle
   → Bundle expands
   → Shows all 11 items preview

2. User: Click "Approve All"
   → Modal appears:
     "Approve all 11 items?"
     • 2 pre-interview (Feb 15-16)
     • 7 LinkedIn (Feb 17-23)
     • 1 newsletter (Feb 20)
     • 1 blog (Feb 21)

3. User: Click "Yes, Approve All"
   → Progress indicator (1/11... 2/11...)
   → Each item gets checkmark
   → Bundle collapses
   → Success notification:
     "✅ 11 items scheduled"

4. Next bundle auto-opens
```

### Flow 3: Editing with AI Fix

```
1. User reading content
   → Spots awkward sentence:
     "This is the thing that you should do"

2. User: Select sentence
   → Inline toolbar appears
   → [B] [I] [U] [Link] [✨ AI Fix]

3. User: Click "✨ AI Fix"
   → Loading (150ms)
   → AI rewrites:
     ❌ "This is the thing that you should do"
     ✅ "Here's what you should do"
   → [Accept] [Reject]

4. User: Click "Accept"
   → Diff disappears
   → New text inserted
   → Auto-save triggered
   → "Saved ✓"
```

---

## 17. Design Deliverables

### Missy (Designer) to Create:

1. **Design System in Figma:**
   - Color palette (light + dark)
   - Typography scale
   - Spacing system
   - Component library

2. **Key Screens (Desktop):**
   - Login page
   - Dashboard
   - Approval interface (main view)
   - Content card (all states)
   - Calendar view

3. **Key Screens (Mobile):**
   - Dashboard (responsive)
   - Swipe card interface
   - Mobile navigation

4. **Component Variants:**
   - Buttons (all states)
   - Cards (all states)
   - Inputs, modals, etc.

5. **Animations:**
   - Approve animation storyboard
   - Reject animation storyboard
   - Auto-save indicator

6. **Icons & Illustrations:**
   - Empty states
   - Success/error icons
   - Loading states

---

## 18. Acceptance Criteria

### Must-Have (P1):
- [ ] Dark mode by default, light mode toggle
- [ ] Inline editing with auto-save (no "save" button)
- [ ] Content bundled by source (podcast episode)
- [ ] Approve/reject actions with animations
- [ ] ICP score + predictive metrics displayed
- [ ] Keyboard shortcuts working
- [ ] Mobile responsive (swipe gestures)
- [ ] Slack notifications (content ready, urgent)
- [ ] <2s page load time
- [ ] WCAG 2.1 AA compliant

### Nice-to-Have (P2):
- [ ] AI Fix button (inline rewriting)
- [ ] Weekly impact dashboard
- [ ] Gamification (streaks, time saved)
- [ ] Voice feedback (mobile)
- [ ] Offline support (service worker)

---

## 19. User Testing Plan

### Week 1-2: Internal Testing
- Wes tests approval workflow
- Team tests (Josh, Missy, Fernando)
- Collect feedback on UX

### Week 3-4: Refinement
- Fix bugs
- Adjust based on feedback
- Polish animations

### Week 5: Launch Prep
- Final testing
- Performance audit
- Accessibility audit
- Deploy to production

---

**Next Steps:**
1. Missy: Design mockups in Figma
2. Fernando: Set up Next.js project
3. Wes: Approve design direction
4. Build Phase 1 (Foundation) together

---

**Questions for Wes:**
1. Any specific design preferences (colors, fonts)?
2. Which screen should we design first?
3. Ready to start building this week?
