"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";


type TFormCep = {
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string,
    regiao: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}
type CardProps = {
    handleResult: Function ;
}
export function CardEndereco(props: CardProps) {
    const form = useForm<TFormCep>({
        defaultValues: {
            cep: '',
            logradouro: '',
            complemento: '',
            unidade: '',
            bairro: '',
            localidade: '',
            uf: '',
            estado: '',
            regiao: '',
            ibge: '',
            gia: '',
            ddd: '',
            siafi: ''
        }
    })

    function handleSubmitCEP(data: TFormCep):void {
        if (data.cep != '') {
            fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
                .then(res => res.json())
                .then(
                    (resultado) => {
                        if(resultado.erro){
                            props.handleResult(undefined)
                        }else{
                            props.handleResult(resultado)
                        }
                        

                    }
                ).catch(error => props.handleResult(undefined))
        }else{
            props.handleResult(undefined)
        }

    }
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className='flex items-center'><Search /> <span>Procurar endereço</span></CardTitle>
                <CardDescription >Acesse a API para pesquisa de endereços</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmitCEP)}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <FormField
                                    control={form.control}
                                    name="cep"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CEP:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="somente números" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex flex-col space-x-2'>
                                <Button type="submit" variant="ghost">Pesquisar</Button>
                            </div>
                        </div>

                    </form>
                </Form>

            </CardContent>
        </Card>
    )
}