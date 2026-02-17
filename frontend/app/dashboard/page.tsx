"use client";

import { useState, useEffect } from "react";
import { BundleSidebar } from "@/components/content/BundleSidebar";
import { ContentCard } from "@/components/content/ContentCard";
import { KanbanBoard } from "@/components/content/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useContentStore } from "@/lib/store";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const { getFilteredContent, ui, setViewMode, autoSave } = useContentStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration errors by not rendering until mounted
  if (!mounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const filteredContent = getFilteredContent();

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <BundleSidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="mb-1">Content Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Review and approve AI-generated content
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Auto-save indicator */}
                {autoSave.isSaving && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Saving...
                  </div>
                )}
                {autoSave.lastSaved && !autoSave.isSaving && (
                  <div className="text-sm text-muted-foreground">
                    Saved {new Date(autoSave.lastSaved).toLocaleTimeString()}
                  </div>
                )}

                {/* View mode toggle */}
                <div className="flex gap-1 bg-background rounded-lg p-1">
                  <Button
                    variant={ui.viewMode === "kanban" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("kanban")}
                  >
                    Kanban
                  </Button>
                  <Button
                    variant={ui.viewMode === "list" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    List
                  </Button>
                  <Button
                    variant={ui.viewMode === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    Grid
                  </Button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredContent.length} content item
                {filteredContent.length !== 1 ? "s" : ""}
              </span>
              {filteredContent.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  Avg ICP:{" "}
                  {Math.round(
                    filteredContent.reduce((sum, item) => sum + item.icpScore.score, 0) /
                      filteredContent.length
                  )}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Content Views */}
        <div className={ui.viewMode === "kanban" ? "p-6 h-[calc(100vh-12rem)]" : "p-6"}>
          {filteredContent.length === 0 && ui.viewMode !== "kanban" ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="mb-2">No content found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or create new content
              </p>
            </div>
          ) : ui.viewMode === "kanban" ? (
            <KanbanBoard />
          ) : ui.viewMode === "grid" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredContent.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="space-y-4 max-w-4xl">
              {filteredContent.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
