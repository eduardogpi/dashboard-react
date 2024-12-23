"use client"
import {LineChart, Line, CartesianGrid, XAxis} from "recharts"

import {ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart"

const chartData2 = [
    {month: "Janeiro", alvaras: 100, mandados: 650},
    {month: "Fevereiro", alvaras: 550, mandados: 400},
    {month: "Março", alvaras: 157, mandados: 200},
    {month: "Abril", alvaras: 349, mandados: 500},
    {month: "Maio", alvaras: 100, mandados: 200},
    {month: "Junho", alvaras: 670, mandados: 200}
]

const chartConfig2 = {
    alvaras: {
        label: "Alvarás",
        color: "#cccccc"
    },
    mandados: {
        label: "Mandados",
        color:"#666666"
    }
} satisfies ChartConfig

export default function Grafico2(){
    return(
        <ChartContainer config={chartConfig2} className="h-[200px] w-[300px]">
            <LineChart accessibilityLayer data={chartData2}>
                <CartesianGrid vertical={false}/>
                <XAxis
                    dataKey={"month"}
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0,3)}
                />
                <ChartTooltip content={<ChartTooltipContent/>}/>
                <ChartLegend content={<ChartLegendContent/>}/>
                <Line type="monotone" dataKey="alvaras" stroke="#019e43"/>
                <Line type="monotone" dataKey="mandados" stroke="#b80000"/>
            </LineChart>
        </ChartContainer>
    )
}