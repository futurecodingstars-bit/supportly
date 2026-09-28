import Link from "next/link";

const architecture = [
  {
    title: "Route",
    code: "app/page.tsx",
    description: "Product entry point",
  },
  {
    title: "Route",
    code: "app/chat/page.tsx",
    description: "Customer support experience",
  },
  {
    title: "Layout",
    code: "app/chat/layout.tsx",
    description: "Shared chat shell",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-72 size-96 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20">
        <header className="flex items-center justify-between border-b border-white/10 py-5">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-300 font-black text-slate-950">
              S
            </span>

            <span>Supportly</span>
          </Link>

          <div className="hidden items-center gap-2 text-sm text-slate-400 sm:flex">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            System online
          </div>
        </header>

        <section className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-300">
              AI CUSTOMER SUPPORT
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Turn customer questions into{" "}
              <span className="text-emerald-300">instant answers.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              We're building a complete AI support platform where businesses
              can connect their knowledge, automate conversations, and hand
              difficult cases to humans.
            </p>

            <div className="mt-8">
              <Link
                href="/chat"
                className="inline-flex items-center gap-3 rounded-2xl bg-emerald-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                Open customer chat
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-emerald-300">
                  SUPPORT AGENT
                </p>
                <h2 className="mt-1 font-semibold text-white">
                  Supportly AI
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400">
                Online
              </span>
            </div>

            <div className="space-y-4 pt-5">
              <div className="flex items-start gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-emerald-300 text-xs font-black text-slate-950">
                  S
                </span>

                <div className="max-w-[85%] rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200">
                  Hi! I'm your support assistant. Ask me about shipping,
                  returns, or your order.
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl bg-emerald-300 px-4 py-3 text-sm leading-6 text-slate-950">
                  How long does standard shipping take?
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-emerald-300 text-xs font-black text-slate-950">
                  S
                </span>

                <div className="max-w-[85%] rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200">
                  Standard shipping usually takes 3–5 business days.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 pt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-300">
              THE FOUNDATION
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One product. Clear boundaries.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              The application grows by adding product capabilities without
              turning the project into a maze of unrelated components.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {architecture.map((item) => (
              <div
                key={item.code}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  {item.title}
                </p>

                <code className="mt-3 block text-sm text-white">
                  {item.code}
                </code>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
