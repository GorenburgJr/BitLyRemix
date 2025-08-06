import { PieChart, Pie } from "recharts";

interface DevicePieChartProps {
  data: { name: string; value: number }[];
}


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
      
    </PieChart>
  );
  
}

