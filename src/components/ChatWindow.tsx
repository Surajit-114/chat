import { cn } from "@/lib/utils";
import { type FC } from "react";
import { ChatSpace, ChatWindowTopbar, MessageBar } from ".";
import { Separator } from "./ui/separator";

interface Props {
    className?: string;
}

const ChatWindow: FC<Props> = ({ className }) => {
    return (
        <div className={cn("h-full w-full", className)}>
            <ChatWindowTopbar />
            <Separator />
            <ChatSpace />
            <MessageBar />
        </div>
    );
};

export default ChatWindow;
