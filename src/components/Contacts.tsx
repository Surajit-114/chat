import { type FC } from "react";
import { Contact } from ".";
import { ScrollArea } from "./ui/scroll-area";

interface Props {}

const Contacts: FC<Props> = ({}) => {
    return (
        <ScrollArea className="h-[calc(100vh-150px)] my-4 py-2">
            <div className="space-y-6">
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
                <Contact contactNumber="John Doe" />
                <Contact contactNumber="Jane Doe" />
            </div>
        </ScrollArea>
    );
};

export default Contacts;
