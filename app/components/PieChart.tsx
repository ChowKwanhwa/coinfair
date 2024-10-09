// "use client";

// import * as React from "react";
// import { TrendingUp } from "lucide-react";
// import { Label, Pie, PieChart } from "recharts";
// import Image from 'next/image';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A donut chart with text";

// const chartData = [
//   { distributor: "Pre-seed", percentage: 2, fill: "var(--chart-1)" },
//   { distributor: "Series A Funding", percentage: 5, fill: "var(--chart-2)" },
//   { distributor: "Other Funding", percentage: 10, fill: "var(--chart-3)" },
//   { distributor: "Founder", percentage: 10, fill: "var(--chart-4)" },
//   { distributor: "Foundation", percentage: 15, fill: "var(--chart-5)" },
//   { distributor: "Marketing", percentage: 10, fill: "var(--chart-6)" },
//   { distributor: "Seed Round", percentage: 5, fill: "var(--chart-7)" },
//   { distributor: "Series B Funding", percentage: 3, fill: "var(--chart-8)" },
//   { distributor: "Team", percentage: 10, fill: "var(--chart-9)" },
//   { distributor: "IDO", percentage: 6, fill: "var(--chart-10)" },
//   { distributor: "Ecosystem", percentage: 10, fill: "var(--chart-11)" },
//   { distributor: "LP", percentage: 12, fill: "var(--chart-12)" },
//   { distributor: "Early Contributor", percentage: 2, fill: "var(--chart-13)" },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

// export function ShadcnPieChart() {
//   return (
//     <Card className="flex justify-between items-center border-none">
//       <div className="leftContiner flex-col justify-start items-start">
//         <CardHeader className="items-center pb-10 ">
//           <CardTitle className="text-[var(--chart-title) text-5xl ]">COINFAIR</CardTitle>
//           <CardDescription className="text-[var(--chart-sub) text-3xl]">
//             Machine made
//           </CardDescription>
//         </CardHeader>
//         <div className="dataTable text-[var(--chart-text)] grid grid-cols-3 gap-4">
//           {chartData.map((item, index) => (
//             <div key={index} className="flex items-center">
//               <div className={`colorBox w-4 h-4 bg-[var(--chart-${index + 1})] mr-2`}></div>
//               <p className="text-sm">{item.distributor} {item.percentage}%</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <CardContent className="w-96 h-96 pb-0 flex justify-center item-center">
//         <ChartContainer
//           config={chartConfig}
//           className="aspect-square max-h-[250px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={chartData}
//               dataKey="percentage"
//               nameKey="distributor"
//               innerRadius={60}
//               strokeWidth={5}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && typeof viewBox === 'object' && 'cx' in viewBox && 'cy' in viewBox && 
//                       typeof viewBox.cx === 'number' && typeof viewBox.cy === 'number') {
//                     const size = 80; // Adjust this value to change the logo size
//                     const yOffset = 20; // Offset to lower the image by 20px
//                     return (
//                       <foreignObject
//                         x={viewBox.cx - size / 2}
//                         y={viewBox.cy - size / 2 + yOffset}
//                         width={size}
//                         height={size}
//                       >
//                         <Image
//                           src="/logo.svg"
//                           alt="Logo"
//                           width={size}
//                           height={size}
//                           style={{
//                             maxWidth: '100%',
//                             height: 'auto',
//                           }}
//                         />
//                       </foreignObject>
//                     );
//                   }
//                   return null; // Return null if viewBox or its properties are not as expected
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }
