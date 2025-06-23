
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const ProductSalesChart = () => {
  const data = [
    { name: "1 Jul", grossMargin: 30, revenue: 38 },
    { name: "2 Jul", grossMargin: 45, revenue: 30 },
    { name: "3 Jul", grossMargin: 55, revenue: 20 },
    { name: "4 Jul", grossMargin: 42, revenue: 30 },
    { name: "5 Jul", grossMargin: 68, revenue: 52 },
    { name: "6 Jul", grossMargin: 45, revenue: 18 },
    { name: "7 Jul", grossMargin: 52, revenue: 35 },
    { name: "8 Jul", grossMargin: 38, revenue: 42 },
    { name: "9 Jul", grossMargin: 28, revenue: 32 },
    { name: "10 Jul", grossMargin: 48, revenue: 45 },
    { name: "11 Jul", grossMargin: 35, revenue: 45 },
    { name: "12 Jul", grossMargin: 58, revenue: 52 },
  ];

  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Product sales</h3>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-blue-600">Gross margin</span>
            <span className="text-2xl font-bold">$52,187</span>
            <ArrowUp className="h-4 w-4 text-green-500 ml-2" />
            <span className="text-sm text-green-500">2.5%</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Gross margin</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Revenue</span>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `${value} K`}
            />
            <Bar dataKey="grossMargin" fill="#3B82F6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="revenue" fill="#FB923C" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProductSalesChart;
