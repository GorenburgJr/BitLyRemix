import { PieChart, Pie, Cell } from "recharts";

interface DevicePieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];



export default function UniversalStatsComponent({ data }: DevicePieChartProps) {
  
  data = Object.entries(data).map(([name, value]) => ({ name, value }));

  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
