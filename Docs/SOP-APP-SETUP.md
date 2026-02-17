# SOP: Frontend App Setup & GitHub Deployment

**Purpose:** Rapid setup of frontend mockups/prototypes from concept to GitHub deployment
**Time:** 2-3 hours (optimized), 4-6 hours (first time)
**Last Updated:** Feb 17, 2025

---

## Prerequisites Checklist

Before starting, verify you have:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] Git installed and configured (`git --version`)
- [ ] GitHub account with repository access
- [ ] Code editor (VS Code recommended)
- [ ] Terminal/Command Prompt access
- [ ] Design requirements or PRD document
- [ ] Brand colors, fonts, and design system basics

---

## Quick Start (30-Minute Path)

**Use when:** You need a working prototype FAST for stakeholder review.

### Phase 1: Project Setup (5 min)

```bash
# 1. Create project directory
mkdir your-project-name
cd your-project-name

# 2. Initialize Git
git init

# 3. Create folder structure
mkdir -p frontend/mockups
mkdir -p Docs
mkdir -p .claude
```

### Phase 2: Design System (10 min)

Create `frontend/mockups/design-system.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design System</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /* Colors */
            --bg-primary: #1A1A1A;
            --bg-secondary: #202020;
            --bg-tertiary: #2A2A2A;
            --text-primary: #F7F7F7;
            --text-secondary: #AAA;
            --text-tertiary: #888;
            --accent-primary: #3B82F6;
            --accent-hover: #60A5FA;

            /* Spacing */
            --space-xs: 4px;
            --space-sm: 8px;
            --space-md: 16px;
            --space-lg: 24px;
            --space-xl: 32px;
            --space-2xl: 48px;

            /* Border Radius */
            --radius-sm: 6px;
            --radius-md: 12px;
            --radius-lg: 16px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
        }

        /* Add your component styles here */
    </style>
</head>
<body>
    <h1>Your Design System</h1>
</body>
</html>
```

**Time saver:** Copy this template, update CSS variables with your brand colors.

### Phase 3: Build Main Mockup (10 min)

Create your primary view (dashboard, landing page, etc.) using the design system.

**Template location:** Use `frontend/mockups/dashboard-calendar.html` from this repo as reference.

### Phase 4: Git & GitHub (5 min)

```bash
# 1. Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
.next/
.env*.local
.DS_Store
*.log
EOF

# 2. Create .gitattributes (fixes line endings)
cat > .gitattributes << 'EOF'
* text=auto
*.js text eol=lf
*.ts text eol=lf
*.html text eol=lf
*.css text eol=lf
*.md text eol=lf
EOF

# 3. Stage and commit
git add .
git commit -m "Initial mockup"

# 4. Push to GitHub (create repo on GitHub first)
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

---

## Full Production Setup (2-3 Hours)

### Part 1: Project Foundation (30 min)

#### 1.1 Create Project Structure
```bash
mkdir your-project-name && cd your-project-name
mkdir -p frontend/{mockups,app,components,lib}
mkdir -p Docs
mkdir -p .claude

# Verify structure
tree -L 2  # or 'ls -R' on Windows
```

**Checklist:**
- [ ] Project folder created
- [ ] Frontend structure in place
- [ ] Docs folder created
- [ ] .claude folder for AI context

#### 1.2 Initialize Git
```bash
git init
git branch -M main
```

- [ ] Git initialized
- [ ] Main branch created

#### 1.3 Create Documentation Files

**Required docs:**
- [ ] `Docs/PRD.md` - Product requirements
- [ ] `Docs/DESIGN_SYSTEM.md` - Colors, fonts, spacing
- [ ] `Docs/BUILD_PLAN.md` - Week-by-week plan

**Template: `Docs/PRD.md`**
```markdown
# Product Requirements Document

## Overview
[What are we building and why?]

## User Personas
- Primary: [Who is this for?]
- Secondary: [Who else might use it?]

## Core Features
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

