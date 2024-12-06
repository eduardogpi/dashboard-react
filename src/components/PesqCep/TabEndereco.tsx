import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
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
  type TabProps = {
    resultado: TFormCep
}
  export function TabEndereco(props: TabProps) {
    
    return (
      <Table className=" w-[500px] rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">UF</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Logradouro</TableHead>
            <TableHead className="text-right">IBGE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow >
                <TableCell className={`font-medium ${!props?.resultado?.cep && 'text-center'}`} colSpan={(props?.resultado?.cep ? 1 : 4)}>{(props?.resultado?.uf ? props.resultado.uf : 'Nada encontrado')}</TableCell>
                {props?.resultado?.localidade && <TableCell>{props?.resultado?.localidade}</TableCell>}
                {props?.resultado?.logradouro  &&<TableCell>{props?.resultado?.logradouro}</TableCell>}
                {props?.resultado?.ibge &&<TableCell className="text-right">{props?.resultado?.ibge}</TableCell>}
              
            </TableRow>
        </TableBody>
      </Table>
    )
  }
