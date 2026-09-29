import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="border-b border-white/10 bg-slate-950/90 px-4 py-5 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-bold tracking-[0.2em] text-emerald-300">
            OVERVIEW
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Command center
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            A quick view of your support operation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-500 sm:inline-flex">
            Demo workspace
          </span>

          <Link
            href="/chat"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-200"
          >
            Customer chat
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
