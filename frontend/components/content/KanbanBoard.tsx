"use client";

import { ContentItem, ContentStatus } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getICPScoreClass, formatDate } from "@/lib/utils";
import { useContentStore } from "@/lib/store";

interface KanbanColumn {
  id: string;
  title: string;
  statuses: ContentStatus[];
  color: string;
}

const kanbanColumns: KanbanColumn[] = [
  {
    id: "todo",
    title: "To-do",
    statuses: ["draft"],
    color: "bg-muted",
  },
  {
    id: "in-progress",
    title: "In progress",
    statuses: ["in_progress", "pending"],
    color: "bg-yellow-500/10",
  },
  {
    id: "complete",
    title: "Complete",
    statuses: ["approved", "scheduled", "published"],
    color: "bg-green-500/10",
  },
];

export function KanbanBoard() {
  const { getFilteredContent } = useContentStore();
  const allContent = getFilteredContent();

  // Group content by column
  const columnContent = kanbanColumns.map((column) => ({
    ...column,
    items: allContent.filter((item) => column.statuses.includes(item.status)),
  }));

  return (
    <div className="flex gap-4 h-full overflow-x-auto pb-4">
      {columnContent.map((column) => (
        <KanbanColumn key={column.id} column={column} />
      ))}
    </div>
  );
}

interface KanbanColumnProps {
  column: KanbanColumn & { items: ContentItem[] };
}

function KanbanColumn({ column }: KanbanColumnProps) {
  return (
    <div className="flex-shrink-0 w-80 flex flex-col">
      {/* Column Header */}
      <div className={`p-3 rounded-t-lg ${column.color} border-b border-border`}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{column.title}</h3>
          <Badge variant="secondary" className="text-xs">
            {column.items.length}
          </Badge>
        </div>
      </div>

      {/* Column Content */}
      <div className="flex-1 bg-card/50 rounded-b-lg border border-t-0 border-border p-3 space-y-3 overflow-y-auto">
        {column.items.length === 0 ? (
          <div className="text-center py-8 text-sm text-muted-foreground">
            No items
          </div>
        ) : (
          column.items.map((item) => (
            <KanbanCard key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

interface KanbanCardProps {
  item: ContentItem;
}

function KanbanCard({ item }: KanbanCardProps) {
  const { selectContent, updateContent } = useContentStore();

  const handleCardClick = () => {
    selectContent(item.id);
  };

  const moveToStatus = (status: ContentStatus) => {
    updateContent(item.id, { status });
  };

  // Get platform display
  const platformIcon = {
    linkedin: "💼",
    newsletter: "📧",
    blog: "📝",
  }[item.platform];

  // Status badge styling
  const getStatusBadge = () => {
    const statusLabels: Record<ContentStatus, string> = {
      draft: "Idea",
      in_progress: "In Progress",
      pending: "Ready for Review",
      approved: "Approved",
      scheduled: "Scheduled",
      published: "Published",
      rejected: "Rejected",
    };

    const statusColors: Record<ContentStatus, string> = {
      draft: "bg-gray-500/20 text-gray-400",
      in_progress: "bg-blue-500/20 text-blue-400",
      pending: "bg-yellow-500/20 text-yellow-400",
      approved: "bg-green-500/20 text-green-400",
      scheduled: "bg-purple-500/20 text-purple-400",
      published: "bg-green-500/20 text-green-400",
      rejected: "bg-red-500/20 text-red-400",
    };

    return (
      <Badge className={`${statusColors[item.status]} text-xs`}>
        {statusLabels[item.status]}
      </Badge>
    );
  };

  // Quick actions based on status
  const getQuickActions = () => {
    if (item.status === "draft") {
      return (
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            moveToStatus("in_progress");
          }}
          className="w-full"
        >
          Start Editing →
        </Button>
      );
    }

    if (item.status === "in_progress") {
      return (
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            moveToStatus("pending");
          }}
          className="w-full"
        >
          Ready for Review →
        </Button>
      );
    }

    if (item.status === "pending") {
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              moveToStatus("in_progress");
            }}
            className="flex-1"
          >
            ← Edit
          </Button>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              moveToStatus("approved");
            }}
            className="flex-1"
          >
            Approve
          </Button>
        </div>
      );
    }

    if (item.status === "approved") {
      return (
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            moveToStatus("scheduled");
          }}
          className="w-full"
        >
          Schedule →
        </Button>
      );
    }

    if (item.status === "scheduled") {
      return (
        <div className="text-xs text-muted-foreground">
          {item.scheduledFor && `📅 ${formatDate(item.scheduledFor)}`}
        </div>
      );
    }

    if (item.status === "published") {
      return (
        <div className="text-xs text-green-400 flex items-center gap-1">
          <span>✓</span>
          <span>{item.publishedAt && formatDate(item.publishedAt)}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <Card
      className="hover:border-primary/50 cursor-pointer transition-colors"
      onClick={handleCardClick}
    >
      <CardHeader className="p-3 space-y-2">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold line-clamp-2 mb-1">
              {item.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {platformIcon} Episode {item.source.episodeNumber}
            </div>
          </div>
          <Badge className={getICPScoreClass(item.icpScore.score)}>
            {item.icpScore.score}
          </Badge>
        </div>

        {/* Status Badge */}
        {getStatusBadge()}
      </CardHeader>

      <CardContent className="p-3 pt-0 space-y-2">
        {/* Content Preview */}
        <p className="text-xs text-muted-foreground line-clamp-2">
          {item.content.substring(0, 100)}...
        </p>

        {/* Voice Issues */}
        {item.icpScore.score < 80 &&
          item.icpScore.suggestions &&
          item.icpScore.suggestions.length > 0 && (
            <div className="p-2 bg-yellow-500/10 rounded text-xs space-y-1">
              <div className="font-medium text-yellow-400">Voice Issues:</div>
              <div className="text-muted-foreground">
                {item.icpScore.suggestions[0]}
              </div>
            </div>
          )}

        {/* Quick Actions */}
        <div className="pt-2">{getQuickActions()}</div>
      </CardContent>
    </Card>
  );
}
