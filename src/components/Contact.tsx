import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
    profileImage?: string;
    contactNumber?: string;
}

const Contact: FC<Props> = ({profileImage,contactNumber}) => {
    return (
        <div className="flex items-center gap-x-4">
            <Avatar className="h-12 w-12">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4 className="text-sm font-bold tracking-wide">{contactNumber}</h4>
        </div>
    );
};

export default Contact;
