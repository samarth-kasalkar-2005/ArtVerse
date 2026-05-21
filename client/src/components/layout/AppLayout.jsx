"use client";

import Sidebar from "../navbar/Sidebar";

export default function AppLayout({
  children,
}) {

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen w-[260px] z-50">

        <Sidebar />

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-[260px] px-10 py-8 lg:px-14">

        {children}

      </div>

    </div>
  );
}