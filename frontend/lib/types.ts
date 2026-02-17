/**
 * Type definitions for the Growth Super Agent
 */

// User roles
export type UserRole = "approver" | "admin" | "viewer" | "commenter";

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

// Content status
export type ContentStatus =
  | "draft" // Idea - in To-do column
  | "in_progress" // Being edited - in In progress column
  | "pending" // Ready for review - in In progress column
  | "approved" // Approved - in Complete column
  | "scheduled" // Scheduled - in Complete column
  | "published" // Published - in Complete column
  | "rejected";

// Content platform
export type ContentPlatform = "linkedin" | "newsletter" | "blog";

// Content type
export type ContentType = "post" | "article" | "newsletter";

// ICP Score
export interface ICPScore {
  score: number; // 0-100
  reasons: string[];
  suggestions?: string[];
}

// Content source
export interface ContentSource {
  id: string;
  type: "podcast" | "book" | "call" | "manual";
  title: string;
  episodeNumber?: number;
  recordingDate?: string;
  duration?: number;
  transcriptUrl?: string;
}

// Content item
export interface ContentItem {
  id: string;
  sourceId: string;
  source: ContentSource;
  platform: ContentPlatform;
  type: ContentType;
  status: ContentStatus;
  title: string;
  content: string;
  originalContent?: string; // AI-generated version before edits
  icpScore: ICPScore;
  aiDetectionScore?: number; // 0-100, lower is better
  scheduledFor?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  createdBy: User;
  lastEditedBy?: User;
  approvedBy?: User;
  rejectionReason?: string;
}

// Content bundle (grouped by source)
export interface ContentBundle {
  source: ContentSource;
  items: ContentItem[];
  stats: {
    total: number;
    pending: number;
    approved: number;
    scheduled: number;
    published: number;
  };
}

// Auto-save state
export interface AutoSaveState {
  isSaving: boolean;
  lastSaved?: Date;
  hasUnsavedChanges: boolean;
  error?: string;
}

// Analytics
export interface ContentAnalytics {
  contentId: string;
  views: number;
  clicks: number;
  engagement: number;
  shares: number;
  comments: number;
  updatedAt: string;
}

// Dashboard stats
export interface DashboardStats {
  totalContent: number;
  pendingApproval: number;
  scheduledToday: number;
  publishedThisWeek: number;
  avgIcpScore: number;
  timeSaved: number; // in minutes
}

// Schedule slot
export interface ScheduleSlot {
  id: string;
  platform: ContentPlatform;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  time: string; // HH:mm format
  timezone: string;
  isActive: boolean;
}

// Notification
export interface Notification {
  id: string;
  type: "approval_needed" | "scheduled" | "published" | "error";
  title: string;
  message: string;
  contentId?: string;
  createdAt: string;
  read: boolean;
}

// API Response wrappers
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
