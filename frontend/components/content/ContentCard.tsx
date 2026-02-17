"use client";

import { ContentItem } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getICPScoreClass, getStatusClass, formatDate } from "@/lib/utils";
import { useContentStore } from "@/lib/store";

interface ContentCardProps {
  item: ContentItem;
  onClick?: () => void;
}

export function ContentCard({ item, onClick }: ContentCardProps) {
  const { selectContent, approveContent, rejectContent } = useContentStore();

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();
    approveContent(item.id, "user-2"); // Mock Fernando approving
    selectContent(undefined);
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const reason = prompt("Rejection reason:");
    if (reason) {
      rejectContent(item.id, reason);
    }
  };

  const handleCardClick = () => {
    selectContent(item.id);
    onClick?.();
  };

  // Get platform display
  const platformDisplay = {
    linkedin: "LinkedIn Post",
    newsletter: "Newsletter",
    blog: "Blog Article",
  }[item.platform];

  // Get platform icon
  const platformIcon = {
    linkedin: "💼",
    newsletter: "📧",
    blog: "📝",
  }[item.platform];

  // Truncate content for preview
  const contentPreview =
    item.content.length > 200
      ? item.content.substring(0, 200) + "..."
      : item.content;

  return (
    <Card
      className="hover:border-primary/50 cursor-pointer transition-colors"
      onClick={handleCardClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            {/* Title */}
            <h3 className="font-semibold leading-tight">{item.title}</h3>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>
                {platformIcon} {platformDisplay}
              </span>
              <span>•</span>
              <span>Episode {item.source.episodeNumber}</span>
              <span>•</span>
              <span>{formatDate(item.createdAt)}</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-2 items-end">
            <Badge className={getICPScoreClass(item.icpScore.score)}>
              ICP: {item.icpScore.score}
            </Badge>
            <Badge className={getStatusClass(item.status)}>{item.status}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Content Preview */}
        <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-wrap">
          {contentPreview}
        </p>

        {/* ICP Score Details */}
        {item.icpScore.score < 80 && item.icpScore.suggestions && item.icpScore.suggestions.length > 0 && (
          <div className="mt-4 p-3 bg-muted rounded-lg space-y-1">
            <p className="text-xs font-medium text-yellow-400">
              Voice Issues Detected:
            </p>
            <ul className="text-xs text-muted-foreground space-y-0.5">
              {item.icpScore.suggestions.slice(0, 2).map((suggestion, i) => (
                <li key={i}>• {suggestion}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Rejection Reason */}
        {item.rejectionReason && (
          <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-xs font-medium text-destructive mb-1">
              Rejected:
            </p>
            <p className="text-xs text-muted-foreground">
              {item.rejectionReason}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        {/* Author/Editor Info */}
        <div className="text-xs text-muted-foreground">
          {item.lastEditedBy ? (
            <span>Edited by {item.lastEditedBy.name}</span>
          ) : (
            <span>Created by {item.createdBy.name}</span>
          )}
        </div>

        {/* Actions */}
        {item.status === "pending" && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
            >
              Reject
            </Button>
            <Button size="sm" onClick={handleApprove}>
              Approve
            </Button>
          </div>
        )}

        {item.status === "draft" && (
          <Button variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
            Edit
          </Button>
        )}

        {item.status === "approved" && (
          <Button size="sm" onClick={(e) => e.stopPropagation()}>
            Schedule
          </Button>
        )}

        {item.status === "scheduled" && (
          <div className="text-xs text-muted-foreground">
            {item.scheduledFor && `📅 ${formatDate(item.scheduledFor)}`}
          </div>
        )}

        {item.status === "published" && (
          <div className="text-xs text-green-400">
            ✓ Published {item.publishedAt && formatDate(item.publishedAt)}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
