import ChatInterface from "./chat-interface";

export default function ChatPage() {
  return (
    <main className="mx-auto grid w-full max-w-7xl gap-5 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <section className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-300">
              CUSTOMER SUPPORT
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              How can we help?
            </h1>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
            Online
          </span>
        </div>

        <div className="p-6">
          <ChatInterface />
        </div>
      </section>

      <aside className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-bold tracking-[0.2em] text-emerald-300">
          THIS EPISODE
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          We're building the foundation.
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          The interface is ready first. In later episodes, this same product
          flow will connect to real data, knowledge retrieval, AI generation,
          authentication, billing, and production infrastructure.
        </p>

        <div className="mt-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-lg bg-emerald-300 text-xs font-black text-slate-950">
              01
            </span>

            <span className="text-sm text-white">
              Customer question
            </span>
          </div>

          <div className="ml-3.5 h-5 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-lg border border-white/10 text-xs font-black text-slate-500">
              02
            </span>

            <span className="text-sm text-slate-400">
              Support logic
            </span>
          </div>

          <div className="ml-3.5 h-5 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="grid size-7 place-items-center rounded-lg border border-white/10 text-xs font-black text-slate-500">
              03
            </span>

            <span className="text-sm text-slate-400">
              AI response
            </span>
          </div>
        </div>
      </aside>
    </main>
  );
}