## Out of Scope (v1)
- [What we're NOT building]

## Success Metrics
- [How do we measure success?]
```

Time: 15-20 min

---

### Part 2: Design System (45 min)

#### 2.1 Define Design Tokens

Create `frontend/mockups/design-system.html`:

**Must include:**
- [ ] Color palette (background, text, accent)
- [ ] Typography scale (font sizes, weights)
- [ ] Spacing system (4px base)
- [ ] Border radius values
- [ ] Component examples (buttons, cards, badges)

**Time saver:** Copy from `frontend/mockups/design-system.html` in this repo and customize.

#### 2.2 Create Component Library

**Essential components:**
- [ ] Button (primary, secondary, ghost variants)
- [ ] Card (container for content)
- [ ] Badge (status indicators, scores)
- [ ] Input fields
- [ ] Modal/Dialog

Time: 30 min

#### 2.3 Create Index Page

Create `frontend/mockups/index.html` as a navigation hub linking to all mockups.

- [ ] Index page with links to all views
- [ ] Clean navigation
- [ ] Project description

Time: 15 min

---

### Part 3: Build Core Mockups (60-90 min)

#### 3.1 Primary Dashboard View

**What to build:**
- [ ] Main workflow view (Kanban, Calendar, List, etc.)
- [ ] Key metrics/stats
- [ ] Primary actions (CTAs)
- [ ] Navigation

**For this project, we built:**
- Dashboard with calendar view
- Upcoming content (next 7 days)
- Drag-and-drop scheduling
- Content editor panel

Time: 45-60 min

#### 3.2 Settings/Configuration Page

- [ ] User settings or system configuration
- [ ] Form inputs
- [ ] Save/cancel actions

**For this project:**
- AI training settings
- File management interface
- Voice guide uploads

Time: 30-45 min

#### 3.3 Additional Views (Optional)

Based on PRD, create:
- [ ] List view alternative
- [ ] Detail/edit views
- [ ] Component showcase (all states)

Time: 30 min each

---

### Part 4: Interactive Features (30-45 min)

#### 4.1 Add JavaScript Functionality

**Common patterns:**
- [ ] Modal open/close
- [ ] Tab switching
- [ ] Form validation
- [ ] Drag-and-drop (if needed)
- [ ] Local state management

**Example: Modal Pattern**
```javascript
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
```

#### 4.2 Add Sample Data

- [ ] Realistic content (use actual voice/tone)
- [ ] Multiple states (empty, loading, success, error)
- [ ] Edge cases (long text, no data, etc.)

**For this project:**
Used Wes Bush writing samples for realistic content.

Time: 15-20 min

---

### Part 5: Git Configuration & Deployment (20 min)

#### 5.1 Create .gitignore

```bash
cat > .gitignore << 'EOF'
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*

# Next.js (if using React)
.next/
out/
*.tsbuildinfo
next-env.d.ts

# Environment variables
.env
.env.local
.env*.local

# Build outputs
dist/
build/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Misc
*.log
.cache/
EOF
```

- [ ] .gitignore created
- [ ] Covers all build artifacts

#### 5.2 Create .gitattributes (Critical!)

```bash
cat > .gitattributes << 'EOF'
* text=auto
*.js text eol=lf
*.ts text eol=lf
*.tsx text eol=lf
*.json text eol=lf
*.md text eol=lf
*.html text eol=lf
*.css text eol=lf
*.sh text eol=lf
EOF
```

**Why:** Prevents LF/CRLF warnings on Windows. Forces Unix line endings in repo.

- [ ] .gitattributes created
- [ ] Line ending issues prevented

#### 5.3 Initial Commit

```bash
# Stage config files first
git add .gitignore .gitattributes

# Stage all project files
git add .

# Verify what's being committed (should be ~30-50 files, NOT thousands)
git status

# Commit
git commit -m "Initial commit: Frontend mockups and documentation

- Interactive [main feature] dashboard
- [Feature 2] settings page
- Complete design system
- Comprehensive documentation

Built for [Project Name] v1.0"
```

**Verification:**
- [ ] Only source files committed (no node_modules, .next)
- [ ] Commit message is descriptive
- [ ] No LF/CRLF warnings

#### 5.4 Push to GitHub

```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

**If authentication needed:**
- Browser window will open for GitHub sign-in
- Or use Personal Access Token

**Verification:**
- [ ] Repository appears on GitHub
- [ ] All files visible
- [ ] Mockups render correctly (check raw HTML URLs)

---

## Speed Optimization Tips

### Do This (Fast):
✅ Start with HTML mockups (not React) for rapid prototyping
✅ Copy working design system template
✅ Use CSS variables for theming
✅ Build one view well, then duplicate
✅ Create .gitattributes FIRST (prevents issues)
✅ Use realistic sample data from the start

### Don't Do This (Slow):
❌ Start with React/Next.js setup (adds 30-60 min complexity)
❌ Try to make Tailwind work if it's not compiling
❌ Build custom components from scratch
❌ Perfect every detail before user feedback
❌ Skip .gitattributes (you'll fight Git later)
❌ Use Lorem Ipsum (use real voice/tone)

---

## Common Pitfalls & Fixes

### Issue 1: Tailwind CSS Not Working in React
**Symptom:** Styles don't load, white screen
**Fix:** Skip it. Use HTML + CSS for mockups. Add Tailwind later.
**Time saved:** 60 min

### Issue 2: Git LF/CRLF Warnings
**Symptom:** "warning: LF will be replaced by CRLF"
**Fix:** Create `.gitattributes` with `* text=auto` and `*.js text eol=lf`
**Time saved:** 20 min of confusion

### Issue 3: Committing 20,000+ Build Files
**Symptom:** `git add .` takes forever, huge commit size
**Fix:** Create `.gitignore` BEFORE first commit, exclude `.next/`, `node_modules/`
**Time saved:** 30 min + cleaner repo

### Issue 4: Can't Push to GitHub
**Symptom:** Push hangs or fails silently
**Fix:** Run `git push` manually in terminal (outside Claude Code) for authentication
**Time saved:** 15 min of troubleshooting

### Issue 5: Design Inconsistency
**Symptom:** Colors, spacing, fonts different across pages
**Fix:** Define CSS variables in design system, use everywhere
**Time saved:** 45 min of rework

---

## Templates & Reusable Code

### Template 1: Design System Boilerplate

**File:** `frontend/mockups/_design-system-template.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design System</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /* Dark Mode Palette */
            --bg-primary: #1A1A1A;
            --bg-secondary: #202020;
            --bg-tertiary: #2A2A2A;
            --text-primary: #F7F7F7;
            --text-secondary: #AAA;
            --text-tertiary: #888;
            --accent-primary: #3B82F6;
            --accent-hover: #60A5FA;
            --border: #2A2A2A;

            /* Spacing (4px base) */
            --space-1: 4px;
            --space-2: 8px;
            --space-3: 12px;
            --space-4: 16px;
            --space-6: 24px;
            --space-8: 32px;
            --space-12: 48px;

            /* Typography */
            --font-xs: 11px;
            --font-sm: 13px;
            --font-base: 14px;
            --font-lg: 16px;
            --font-xl: 20px;
            --font-2xl: 24px;
            --font-3xl: 32px;

            /* Border Radius */
            --radius-sm: 6px;
            --radius-md: 12px;
            --radius-lg: 16px;

            /* Shadows */
            --shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
            --shadow-md: 0 4px 6px rgba(0,0,0,0.2);
            --shadow-lg: 0 10px 15px rgba(0,0,0,0.3);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            font-size: var(--font-base);
        }

        /* Buttons */
        .btn {
            padding: var(--space-2) var(--space-4);
            border-radius: var(--radius-sm);
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
            font-size: var(--font-sm);
        }

        .btn-primary {
            background: var(--accent-primary);
            color: white;
        }

        .btn-primary:hover {
            background: var(--accent-hover);
        }

        /* Cards */
        .card {
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            padding: var(--space-6);
        }

        /* Badges */
        .badge {
            display: inline-block;
            padding: var(--space-1) var(--space-2);
            background: var(--bg-tertiary);
            border-radius: var(--radius-sm);
            font-size: var(--font-xs);
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div style="padding: var(--space-12); max-width: 1200px; margin: 0 auto;">
        <h1>Design System</h1>

        <section style="margin-top: var(--space-8);">
            <h2>Colors</h2>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); margin-top: var(--space-4);">
                <div style="background: var(--bg-primary); padding: var(--space-6); border-radius: var(--radius-md); border: 1px solid var(--border);">
                    BG Primary
                </div>
                <div style="background: var(--accent-primary); padding: var(--space-6); border-radius: var(--radius-md);">
                    Accent
                </div>
            </div>
        </section>

        <section style="margin-top: var(--space-8);">
            <h2>Components</h2>
            <div style="display: flex; gap: var(--space-4); margin-top: var(--space-4);">
                <button class="btn btn-primary">Primary Button</button>
                <span class="badge">Badge</span>
            </div>
        </section>
    </div>
</body>
</html>
```

**Time saved:** 30 min per project

---

### Template 2: Modal Pattern

```javascript
// Reusable Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close on background click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
```

**Modal CSS:**
```css
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: var(--bg-secondary);
    border-radius: var(--radius-md);
    padding: var(--space-8);
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}
```

**Time saved:** 15 min per modal

---

### Template 3: Drag-and-Drop Calendar

```javascript
// Drag and Drop Implementation
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.style.opacity = '0.5';
}

function handleDragEnd(e) {
    e.target.style.opacity = '1';
}

function handleDragOver(e) {
    e.preventDefault(); // Allow drop
    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
}

function handleDragLeave(e) {
    e.currentTarget.style.background = '';
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.style.background = '';

    if (draggedElement) {
        // Update the date
        const newDate = e.currentTarget.dataset.date;
        console.log('Moved to:', newDate);

        // Add visual feedback
        e.currentTarget.appendChild(draggedElement.cloneNode(true));
        draggedElement.remove();
    }
}
```

**Time saved:** 45 min of figuring out drag-and-drop

---

## Time Estimates by Phase

| Phase | First Time | Optimized |
|-------|-----------|-----------|
| Project setup | 20 min | 5 min |
| Design system | 60 min | 15 min |
| Primary mockup | 90 min | 30 min |
| Additional views | 45 min each | 20 min each |
| Interactive features | 60 min | 20 min |
| Git & deployment | 30 min | 10 min |
| **Total (3 views)** | **4-5 hours** | **2 hours** |

---

## Verification Checklist

Before calling it done:

### Design
- [ ] All mockups use consistent design system
- [ ] Colors, fonts, spacing match design tokens
- [ ] Buttons have hover states
- [ ] Interactive elements work (modals, dropdowns, etc.)
- [ ] Mobile responsive (test at 375px, 768px, 1440px)

### Content
- [ ] Realistic sample data (not Lorem Ipsum)
- [ ] Multiple states shown (empty, loading, success, error)
- [ ] Edge cases handled (long text, no data)

### Code Quality
- [ ] No console errors
- [ ] JavaScript functions work
- [ ] CSS is organized and commented
- [ ] Reusable patterns extracted

### Git & GitHub
- [ ] .gitignore excludes build artifacts
- [ ] .gitattributes handles line endings
- [ ] No LF/CRLF warnings
- [ ] Only ~30-50 source files committed (not thousands)
- [ ] Pushed to GitHub successfully
- [ ] Files visible on GitHub

### Documentation
- [ ] README.md explains project
- [ ] PRD or requirements doc exists
- [ ] Design system documented
- [ ] Build plan or next steps clear

---

## Next Time: Start Here

**Copy this checklist for your next project:**

1. [ ] Create folders: `project/frontend/mockups`, `project/Docs`
2. [ ] Copy design system template
3. [ ] Create .gitignore and .gitattributes FIRST
4. [ ] Build primary view using template
5. [ ] Add interactivity (modals, tabs, etc.)
6. [ ] Create 2-3 additional views
7. [ ] Write PRD and documentation
8. [ ] Git commit and push to GitHub
9. [ ] Share with team for feedback

**Total time: 2 hours (optimized)**

---

## Reference Files from This Project

Use these as templates for future projects:

- `frontend/mockups/design-system.html` - Full design system
- `frontend/mockups/dashboard-calendar.html` - Interactive dashboard with drag-and-drop
- `frontend/mockups/settings.html` - Complex settings page with file management
- `frontend/mockups/index.html` - Landing page navigation
- `.gitignore` - Proper exclusions
- `.gitattributes` - Line ending config

---

**Last updated:** Feb 17, 2025
**Maintained by:** Wes Bush
**Questions?** Reference this repo or reach out.
