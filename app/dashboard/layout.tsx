import type { ReactNode } from "react";

import DashboardHeader from "./components/dashboard-header";
import DashboardSidebar from "./components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-[1600px] md:grid-cols-[240px_minmax(0,1fr)]">
        <DashboardSidebar />

        <div className="min-w-0">
          <DashboardHeader />

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
