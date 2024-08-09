import { type FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
    profileImage?: string;
    contactNumber?: string;
}

const TopbarUserDetails: FC<Props> = ({ contactNumber }) => {
    return (
        <div className="flex items-center gap-x-4">
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4 className="text-sm font-bold tracking-wide">John Doe</h4>
        </div>
    );
};

export default TopbarUserDetails;
