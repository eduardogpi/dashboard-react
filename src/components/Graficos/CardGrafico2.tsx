import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import Grafico2 from "./Grafico2"
import { DropDownGraf2 } from "./DropDownGraf2"

export default function CardGrafico2(){
    return(
        <Card className="w-[340px] h-[285px]">
            <CardHeader className="px-1 ms-3 py-2">
                <CardTitle className="flex justify-between items-center"><span>Cumprimentos</span><DropDownGraf2/></CardTitle>
                <CardDescription>Para o ano de 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <Grafico2/>
            </CardContent>
        </Card>
    )
}