"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import HeroBtn from "../buttons/HeroBtn";

const SearchModal = () => {
  const openLiveChatWidget = () => {
    // LiveChat widget - maximize the chat window
    if (
      window.LiveChatWidget &&
      typeof window.LiveChatWidget.call === "function"
    ) {
      window.LiveChatWidget.call("maximize");
    }
    // Fallback for older LiveChat API
    else if (
      window.LC_API &&
      typeof window.LC_API.open_chat_window === "function"
    ) {
      window.LC_API.open_chat_window();
    } else {
      console.log("LiveChat widget is not loaded yet");
    }
  };

  return (
    <>
      <div className="relative w-[100%] max-md:w-full">
        <div className={`gap-4 md:gap-2 mt-4 flex items-center justify-center`}>
          <HeroBtn />

          <Button
            onPress={openLiveChatWidget}
            color="secondary"
            className="px-12 py-8 rounded-[10px] text-md bg-color-secondary max-md:w-full font-inriaSerif font-[400] cursor-pointer"
            radius="sm"
          >
            Live Chat
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
