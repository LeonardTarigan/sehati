import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { MicIcon } from "lucide-react";
import ChatRoom from "../chat/chat-room";

export default function ChatSection() {
  return (
    <section className="flex grow flex-col justify-between overflow-auto">
      <ChatRoom />
      <div className="relative w-full max-w-xl bg-white px-3 py-2">
        <Input
          type="search"
          placeholder="Kirim pertanyaan"
          className="w-full rounded-full border bg-white py-6 pl-5 pr-10 text-sm shadow-sm"
        />
        <Button
          size={"icon"}
          className="absolute right-5 top-1/2 size-fit -translate-y-1/2 rounded-full bg-primary-500 p-2"
        >
          <MicIcon />
        </Button>
      </div>
    </section>
  );
}
