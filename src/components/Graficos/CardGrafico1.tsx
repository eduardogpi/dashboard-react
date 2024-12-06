import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DropDownGraf1 } from "./DropDownGraf1";
import Grafico1 from "./Grafico1";

export default function CardGrafico1() {
    return (
        <Card className="h-[285px] w-[340px]">
            <CardHeader className="px-1 ms-3 py-2">
                <CardTitle className="flex justify-between items-center"><span >Crimes contra patrimônio</span><DropDownGraf1 /></CardTitle>
                <CardDescription>Para o ano de 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <Grafico1 />
            </CardContent>
        </Card>
    )

}