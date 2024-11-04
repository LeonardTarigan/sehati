"use client";

import ChatSection from "@/components/assistant/sections/chat-section";
import HeaderSection from "@/components/assistant/sections/header-section";

export default function AssistantPage() {
  return (
    <main className="-mb-36 flex h-screen flex-col gap-2 overflow-hidden">
      <HeaderSection />
      <ChatSection />
    </main>
  );
}
