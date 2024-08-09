import { type FC } from "react";
import { ScrollArea } from "./ui/scroll-area";

interface Props {}

const ChatSpace: FC<Props> = ({}) => {
    return (
        <ScrollArea className="h-[calc(100vh-170px)] bg-[url('/wh_bg.jpg')] bg-contain bg-center"></ScrollArea>
    );
};

export default ChatSpace;
