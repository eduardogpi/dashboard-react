"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"

const chartData = [
    { month: "Janeiro", furto: 186, roubo: 80 },
    { month: "Fevereiro", furto: 305, roubo: 200 },
    { month: "Março", furto: 237, roubo: 120 },
    { month: "Abril", furto: 73, roubo: 190 },
    { month: "Maio", furto: 209, roubo: 130 },
    { month: "Junho", furto: 214, roubo: 140 },
]

const chartConfig = {
    furto: {
        label: "Furto",
        color: "#ff5448",
    },
    roubo: {
        label: "Roubo",
        color: "#a20b00",
    },
} satisfies ChartConfig
export default function Grafico1() {
    return (
        <ChartContainer config={chartConfig} className="h-[200px] w-[300px]">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="furto" fill="var(--color-furto)" radius={3} />
                <Bar dataKey="roubo" fill="var(--color-roubo)" radius={3} />
            </BarChart>
        </ChartContainer>

    )

}