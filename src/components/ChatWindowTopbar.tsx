import { type FC } from "react";
import TopbarUserDetails from "./TopbarUserDetails";

interface Props {}

const ChatWindowTopbar: FC<Props> = ({}) => {
    return (
        <div className="p-4">
            <TopbarUserDetails />
        </div>
    );
};

export default ChatWindowTopbar;
