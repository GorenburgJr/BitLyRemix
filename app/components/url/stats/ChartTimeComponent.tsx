import { AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
  const chartData = transformToChartData(data[year]?.[month] ?? {});
  
  return (
    <ResponsiveContainer width='100%' height="100%">
      <BarChart width={600} height={290} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill={COLORS[0]} />
      </BarChart>
    </ResponsiveContainer>
    

  //   <ResponsiveContainer width={700} height={400} >
  //   <AreaChart data={chartData}
  //     margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
  //     <XAxis dataKey="date" />
  //     <YAxis />
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <Tooltip />
  //     {/* <Area dataKey="count" stroke="#8884d8" fill="#8884d8" /> */}
  //   </AreaChart>
  // </ResponsiveContainer>
  );
}
