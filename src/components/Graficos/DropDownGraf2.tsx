"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,


} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropDownGraf2() {
    const [showJaneiro, setShowJaneiro] = React.useState<Checked>(true)
    const [showFevereiro, setShowFevereiro] = React.useState<Checked>(true)
    const [showMarco, setShowMarco] = React.useState<Checked>(true)
    const [showAbril, setShowAbril] = React.useState<Checked>(true)
    const [showMaio, setShowMaio] = React.useState<Checked>(true)
    const [showJunho, setShowJunho] = React.useState<Checked>(true)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="ghost"><EllipsisVertical /></Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Meses</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={showJaneiro} onCheckedChange={setShowJaneiro}>
                    Janeiro
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showFevereiro} onCheckedChange={setShowFevereiro}>
                    Fevereiro
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showMarco} onCheckedChange={setShowMarco}>
                    Março
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showAbril} onCheckedChange={setShowAbril}>
                    Abril
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showMaio} onCheckedChange={setShowMaio}>
                    Maio
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={showJunho} onCheckedChange={setShowJunho}>
                    Junho
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}