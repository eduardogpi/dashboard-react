import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DropDownGraf3 } from "./DropDownGraf3";
import Grafico3 from "./Grafico3";

export default function CardGrafico3() {
    return (
        <Card className="h-[285px] w-[340px]">
            <CardHeader className="px-1 ms-3 py-2">
                <CardTitle className="flex justify-between items-center"><span >Lotação Complexo Prisional</span><DropDownGraf3 /></CardTitle>
                <CardDescription>Para o ano de 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <Grafico3 />
            </CardContent>
        </Card>
    )

}