import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{
  className?: string;
}>;

type NavItem = {
  label: string;
  icon: IconComponent;
  href?: string;
  status?: string;
};

const mainNavigation: NavItem[] = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Conversations",
    icon: MessageSquare,
    href: "/chat",
  },
];

const futureNavigation: NavItem[] = [
  {
    label: "Knowledge Base",
    icon: BookOpen,
    status: "Soon",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    status: "Soon",
  },
  {
    label: "Settings",
    icon: Settings,
    status: "Soon",
  },
];

function NavigationItem({ item }: { item: NavItem }) {
  const Icon = item.icon;

  if (!item.href) {
    return (
      <div
        aria-disabled="true"
        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-500"
      >
        <span className="flex items-center gap-3">
          <Icon className="size-4" />
          {item.label}
        </span>

        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider">
          {item.status}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
        item.href === "/dashboard"
          ? "bg-emerald-300 text-slate-950"
          : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      <Icon className="size-4" />
      {item.label}
    </Link>
  );
}

export default function DashboardSidebar() {
  return (
    <aside className="border-b border-white/10 md:min-h-screen md:border-b-0 md:border-r">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-4 py-5 md:block md:px-5">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-300 font-black text-slate-950">
              S
            </span>

            <span>Supportly</span>
          </Link>

          <span className="hidden text-xs text-slate-500 md:block md:pl-12 md:pt-1">
            AI Support Platform
          </span>
        </div>

        <div className="hidden px-4 md:block">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-slate-800 text-sm font-semibold">
                AS
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  Acme Support
                </p>

                <p className="text-xs text-slate-500">
                  Demo workspace
                </p>
              </div>

              <Sparkles className="ml-auto size-4 text-emerald-300" />
            </div>
          </div>
        </div>

        <nav
          aria-label="Dashboard navigation"
          className="flex gap-1 overflow-x-auto px-4 pb-4 md:block md:overflow-visible md:px-3 md:pb-0 md:pt-8"
        >
          <p className="hidden px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 md:block">
            Workspace
          </p>

          <div className="flex gap-1 md:block">
            {mainNavigation.map((item) => (
              <NavigationItem item={item} key={item.label} />
            ))}
          </div>

          <p className="hidden px-3 pb-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 md:block">
            Configure
          </p>

          <div className="flex gap-1 md:block">
            {futureNavigation.map((item) => (
              <NavigationItem item={item} key={item.label} />
            ))}
          </div>
        </nav>

        <div className="hidden px-4 pb-5 md:mt-auto md:block">
          <div className="rounded-2xl border border-emerald-300/10 bg-emerald-300/[0.04] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-400" />
              Foundation online
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Built with React and Next.js.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
