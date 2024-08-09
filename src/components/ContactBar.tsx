import { cn } from "@/lib/utils";
import { type FC } from "react";
import { Contacts, ContactSearchBar } from ".";

interface Props {
    className?: string;
}

const ContactBar: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "h-full w-full px-4 border-r border-r-black/10 bg-background",
                className
            )}
        >
            <h1 className="p-2 text-2xl font-semibold">Chats</h1>
            <ContactSearchBar />
            <Contacts />
        </div>
    );
};

export default ContactBar;
