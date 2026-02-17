"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useContentStore } from "@/lib/store";
import { mockBundles, mockDashboardStats } from "@/lib/mock-data";
import { ContentStatus } from "@/lib/types";

export function BundleSidebar() {
  const { filters, setFilter, clearFilters, ui, toggleSidebar } = useContentStore();
  const [expandedBundles, setExpandedBundles] = useState<string[]>([
    "source-1",
    "source-2",
  ]);

  const toggleBundle = (sourceId: string) => {
    setExpandedBundles((prev) =>
      prev.includes(sourceId)
        ? prev.filter((id) => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const handleBundleClick = (sourceId: string) => {
    if (filters.sourceId === sourceId) {
      clearFilters();
    } else {
      setFilter({ sourceId });
    }
  };

  const handleStatusFilter = (status: ContentStatus) => {
    if (filters.status === status) {
      setFilter({ status: undefined });
    } else {
      setFilter({ status });
    }
  };

  if (!ui.sidebarOpen) {
    return (
      <div className="w-12 border-r border-border bg-card p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="w-full"
        >
          →
        </Button>
      </div>
    );
  }

  return (
    <aside className="w-80 border-r border-border bg-card overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Content Library</h2>
          <Button variant="ghost" size="sm" onClick={toggleSidebar}>
            ←
          </Button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="p-2 bg-background rounded">
            <div className="text-muted-foreground text-xs">Total</div>
            <div className="font-semibold">{mockDashboardStats.totalContent}</div>
          </div>
          <div className="p-2 bg-background rounded">
            <div className="text-muted-foreground text-xs">Pending</div>
            <div className="font-semibold text-yellow-400">
              {mockDashboardStats.pendingApproval}
            </div>
          </div>
          <div className="p-2 bg-background rounded">
            <div className="text-muted-foreground text-xs">Avg ICP</div>
            <div className="font-semibold text-blue-400">
              {mockDashboardStats.avgIcpScore}
            </div>
          </div>
          <div className="p-2 bg-background rounded">
            <div className="text-muted-foreground text-xs">Time Saved</div>
            <div className="font-semibold text-green-400">
              {Math.floor(mockDashboardStats.timeSaved / 60)}h
            </div>
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <div className="p-4 border-b border-border">
        <div className="text-xs font-medium text-muted-foreground mb-2">
          Filter by Status
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge
            className={`cursor-pointer ${
              filters.status === "pending"
                ? "status-pending"
                : "bg-muted hover:bg-muted/80"
            }`}
            onClick={() => handleStatusFilter("pending")}
          >
            Pending
          </Badge>
          <Badge
            className={`cursor-pointer ${
              filters.status === "approved"
                ? "status-approved"
                : "bg-muted hover:bg-muted/80"
            }`}
            onClick={() => handleStatusFilter("approved")}
          >
            Approved
          </Badge>
          <Badge
            className={`cursor-pointer ${
              filters.status === "scheduled"
                ? "status-scheduled"
                : "bg-muted hover:bg-muted/80"
            }`}
            onClick={() => handleStatusFilter("scheduled")}
          >
            Scheduled
          </Badge>
          <Badge
            className={`cursor-pointer ${
              filters.status === "published"
                ? "status-published"
                : "bg-muted hover:bg-muted/80"
            }`}
            onClick={() => handleStatusFilter("published")}
          >
            Published
          </Badge>
          <Badge
            className={`cursor-pointer ${
              filters.status === "draft"
                ? "status-draft"
                : "bg-muted hover:bg-muted/80"
            }`}
            onClick={() => handleStatusFilter("draft")}
          >
            Draft
          </Badge>
        </div>

        {(filters.status || filters.sourceId) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="mt-2 w-full text-xs"
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Content Bundles */}
      <div className="p-4 space-y-3">
        <div className="text-xs font-medium text-muted-foreground mb-2">
          Episodes
        </div>

        {mockBundles.map((bundle) => {
          const isExpanded = expandedBundles.includes(bundle.source.id);
          const isSelected = filters.sourceId === bundle.source.id;

          return (
            <div
              key={bundle.source.id}
              className={`rounded-lg border transition-colors ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-border/80"
              }`}
            >
              {/* Bundle Header */}
              <button
                onClick={() => handleBundleClick(bundle.source.id)}
                className="w-full p-3 text-left"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {bundle.source.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Episode {bundle.source.episodeNumber} •{" "}
                      {bundle.stats.total} items
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBundle(bundle.source.id);
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {isExpanded ? "−" : "+"}
                  </button>
                </div>

                {/* Bundle Stats */}
                <div className="flex gap-1 mt-2">
                  {bundle.stats.pending > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {bundle.stats.pending} pending
                    </Badge>
                  )}
                  {bundle.stats.approved > 0 && (
                    <Badge variant="success" className="text-xs">
                      {bundle.stats.approved} approved
                    </Badge>
                  )}
                  {bundle.stats.scheduled > 0 && (
                    <Badge className="status-scheduled text-xs">
                      {bundle.stats.scheduled} scheduled
                    </Badge>
                  )}
                  {bundle.stats.published > 0 && (
                    <Badge className="status-published text-xs">
                      {bundle.stats.published} published
                    </Badge>
                  )}
                </div>
              </button>

              {/* Bundle Items (when expanded) */}
              {isExpanded && (
                <div className="px-3 pb-3 space-y-2 border-t border-border mt-2 pt-2">
                  {bundle.items.map((item) => (
                    <div
                      key={item.id}
                      className="text-xs p-2 rounded bg-background hover:bg-background/80 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">
                            {item.title}
                          </div>
                          <div className="text-muted-foreground">
                            {item.platform}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge className={`text-xs ${item.icpScore.score >= 85 ? 'icp-high' : item.icpScore.score >= 60 ? 'icp-medium' : 'icp-low'}`}>
                            {item.icpScore.score}
                          </Badge>
                          <Badge className={`text-xs ${getStatusClass(item.status)}`}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function getStatusClass(status: ContentStatus): string {
  const statusClasses: Record<ContentStatus, string> = {
    draft: "status-draft",
    in_progress: "status-progress",
    pending: "status-pending",
    approved: "status-approved",
    scheduled: "status-scheduled",
    published: "status-published",
    rejected: "bg-destructive",
  };
  return statusClasses[status] || "";
}
