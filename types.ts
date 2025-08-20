export interface UniversalPieChartProps {
  data: { name: string; value: number }[];
}

export type ChartButton = {
  disabled: boolean;
  name: string
}

export interface RectTabsProps {
  data: ChartButton[]
}