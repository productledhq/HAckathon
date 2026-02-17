import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-foreground">Growth Super Agent</h1>
        <p className="text-muted-foreground">
          AI-powered marketing automation for ProductLed
        </p>

        <div className="flex gap-3 justify-center mt-8">
          <Link href="/dashboard">
            <Button size="lg">
              Open Dashboard →
            </Button>
          </Link>
          <Link href="/showcase">
            <Button variant="outline" size="lg">
              View Components
            </Button>
          </Link>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          <div className="px-3 py-1.5 rounded-md bg-card border border-border">
            <small className="text-muted-foreground">Dark Mode ✓</small>
          </div>
          <div className="px-3 py-1.5 rounded-md bg-card border border-border">
            <small className="text-muted-foreground">Next.js 14 ✓</small>
          </div>
          <div className="px-3 py-1.5 rounded-md bg-card border border-border">
            <small className="text-muted-foreground">TypeScript ✓</small>
          </div>
        </div>
      </div>
    </main>
  );
}
