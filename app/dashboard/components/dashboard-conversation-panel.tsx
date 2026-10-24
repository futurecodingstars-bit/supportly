"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

import type {
  ConversationStatus,
  DashboardConversation,
} from "../data";

const filters = ["All", "Open", "Resolved"] as const;

type ConversationFilter = (typeof filters)[number];

type DashboardConversationPanelProps = {
  conversations: DashboardConversation[];
};

export default function DashboardConversationPanel({
  conversations,
}: DashboardConversationPanelProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<ConversationFilter>("All");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredConversations = conversations.filter((conversation) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      conversation.customer.toLowerCase().includes(normalizedQuery) ||
      conversation.email.toLowerCase().includes(normalizedQuery) ||
      conversation.topic.toLowerCase().includes(normalizedQuery);

    const matchesStatus =
      statusFilter === "All" ||
      conversation.status === statusFilter;

    return matchesQuery && matchesStatus;
  });

  function getStatusClass(status: ConversationStatus) {
    return status === "Open"
      ? "border-amber-400/20 bg-amber-400/10 text-amber-300"
      : "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
  }

  function clearFilters() {
    setQuery("");
    setStatusFilter("All");
  }

  return (
    <div>
      <div className="border-b border-white/10 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search conversations</span>

            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />

            <input
              value={query}
              onChange={(event) =>
                setQuery(event.currentTarget.value)
              }
              placeholder="Search customer or topic..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.05]"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <div className="mr-1 hidden items-center gap-1.5 text-xs text-slate-500 sm:flex">
              <SlidersHorizontal className="size-3.5" />
              Status
            </div>

            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={statusFilter === filter}
                onClick={() => setStatusFilter(filter)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  statusFilter === filter
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing {filteredConversations.length} of{" "}
            {conversations.length} conversations
          </span>

          {(query || statusFilter !== "All") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-slate-400 transition hover:text-white"
            >
              <X className="size-3.5" />
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="divide-y divide-white/5">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex flex-col gap-4 px-5 py-4 transition hover:bg-white/[0.02] sm:flex-row sm:items-center"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
                  {conversation.initials}
                </div>

                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-white">
                    {conversation.customer}
                  </div>

                  <div className="truncate text-xs text-slate-500">
                    {conversation.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:min-w-[280px] sm:justify-end">
                <div className="min-w-0 flex-1 sm:max-w-[150px]">
                  <div className="truncate text-sm text-slate-300">
                    {conversation.topic}
                  </div>

                  <div className="text-xs text-slate-500">
                    {conversation.time}
                  </div>
                </div>

                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${getStatusClass(
                    conversation.status,
                  )}`}
                >
                  {conversation.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="px-5 py-10 text-center">
            <div className="mx-auto grid size-10 place-items-center rounded-full bg-white/[0.04] text-slate-500">
              <Search className="size-4" />
            </div>

            <h3 className="mt-3 text-sm font-medium text-white">
              No conversations found
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Try another search or clear the current filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
