
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const CategoryPieChart = () => {
  const data = [
    { name: "Living room", value: 25, color: "#8B5CF6" },
    { name: "Kids", value: 17, color: "#3B82F6" },
    { name: "Office", value: 13, color: "#06B6D4" },
    { name: "Bedroom", value: 12, color: "#10B981" },
    { name: "Kitchen", value: 9, color: "#F59E0B" },
    { name: "Bathroom", value: 8, color: "#EF4444" },
    { name: "Dining room", value: 6, color: "#EC4899" },
    { name: "Decor", value: 5, color: "#F97316" },
    { name: "Lighting", value: 3, color: "#84CC16" },
    { name: "Outdoor", value: 2, color: "#6366F1" },
  ];

  const CustomLegend = ({ payload }: any) => (
    <div className="grid grid-cols-2 gap-2 text-sm">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-gray-600">{entry.value}</span>
          </div>
          <span className="text-gray-800 font-medium">
            {data.find(d => d.name === entry.value)?.value}%
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <Card className="p-6 bg-white">
      <h3 className="text-lg font-semibold mb-6">Sales by product category</h3>
      <div className="flex items-center justify-between">
        <div className="w-64 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 ml-8">
          <CustomLegend payload={data.map(d => ({ value: d.name, color: d.color }))} />
        </div>
      </div>
    </Card>
  );
};

export default CategoryPieChart;
