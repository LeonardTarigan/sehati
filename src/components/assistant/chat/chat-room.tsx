import { useEffect, useRef } from "react";
import { chatData } from "@/lib/static/chat-dummy";
import dayjs from "dayjs";

export default function ChatRoom() {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div
      ref={chatContainerRef}
      className="grow space-y-5 overflow-auto scroll-smooth rounded-xl px-3 py-5 text-sm font-medium"
    >
      {chatData.map(({ id, content, timestamp, type }) => {
        if (type === "question")
          return (
            <div key={id} className="flex justify-end">
              <div className="w-fit max-w-[90%] space-y-1 rounded-lg bg-primary-500 p-3 text-end text-white">
                <p>{content}</p>
                <p className="text-xs text-primary-100">
                  {dayjs(timestamp).format("HH:MM")}
                </p>
              </div>
            </div>
          );
        return (
          <div
            key={id}
            className="max-w-[90%] space-y-1 rounded-lg bg-secondary-50 p-3 text-secondary-800"
          >
            <p>{content}</p>
            <p className="text-end text-xs text-secondary-600">
              {dayjs(timestamp).format("HH:MM")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
