import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function DashboardCard({
  title,
  description,
  action,
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/10 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-white">{title}</h2>

          {description && (
            <p className="mt-1 text-xs leading-5 text-slate-500">
              {description}
            </p>
          )}
        </div>

        {action}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}
