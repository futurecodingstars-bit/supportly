import Link from "next/link";
import type { ReactNode } from "react";

export default function ChatLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/10 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-emerald-300 font-black text-slate-950">
            S
          </span>

          Supportly
        </Link>

        <div className="hidden items-center gap-2 text-sm text-slate-400 sm:flex">
          <span className="size-2 rounded-full bg-emerald-400" />
          Supportly AI
        </div>

        <Link
          href="/"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          Exit chat
        </Link>
      </header>

      {children}
    </div>
  );
}
