import { LineChart } from "@mui/x-charts";

const CoinPriceChart = () => {
  return (
    <LineChart
      xAxis={[
        {
          tickNumber: 1,
          scaleType: "utc",
          dataKey: "x",
          min: new Date(2024, 8, 24),
          max: new Date(2024, 8, 29),
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 20,
          dataKey: "y",
        },
      ]}
      series={[{ dataKey: "y" }]}
      dataset={[
        { x: new Date(2024, 8, 24), y: 13 },
        { x: new Date(2024, 8, 25), y: 10 },
        { x: new Date(2024, 8, 26), y: 15 },
        { x: new Date(2024, 8, 27), y: 2 },
        { x: new Date(2024, 8, 28), y: 5 },
        { x: new Date(2024, 8, 29), y: 8 },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ horizontal: true }}
    />
  );
};

export default CoinPriceChart;
