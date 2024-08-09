import { type FC } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface Props {}

const MessageBar: FC<Props> = ({}) => {
    return (
        <div className="flex justify-between px-4 py-2 resize-none">
            <Textarea
                placeholder="Type a message"
                className="border-0 focus-visible:ring-transparent"
            />
            <Button variant="ghost">
                <Send className="h-6 w-6 text-muted-foreground" />
            </Button>
        </div>
    );
};

export default MessageBar;
