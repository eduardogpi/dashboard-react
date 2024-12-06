import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "../ui/card";
import { TabEndereco } from "./TabEndereco";
import { MapPinCheckInside } from "lucide-react";
type TFormCep = {
    cep?: string | undefined,
    logradouro?: string | undefined,
    complemento?: string | undefined,
    unidade?: string | undefined,
    bairro?: string | undefined,
    localidade?: string | undefined,
    uf?: string | undefined,
    estado?: string | undefined,
    regiao?: string | undefined,
    ibge?: string | undefined,
    gia?: string | undefined,
    ddd?: string | undefined,
    siafi?: string | undefined
}
type CardTabProps = {
    resultado: TFormCep
}
export default function CardTabEndereco(props: CardTabProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><MapPinCheckInside /><span>Endereço</span></CardTitle>
            </CardHeader>
            <CardContent>
                <TabEndereco resultado={props.resultado} />
            </CardContent>
            <CardFooter className="flex items-center justify-center">
                <Button variant="ghost">Salvar</Button>
            </CardFooter>
        </Card>
    );
}