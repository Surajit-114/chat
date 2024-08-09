import { ChatWindow, ContactBar } from ".";


export default function ChatLayout(){
    return (
        <div className="grid grid-cols-12 min-h-screen">
            <ContactBar className="col-span-3"/>
            <ChatWindow className="col-span-9"/>
        </div>
    )
}