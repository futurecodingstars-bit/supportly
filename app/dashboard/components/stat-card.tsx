import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{
  className?: string;
}>;

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  description: string;
  icon: IconComponent;
  trend: "up" | "down";
};

export default function StatCard({
  label,
  value,
  change,
  description,
  icon: Icon,
  trend,
}: StatCardProps) {
  const isPositive = trend === "up";

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/10">
      <div className="flex items-start justify-between">
        <div className="grid size-10 place-items-center rounded-2xl bg-slate-800 text-emerald-300">
          <Icon className="size-5" />
        </div>

        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            isPositive
              ? "bg-emerald-300/10 text-emerald-300"
              : "bg-sky-300/10 text-sky-300"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="size-3" />
          ) : (
            <ArrowDownRight className="size-3" />
          )}
          {change}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>
    </article>
  );
}
