import {  Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { DateMap } from "~/data/statistic.sort";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

function transformToChartData(dayMap: Record<number, number[]>): { date: string, count: number }[] {
  return Object.entries(dayMap).map(([day, timestamps]) => ({
    date: day,
    count: timestamps.length
  }));
}

export default function TimeStatsComponent({ data }: { data: DateMap }) {
  const year = 2025;
  const month = 5;
  const chartData = transformToChartData(data['timeStats'][year]?.[month] ?? {});
  return (
      <BarChart width={500} height={200} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#595656" />
      </BarChart>
  );
}
