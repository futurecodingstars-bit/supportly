import {
  Bot,
  Clock3,
  MessageSquare,
  Users,
} from "lucide-react";
import Link from "next/link";

import ActivityChart from "./components/activity-chart";
import ConversationRow from "./components/conversation-row";
import DashboardCard from "./components/dashboard-card";
import StatCard from "./components/stat-card";

const stats = [
  {
    label: "Conversations",
    value: "1,284",
    change: "+12.5%",
    description: "vs. last month",
    icon: MessageSquare,
    trend: "up" as const,
  },
  {
    label: "AI Resolution",
    value: "91%",
    change: "+4.2%",
    description: "resolved without escalation",
    icon: Bot,
    trend: "up" as const,
  },
  {
    label: "Open Conversations",
    value: "23",
    change: "-8.1%",
    description: "vs. last week",
    icon: Users,
    trend: "down" as const,
  },
  {
    label: "Avg. Response",
    value: "18s",
    change: "-12%",
    description: "vs. last month",
    icon: Clock3,
    trend: "down" as const,
  },
];

const conversations = [
  {
    initials: "OM",
    name: "Olivia Martin",
    message: "Where is my order #1842?",
    time: "2m ago",
    status: "Resolved" as const,
    channel: "AI",
  },
  {
    initials: "ML",
    name: "Marcus Lee",
    message: "Can I change my shipping address?",
    time: "8m ago",
    status: "Open" as const,
    channel: "Human",
  },
  {
    initials: "SP",
    name: "Sofia Patel",
    message: "How do I request a refund?",
    time: "14m ago",
    status: "Resolved" as const,
    channel: "AI",
  },
  {
    initials: "EB",
    name: "Ethan Brooks",
    message: "Do you ship internationally?",
    time: "31m ago",
    status: "Open" as const,
    channel: "Human",
  },
];

const topics = [
  { label: "Shipping", value: 38 },
  { label: "Returns", value: 27 },
  { label: "Order status", value: 21 },
  { label: "Other", value: 14 },
];

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-5">
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              description={stat.description}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
          <DashboardCard
            title="Recent conversations"
            description="The latest customer interactions."
            action={
              <Link
                href="/chat"
                className="text-xs font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                View chat →
              </Link>
            }
          >
            <div>
              {conversations.map((conversation) => (
                <ConversationRow
                  key={conversation.name}
                  {...conversation}
                />
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="AI resolution"
            description="How often conversations are resolved without escalation."
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="text-4xl font-semibold tracking-tight text-white">
                  91%
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  +4.2% compared with last month
                </p>
              </div>

              <div className="text-right text-xs text-emerald-300">
                Healthy
              </div>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-emerald-300"
                style={{ width: "91%" }}
              />
            </div>

            <div className="mt-6 space-y-4">
              {topics.map((topic) => (
                <div key={topic.label}>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">
                      {topic.label}
                    </span>

                    <span className="text-slate-500">
                      {topic.value}%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-slate-500"
                      style={{ width: `${topic.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </section>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)]">
          <DashboardCard
            title="Weekly activity"
            description="Conversation volume over the last seven days."
          >
            <ActivityChart />
          </DashboardCard>

          <DashboardCard
            title="Support snapshot"
            description="A quick read of whatʾs happening right now."
          >
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Open conversations
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  23
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  7 need attention today.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <p className="text-xs uppercase tracking-wider text-slate-600">
                  Average response
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  18s
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Faster than the previous period.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-300/10 bg-emerald-300/[0.04] p-4">
                <p className="text-xs uppercase tracking-wider text-emerald-300">
                  Product status
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Foundation online
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Data and AI infrastructure will connect in later episodes.
                </p>
              </div>
            </div>
          </DashboardCard>
        </section>
      </div>
    </div>
  );
}
