"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Growth Super Agent</h1>
          <p className="text-xl text-muted-foreground">Design System</p>
          <p className="text-sm text-muted-foreground max-w-2xl">
            A comprehensive design system for ProductLed's AI-powered marketing
            automation tool. Built for clarity, consistency, and efficiency.
          </p>
        </header>

        {/* Colors */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Colors</h2>
            <p className="text-sm text-muted-foreground">
              Dark mode color palette optimized for extended use and visual hierarchy
            </p>
          </div>

          <div className="space-y-8">
            {/* Base Colors */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Base Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch
                  name="Background"
                  hex="#1A1A1A"
                  usage="Main app background"
                  textColor="white"
                />
                <ColorSwatch
                  name="Card"
                  hex="#202020"
                  usage="Cards, sidebar, elevated surfaces"
                  textColor="white"
                />
                <ColorSwatch
                  name="Border"
                  hex="#2A2A2A"
                  usage="Borders, dividers, separators"
                  textColor="white"
                />
                <ColorSwatch
                  name="Muted Background"
                  hex="#252525"
                  usage="Hover states, subtle highlights"
                  textColor="white"
                />
                <ColorSwatch
                  name="Foreground"
                  hex="#F7F7F7"
                  usage="Primary text, headings"
                  textColor="black"
                />
                <ColorSwatch
                  name="Muted Foreground"
                  hex="#888888"
                  usage="Secondary text, metadata"
                  textColor="white"
                />
              </div>
            </div>

            {/* Brand Colors */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch
                  name="Primary"
                  hex="#3B82F6"
                  usage="Primary actions, links, focus states"
                  textColor="white"
                />
                <ColorSwatch
                  name="Primary Hover"
                  hex="#2563EB"
                  usage="Hover state for primary actions"
                  textColor="white"
                />
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch
                  name="Success"
                  hex="#22C55E"
                  usage="Approved, published, high ICP scores"
                  textColor="white"
                />
                <ColorSwatch
                  name="Warning"
                  hex="#EAB308"
                  usage="Pending, caution, medium ICP scores"
                  textColor="black"
                />
                <ColorSwatch
                  name="Danger"
                  hex="#EF4444"
                  usage="Rejected, errors, low ICP scores"
                  textColor="white"
                />
                <ColorSwatch
                  name="Info"
                  hex="#60A5FA"
                  usage="In progress, informational states"
                  textColor="white"
                />
                <ColorSwatch
                  name="Purple"
                  hex="#A855F7"
                  usage="Scheduled status, special highlights"
                  textColor="white"
                />
                <ColorSwatch
                  name="Gray"
                  hex="#9CA3AF"
                  usage="Draft status, disabled states"
                  textColor="white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Typography</h2>
            <p className="text-sm text-muted-foreground">
              Inter font family for optimal readability and modern aesthetics
            </p>
          </div>

          <div className="space-y-4">
            <TypeExample
              level="h1"
              text="The quick brown fox jumps"
              className="text-4xl font-bold"
              details="4xl / Bold / 36px"
            />
            <TypeExample
              level="h2"
              text="The quick brown fox jumps"
              className="text-3xl font-bold"
              details="3xl / Bold / 30px"
            />
            <TypeExample
              level="h3"
              text="The quick brown fox jumps"
              className="text-2xl font-bold"
              details="2xl / Bold / 24px"
            />
            <TypeExample
              level="h4"
              text="The quick brown fox jumps"
              className="text-xl font-semibold"
              details="xl / Semibold / 20px"
            />
            <TypeExample
              level="h5"
              text="The quick brown fox jumps"
              className="text-lg font-semibold"
              details="lg / Semibold / 18px"
            />
            <TypeExample
              level="p"
              text="The quick brown fox jumps over the lazy dog. This is body text used for main content, descriptions, and longer form text."
              className="text-base"
              details="base / Regular / 16px"
            />
            <TypeExample
              level="small"
              text="The quick brown fox jumps over the lazy dog. This is small text used for metadata, captions, and secondary information."
              className="text-sm text-muted-foreground"
              details="sm / Regular / 14px / Muted"
            />
            <TypeExample
              level="xs"
              text="The quick brown fox jumps over the lazy dog. This is extra small text used for labels and fine print."
              className="text-xs text-muted-foreground"
              details="xs / Regular / 12px / Muted"
            />
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Spacing</h2>
            <p className="text-sm text-muted-foreground">
              4px base unit for consistent spacing throughout the application
            </p>
          </div>

          <div className="space-y-4">
            <SpacingExample size={1} px={4} />
            <SpacingExample size={2} px={8} />
            <SpacingExample size={3} px={12} />
            <SpacingExample size={4} px={16} />
            <SpacingExample size={6} px={24} />
            <SpacingExample size={8} px={32} />
            <SpacingExample size={12} px={48} />
            <SpacingExample size={16} px={64} />
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Buttons</h2>
            <p className="text-sm text-muted-foreground">
              Interactive elements for user actions
            </p>
          </div>

          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-semibold mb-4">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Badges</h2>
            <p className="text-sm text-muted-foreground">
              Status indicators and labels
            </p>
          </div>

          <div className="space-y-6">
            {/* Status Badges */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Status Badges</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gray-500/20 text-gray-400">Idea</Badge>
                <Badge className="bg-blue-500/20 text-blue-400">In Progress</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-400">
                  Ready for Review
                </Badge>
                <Badge className="bg-green-500/20 text-green-400">Approved</Badge>
                <Badge className="bg-purple-500/20 text-purple-400">Scheduled</Badge>
                <Badge className="bg-green-500/20 text-green-400">Published</Badge>
                <Badge className="bg-red-500/20 text-red-400">Rejected</Badge>
              </div>
            </div>

            {/* ICP Score Badges */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ICP Score Badges</h3>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">High (85+)</div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500/20 text-green-400 font-bold">95</Badge>
                    <Badge className="bg-green-500/20 text-green-400 font-bold">92</Badge>
                    <Badge className="bg-green-500/20 text-green-400 font-bold">88</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Medium (60-84)</div>
                  <div className="flex gap-2">
                    <Badge className="bg-yellow-500/20 text-yellow-400 font-bold">78</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 font-bold">72</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 font-bold">65</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Low (&lt; 60)</div>
                  <div className="flex gap-2">
                    <Badge className="bg-red-500/20 text-red-400 font-bold">45</Badge>
                    <Badge className="bg-red-500/20 text-red-400 font-bold">28</Badge>
                    <Badge className="bg-red-500/20 text-red-400 font-bold">23</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Badge Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Cards</h2>
            <p className="text-sm text-muted-foreground">
              Container components for organizing content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a basic card with a header and content area. Used for
                  grouping related information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>Highlighted Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards can be highlighted with colored borders to draw attention
                  or indicate selection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Transparent Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards with transparency and backdrop blur for layered UI
                  elements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Border Radius */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Border Radius</h2>
            <p className="text-sm text-muted-foreground">
              Consistent rounded corners for visual harmony
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <RadiusExample radius="sm" px={2} />
            <RadiusExample radius="md" px={6} />
            <RadiusExample radius="lg" px={8} />
            <RadiusExample radius="xl" px={12} />
          </div>
        </section>

        {/* Shadow */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Shadows</h2>
            <p className="text-sm text-muted-foreground">
              Elevation and depth through subtle shadows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ShadowExample level="sm" />
            <ShadowExample level="md" />
            <ShadowExample level="lg" />
            <ShadowExample level="xl" />
          </div>
        </section>

        {/* Design Principles */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Design Principles</h2>
            <p className="text-sm text-muted-foreground">
              Core principles guiding the Growth Super Agent design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎯 Clarity First</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Every element should have a clear purpose. Remove ambiguity through
                  consistent patterns and obvious visual hierarchy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">⚡ Speed & Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Minimize clicks and cognitive load. Users should accomplish tasks
                  with minimal friction and maximum confidence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎨 Visual Hierarchy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Use size, color, and spacing to guide attention. Most important
                  information should be immediately obvious.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🔄 Consistency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Similar elements should look and behave similarly. Patterns learned
                  once should apply everywhere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🌙 Dark Mode Native</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Designed for extended use. Reduced eye strain with carefully
                  calibrated contrast and brightness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📊 Data Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Show the why behind AI decisions. ICP scores, voice issues, and
                  suggestions should be immediately visible.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper Components

function ColorSwatch({
  name,
  hex,
  usage,
  textColor,
}: {
  name: string;
  hex: string;
  usage: string;
  textColor: "white" | "black";
}) {
  return (
    <div className="space-y-2">
      <div
        className="h-24 rounded-lg border border-border flex items-center justify-center font-mono text-sm"
        style={{ backgroundColor: hex, color: textColor }}
      >
        {hex}
      </div>
      <div>
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-muted-foreground">{usage}</div>
      </div>
    </div>
  );
}

function TypeExample({
  level,
  text,
  className,
  details,
}: {
  level: string;
  text: string;
  className: string;
  details: string;
}) {
  return (
    <div className="border-b border-border pb-4">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-xs text-muted-foreground font-mono">{level}</span>
        <span className="text-xs text-muted-foreground">{details}</span>
      </div>
      <div className={className}>{text}</div>
    </div>
  );
}

function SpacingExample({ size, px }: { size: number; px: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-32 text-sm font-mono text-muted-foreground">
        {size} ({px}px)
      </div>
      <div
        className="h-8 bg-primary rounded"
        style={{ width: `${px * 2}px` }}
      ></div>
    </div>
  );
}

function RadiusExample({ radius, px }: { radius: string; px: number }) {
  return (
    <div className="space-y-2">
      <div
        className="h-24 bg-card border border-border"
        style={{ borderRadius: `${px}px` }}
      ></div>
      <div className="text-center">
        <div className="font-semibold text-sm">{radius}</div>
        <div className="text-xs text-muted-foreground">{px}px</div>
      </div>
    </div>
  );
}

function ShadowExample({ level }: { level: string }) {
  const shadows = {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  };

  return (
    <div className="space-y-2">
      <div
        className="h-24 bg-card rounded-lg"
        style={{ boxShadow: shadows[level as keyof typeof shadows] }}
      ></div>
      <div className="text-center">
        <div className="font-semibold text-sm">shadow-{level}</div>
      </div>
    </div>
  );
}
