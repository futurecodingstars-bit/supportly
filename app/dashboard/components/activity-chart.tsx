const activity = [
  { day: "Mon", value: 72 },
  { day: "Tue", value: 81 },
  { day: "Wed", value: 64 },
  { day: "Thu", value: 91 },
  { day: "Fri", value: 76 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 95 },
];

export default function ActivityChart() {
  return (
    <div className="flex h-52 items-end gap-2 sm:gap-3">
      {activity.map((item) => (
        <div
          key={item.day}
          className="flex h-full flex-1 flex-col justify-end gap-2"
        >
          <div
            className="rounded-t-xl bg-gradient-to-t from-emerald-400/40 to-emerald-300 transition hover:from-emerald-400/60"
            style={{ height: `${item.value}%` }}
          />

          <span className="text-center text-[10px] text-slate-600">
            {item.day}
          </span>
        </div>
      ))}
    </div>
  );
}
