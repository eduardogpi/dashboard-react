"use client"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export default function Header() {
    const pathname = usePathname()
    const pt = pathname.split('/')
    for(let i=0;i<pt.length;i++){
        pt[i] = capitalizeFirstLetter(pt[i]);
    }
    return (
        <nav className="bg-zinc-900 shadow-md w-full h-[57px] flex items-center gap-4">
            <SidebarTrigger />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem key="home">
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    {pt.map((item, index) => (
                        item && (
                            <Fragment key={index}>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
                            </Fragment>
                            


                    )))}
                </BreadcrumbList>
            </Breadcrumb>

        </nav>
    )
}