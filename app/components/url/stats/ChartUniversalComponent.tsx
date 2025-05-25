import { PieChart, Pie, Cell} from "recharts";

interface DevicePieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function UniversalStatsComponent({ data }: DevicePieChartProps) {
  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>
      <PieChart width={290} height={290}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          labelLine={false}
          // label={({ name, percent }) =>
          //   `${name} (${(percent * 100).toFixed(0)}%)`
          // }
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Tooltip /> */}
        {/* <Legend /> */}
      </PieChart>
    // </div>
  );
}
