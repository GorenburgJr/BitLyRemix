import { PieChart, Pie, Cell, LabelList, Tooltip } from "recharts";

interface DevicePieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];



export default function UniversalStatsComponent({ data }: DevicePieChartProps) {

  return (
    <PieChart width={250} height={250}  >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={80}
        fill="#595656"
      >
      </Pie>

      <Tooltip
      active={true}
      cursor={{ fill: '#595656' }}
      formatter={(value, name) => `${value} - ${name}`}
    />
    </PieChart>
  );
  
}

