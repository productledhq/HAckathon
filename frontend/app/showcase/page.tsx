import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1>Component Showcase</h1>
          <p className="text-muted-foreground">
            Preview of all UI components in the design system
          </p>
        </div>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>
              Font styles and hierarchy using Inter font family
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <small className="text-muted-foreground">Hero (32px / 40px / 600)</small>
              <h1>Growth Super Agent</h1>
            </div>
            <div>
              <small className="text-muted-foreground">Heading (24px / 32px / 600)</small>
              <h2>Content Dashboard</h2>
            </div>
            <div>
              <small className="text-muted-foreground">Subheading (18px / 26px / 600)</small>
              <h3>Pending Approval</h3>
            </div>
            <div>
              <small className="text-muted-foreground">Body (14px / 21px / 400)</small>
              <p>
                This is body text. ProductLed helps B2B SaaS companies grow
                through product-led strategies.
              </p>
            </div>
            <div>
              <small className="text-muted-foreground">Caption (12px / 18px / 400)</small>
              <small>Last edited 2 minutes ago</small>
            </div>
          </CardContent>
        </Card>

        {/* Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
            <CardDescription>Dark mode color system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-background border border-border flex items-center justify-center">
                  <small>Background</small>
                </div>
                <small className="text-muted-foreground">#1A1A1A</small>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-card border border-border flex items-center justify-center">
                  <small>Card</small>
                </div>
                <small className="text-muted-foreground">#202020</small>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-primary flex items-center justify-center">
                  <small className="text-primary-foreground font-medium">
                    Primary
                  </small>
                </div>
                <small className="text-muted-foreground">#3B82F6</small>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-lg bg-muted flex items-center justify-center">
                  <small>Muted</small>
                </div>
                <small className="text-muted-foreground">#262626</small>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>All button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Variants */}
            <div className="space-y-3">
              <h4>Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <h4>Sizes</h4>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">📝</Button>
              </div>
            </div>

            {/* States */}
            <div className="space-y-3">
              <h4>States</h4>
              <div className="flex flex-wrap gap-2">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Default Variants */}
            <div className="space-y-3">
              <h4>Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            {/* Content Status */}
            <div className="space-y-3">
              <h4>Content Status</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="status-draft">Draft</Badge>
                <Badge className="status-pending">Pending Approval</Badge>
                <Badge className="status-approved">Approved</Badge>
                <Badge className="status-scheduled">Scheduled</Badge>
                <Badge className="status-published">Published</Badge>
              </div>
            </div>

            {/* ICP Scores */}
            <div className="space-y-3">
              <h4>ICP Scores</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="icp-high">ICP: 85</Badge>
                <Badge className="icp-medium">ICP: 55</Badge>
                <Badge className="icp-low">ICP: 25</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>Content containers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is a card with header, content, and footer.</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                  <Button size="sm">Approve</Button>
                </CardFooter>
              </Card>

              <Card className="hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>Hover to see effect</CardDescription>
                    </div>
                    <Badge className="icp-high">ICP: 92</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    This card has a hover effect and shows how cards might look
                    in the content approval flow.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📅 Feb 17, 2026</span>
                    <span>•</span>
                    <span>LinkedIn Post</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Spacing */}
        <Card>
          <CardHeader>
            <CardTitle>Spacing System</CardTitle>
            <CardDescription>4px base spacing scale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <small className="text-muted-foreground">XS (4px)</small>
              <div className="h-1 w-1 bg-primary rounded"></div>
            </div>
            <div className="space-y-1">
              <small className="text-muted-foreground">SM (8px)</small>
              <div className="h-2 w-2 bg-primary rounded"></div>
            </div>
            <div className="space-y-1">
              <small className="text-muted-foreground">MD (16px)</small>
              <div className="h-4 w-4 bg-primary rounded"></div>
            </div>
            <div className="space-y-1">
              <small className="text-muted-foreground">LG (24px)</small>
              <div className="h-6 w-6 bg-primary rounded"></div>
            </div>
            <div className="space-y-1">
              <small className="text-muted-foreground">XL (32px)</small>
              <div className="h-8 w-8 bg-primary rounded"></div>
            </div>
            <div className="space-y-1">
              <small className="text-muted-foreground">2XL (48px)</small>
              <div className="h-12 w-12 bg-primary rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
