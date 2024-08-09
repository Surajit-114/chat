import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function ContactSearchBar() {
    return (
        <div className="flex items-center justify-between p-1 border border-b-2 border-input rounded-md transition focus-within:border-b-2 focus-within:border-b-wh-teal">
            <Button variant="ghost">
                <Search className="h-5 w-5 text-slate-600" />
            </Button>
            <Input
                placeholder="Search"
                className="border-0 focus-visible:ring-transparent"
            />
        </div>
    );
}
