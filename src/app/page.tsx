import { Button } from "@/components/ui/button";
import { HomeIcon, Mailbox } from "lucide-react";
import Link from "next/link";

export default function Home(){
    return(
        <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center gap-3">
            <Button className="w-30 h-30 flex p-5 rounded-lg" variant="ghost">
                <HomeIcon className="text-2xl"/>
                <Link href="/dashboard" className="text-xl">Dashboard</Link>
            </Button>
            <Button className="w-30 h-30 flex p-5 rounded-lg" variant="ghost">
                <Mailbox/>
                <Link href="/pesquisacep" className="text-xl">CEP</Link>
                
            </Button>
        </div>
    )
}