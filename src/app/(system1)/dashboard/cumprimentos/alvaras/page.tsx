import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        id: '1',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },
    {
        id: '2',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },
    {
        id: '3',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },
    {
        id: '4',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },
    {
        id: '5',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },
    {
        id: '6',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },
    {
        id: '7',
        cpf: "000.000.000-00",
        dtnascimento: "00/00/0000",
        nome: "JOÃO DA SILVA",
        nomemae: "MARIA DA SILVA",
    },

]

export default function Alvaras() {
    return (
        <Table>
            <TableCaption>Alvarás cumpridos hoje (06/12/2024)</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">CPF</TableHead>
                    <TableHead>DATA NASCIMENTO</TableHead>
                    <TableHead>NOME</TableHead>
                    <TableHead>NOME MÃE</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((egresso) => (
                    <TableRow key={egresso.id}>
                        <TableCell className="font-medium">{egresso.cpf}</TableCell>
                        <TableCell>{egresso.dtnascimento}</TableCell>
                        <TableCell>{egresso.nome}</TableCell>
                        <TableCell>{egresso.nomemae}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}