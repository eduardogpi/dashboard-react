"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"
const data = [
    {
        name: 'POG',
        uv: 4000,
        pv: 2400,
        
    },
    {
        name: 'Núcleo',
        uv: 500,
        pv: 2500,
    },
    {
        name: 'CPP',
        uv: 2000,
        pv: 9800,
        
    },
    {
        name: 'Triagem',
        uv: 2780,
        pv: 3908,
        
    },
    
];
const chartConfig = {
    uv: {
        label: "Excedido",
        color: "#2563eb",
    },
    pv: {
        label: "Vagas",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export default function Grafico3() {
    return (
        <ChartContainer config={chartConfig} className="h-[200px] w-[300px]">
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="pv" stackId="a" fill="#03c771" />
                <Bar dataKey="uv" stackId="a" fill="#f73720" />
            </BarChart>
        </ChartContainer>
    )
}