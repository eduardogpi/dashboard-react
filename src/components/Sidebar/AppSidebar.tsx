"use client"
import Image from "next/image";
import { Lock, KeySquare, Mailbox, Settings, ListTodo } from "lucide-react"
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

// Menu items.
const items = [
  {
    id: '123aslk',
    group: '1',
    title: "Sistema CEP",
    url: "../pesquisacep",
    icon: Mailbox,
  },
  {
    id: '3498dddd',
    group: '2',
    title: "Cumprimentos",
    url: "#",
    icon: ListTodo,
    subs: [
      {
        sub: '2-1',
        title: "Alvarás",
        url: "#",
        icon: KeySquare
      },
      {
        sub: '2-2',
        title: "Mandados",
        url: "#",
        icon: Lock
      }
    ],
  },
  {
    id: 'lkgj3434',
    group: '3',
    title: "Configurações",
    url: "#",
    icon: Settings,
  }
]

export function AppSidebar() {
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
              <SidebarMenuItem key="1">
                <SidebarMenuButton asChild variant="outline">
                  <Link href="../pesquisacep">
                    <Mailbox />
                    <span>CEP</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="2">
                <SidebarMenuButton asChild variant="outline">
                  <Link href="/dashboard/cumprimentos">
                    <ListTodo />
                    <span>Cumprimentos</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton key="2-1" asChild >
                      <Link href="/dashboard/cumprimentos/alvaras" className="flex gap-1 items-center" >
                        <KeySquare className="h-4 w-4" />
                        <span>Alvarás</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton key="2-2" asChild >
                      <Link href="/dashboard/cumprimentos/mandados" className="flex gap-1 items-center" >
                        <Lock className="h-4 w-4" />
                        <span>Mandados</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem key="3">
                <SidebarMenuButton asChild variant="outline">
                  <Link href="/dashboard/configuracoes">
                    <Settings />
                    <span>Configurações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  )
}
