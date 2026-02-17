/**
 * Zustand state management store
 */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ContentItem, ContentStatus, ContentPlatform, AutoSaveState } from "./types";
import { mockContentItems } from "./mock-data";

interface ContentFilters {
  status?: ContentStatus;
  platform?: ContentPlatform;
  sourceId?: string;
  searchQuery?: string;
}

interface UIState {
  sidebarOpen: boolean;
  selectedContentId?: string;
  viewMode: "list" | "grid" | "kanban";
}

interface ContentStore {
  // Content data
  content: ContentItem[];
  filters: ContentFilters;

  // UI state
  ui: UIState;

  // Auto-save state
  autoSave: AutoSaveState;

  // Content actions
  setContent: (content: ContentItem[]) => void;
  addContent: (item: ContentItem) => void;
  updateContent: (id: string, updates: Partial<ContentItem>) => void;
  deleteContent: (id: string) => void;
  approveContent: (id: string, userId: string) => void;
  rejectContent: (id: string, reason: string) => void;
  scheduleContent: (id: string, scheduledFor: string) => void;

  // Filter actions
  setFilter: (filters: Partial<ContentFilters>) => void;
  clearFilters: () => void;

  // UI actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  selectContent: (id?: string) => void;
  setViewMode: (mode: "list" | "grid" | "kanban") => void;

  // Auto-save actions
  setAutoSaving: (isSaving: boolean) => void;
  setLastSaved: (date: Date) => void;
  setUnsavedChanges: (hasChanges: boolean) => void;

  // Computed values
  getFilteredContent: () => ContentItem[];
  getContentById: (id: string) => ContentItem | undefined;
  getContentByStatus: (status: ContentStatus) => ContentItem[];
  getPendingCount: () => number;
}

export const useContentStore = create<ContentStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      content: mockContentItems,
      filters: {},
      ui: {
        sidebarOpen: true,
        viewMode: "list",
      },
      autoSave: {
        isSaving: false,
        hasUnsavedChanges: false,
      },

      // Content actions
      setContent: (content) => set({ content }),

      addContent: (item) =>
        set((state) => ({
          content: [...state.content, item],
        })),

      updateContent: (id, updates) =>
        set((state) => ({
          content: state.content.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...updates,
                  updatedAt: new Date().toISOString(),
                }
              : item
          ),
          autoSave: {
            ...state.autoSave,
            hasUnsavedChanges: true,
          },
        })),

      deleteContent: (id) =>
        set((state) => ({
          content: state.content.filter((item) => item.id !== id),
        })),

      approveContent: (id, userId) =>
        set((state) => ({
          content: state.content.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: "approved" as ContentStatus,
                  approvedBy: state.content.find((c) => c.createdBy.id === userId)
                    ?.createdBy,
                  updatedAt: new Date().toISOString(),
                }
              : item
          ),
        })),

      rejectContent: (id, reason) =>
        set((state) => ({
          content: state.content.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: "draft" as ContentStatus,
                  rejectionReason: reason,
                  updatedAt: new Date().toISOString(),
                }
              : item
          ),
        })),

      scheduleContent: (id, scheduledFor) =>
        set((state) => ({
          content: state.content.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: "scheduled" as ContentStatus,
                  scheduledFor,
                  updatedAt: new Date().toISOString(),
                }
              : item
          ),
        })),

      // Filter actions
      setFilter: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),

      clearFilters: () => set({ filters: {} }),

      // UI actions
      toggleSidebar: () =>
        set((state) => ({
          ui: { ...state.ui, sidebarOpen: !state.ui.sidebarOpen },
        })),

      setSidebarOpen: (open) =>
        set((state) => ({
          ui: { ...state.ui, sidebarOpen: open },
        })),

      selectContent: (id) =>
        set((state) => ({
          ui: { ...state.ui, selectedContentId: id },
        })),

      setViewMode: (mode) =>
        set((state) => ({
          ui: { ...state.ui, viewMode: mode },
        })),

      // Auto-save actions
      setAutoSaving: (isSaving) =>
        set((state) => ({
          autoSave: { ...state.autoSave, isSaving },
        })),

      setLastSaved: (date) =>
        set((state) => ({
          autoSave: {
            ...state.autoSave,
            lastSaved: date,
            hasUnsavedChanges: false,
          },
        })),

      setUnsavedChanges: (hasChanges) =>
        set((state) => ({
          autoSave: { ...state.autoSave, hasUnsavedChanges: hasChanges },
        })),

      // Computed values
      getFilteredContent: () => {
        const { content, filters } = get();
        let filtered = [...content];

        if (filters.status) {
          filtered = filtered.filter((item) => item.status === filters.status);
        }

        if (filters.platform) {
          filtered = filtered.filter(
            (item) => item.platform === filters.platform
          );
        }

        if (filters.sourceId) {
          filtered = filtered.filter(
            (item) => item.sourceId === filters.sourceId
          );
        }

        if (filters.searchQuery) {
          const query = filters.searchQuery.toLowerCase();
          filtered = filtered.filter(
            (item) =>
              item.title.toLowerCase().includes(query) ||
              item.content.toLowerCase().includes(query)
          );
        }

        return filtered;
      },

      getContentById: (id) => {
        return get().content.find((item) => item.id === id);
      },

      getContentByStatus: (status) => {
        return get().content.filter((item) => item.status === status);
      },

      getPendingCount: () => {
        return get().content.filter((item) => item.status === "pending").length;
      },
    }),
    { name: "content-store" }
  )
);
