type ConversationStatus = "Resolved" | "Open";

type ConversationRowProps = {
  initials: string;
  name: string;
  message: string;
  time: string;
  status: ConversationStatus;
  channel: string;
};

export default function ConversationRow({
  initials,
  name,
  message,
  time,
  status,
  channel,
}: ConversationRowProps) {
  const isResolved = status === "Resolved";

  return (
    <div className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0">
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-800 text-xs font-semibold text-slate-300">
        {initials}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium text-white">
            {name}
          </p>

          <span
            className={`hidden rounded-full px-2 py-0.5 text-[10px] font-semibold sm:inline-flex ${
              isResolved
                ? "bg-emerald-300/10 text-emerald-300"
                : "bg-amber-300/10 text-amber-300"
            }`}
          >
            {status}
          </span>
        </div>

        <p className="mt-1 truncate text-xs text-slate-500">
          {message}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[11px] text-slate-600">{time}</p>

        <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-600">
          {channel}
        </p>
      </div>
    </div>
  );
}
