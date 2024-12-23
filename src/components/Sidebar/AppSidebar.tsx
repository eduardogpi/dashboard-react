"use client"
import Image from "next/image";
import {Lock, KeySquare, Mailbox, Settings, ListTodo } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,


} from "@/components/ui/sidebar"
import Link from "next/link";
import {usePathname} from "next/navigation";
// Menu items.
const items = [
  {
    id:'123aslk',
    group: '1',
    title: "Sistema CEP",
    url: "../pesquisacep",
    icon: Mailbox,
  },
  {
    id:'3498dddd',
    group: '2',
    title: "Cumprimentos",
    url: "/dashboard/cumprimentos",
    icon: ListTodo,
    subs: [
      {
        sub:'2-1',
        title: "Alvarás",
        url: "/dashboard/cumprimentos/alvaras",
        icon: KeySquare
      },
      {
        sub: '2-2',
        title: "Mandados",
        url: "/dashboard/cumprimentos/mandados",
        icon: Lock
      }
    ],
  },
  {
    id:'lkgj3434',
    group: '3',
    title: "Configurações",
    url: "/dashboard/configuracoes",
    icon: Settings,
  }
]

export function AppSidebar() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <Sidebar className="">
      <SidebarHeader className="">
        <Link href="/dashboard" className="flex items-center">
          <Image src="/logo.svg" alt="logo" width="40" height="40"></Image>
          <span className="font-bold text-slate-200">System</span>
        </Link>

      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sistema</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.group}>
                  <SidebarMenuButton asChild variant="outline">
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.subs && (
                    <SidebarMenuSub key={item.id}>
                      
                      {item.subs.map((item2) => (
                        
                        <SidebarMenuSubItem key={item2.sub}>
                          <SidebarMenuSubButton asChild >
                            <Link href={item2.url} className="flex gap-1 items-center" >
                              <item2.icon className="h-4 w-4" />
                              <span>{item2.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>


              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}