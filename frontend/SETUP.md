# Frontend Setup Guide

## Prerequisites

Before you can run this project, you need to install Node.js.

### Installing Node.js

1. **Download Node.js**
   - Go to [nodejs.org](https://nodejs.org/)
   - Download the LTS version (recommended)
   - Run the installer

2. **Verify Installation**
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers like `v20.x.x` and `10.x.x`

### Alternative Package Managers (Optional)

You can also use these faster alternatives:

- **pnpm** (recommended for speed):
  ```bash
  npm install -g pnpm
  ```

- **bun** (fastest, experimental):
  ```bash
  # Windows
  powershell -c "irm bun.sh/install.ps1|iex"
  ```

- **yarn**:
  ```bash
  npm install -g yarn
  ```

## Installation Steps

1. **Open Terminal in Frontend Directory**
   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   Using npm (default):
   ```bash
   npm install
   ```

   Or using pnpm (faster):
   ```bash
   pnpm install
   ```

   Or using bun (fastest):
   ```bash
   bun install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**

   Using npm:
   ```bash
   npm run dev
   ```

   Or using pnpm:
   ```bash
   pnpm dev
   ```

   Or using bun:
   ```bash
   bun dev
   ```

5. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see the Growth Super Agent homepage with dark mode

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart dev server
npm run dev
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## VS Code Setup (Recommended)

Install these extensions for the best development experience:

1. **ESLint** - Code quality
2. **Prettier** - Code formatting
3. **Tailwind CSS IntelliSense** - Tailwind class autocomplete
4. **TypeScript Error Translator** - Better error messages

## Next Steps

Once the development server is running:

1. Review the dark mode design system
2. Check out the example components in `/components/ui`
3. Start building the ContentCard component (Week 2)

## Week 1 Checklist ✓

- [x] Next.js 14 project setup
- [x] TypeScript configuration
- [x] Tailwind CSS with dark mode
- [x] Design system (colors, typography, spacing)
- [x] Base UI components (Button, Badge, Card)
- [x] Utility functions
- [x] Type definitions
- [x] Project documentation

## Need Help?

Contact the team:
- **Wes** - Product & Frontend
- **Fernando** - Full Stack Development
- **Missy** - Design System
