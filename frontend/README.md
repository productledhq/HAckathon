# Growth Super Agent - Frontend

AI-powered marketing automation system for ProductLed. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌙 **Dark Mode by Default** - Optimized for long editing sessions
- ⚡ **Auto-Save** - No save buttons, content saves every 2 seconds
- ✨ **AI-Powered** - Content generation and quality validation
- 📱 **Mobile-First** - Swipe gestures for quick approvals
- 🎨 **Notion-Inspired UX** - Clean, distraction-free interface

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn/UI + Radix UI
- **Rich Text**: Tiptap
- **Animations**: Framer Motion
- **State**: Zustand
- **Data Fetching**: TanStack Query (React Query)

## Design System

### Colors (Dark Mode)
- Background: `#1A1A1A`
- Foreground: `#F7F7F7`
- Card: `#202020`
- Accent: `#3B82F6` (Blue)
- Muted: `#262626`

### Typography
- Font: Inter
- Hero: 32px / 40px / 600
- Heading: 24px / 32px / 600
- Subheading: 18px / 26px / 600
- Body: 14px / 21px / 400
- Caption: 12px / 18px / 400

### Spacing (4px base)
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Reusable UI components (Shadcn)
│   ├── content/           # Content-specific components
│   └── layout/            # Layout components
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Key Components

### UI Components (Shadcn/UI)
- **Button** - Primary, secondary, outline, ghost variants
- **Badge** - Status indicators with ICP scores
- **Card** - Content containers
- **Dialog** - Modals and overlays
- **Toast** - Notifications

### Content Components (Coming Soon)
- **ContentCard** - Individual content item with ICP score
- **BundleSidebar** - Navigation by podcast episode
- **RichTextEditor** - Tiptap-based editor with auto-save
- **ApprovalFlow** - Approve/reject/edit workflow

## Features Roadmap

### Week 1 (Current) ✓
- [x] Project setup
- [x] Design system
- [x] Dark mode configuration
- [x] Base UI components

### Week 2
- [ ] ContentCard component
- [ ] BundleSidebar navigation
- [ ] State management (Zustand)
- [ ] Mock data and API types

### Week 3
- [ ] Rich text editor (Tiptap)
- [ ] Auto-save functionality
- [ ] Inline editing toolbar
- [ ] AI Fix button

### Week 4
- [ ] Approval workflow
- [ ] Calendar view
- [ ] Animations (Framer Motion)
- [ ] Keyboard shortcuts

### Week 5
- [ ] Dashboard analytics
- [ ] Mobile responsive
- [ ] Swipe gestures
- [ ] Performance optimization

## Contributing

This is an internal ProductLed project. For questions, contact:
- **Frontend Lead**: Wes & Fernando
- **Design**: Missy
- **Backend**: Fernando

## License

Proprietary - ProductLed © 2026
