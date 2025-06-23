
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

const TransactionCard = () => {
  const transactions = [
    {
      type: "Subscription Payment",
      date: "Today, August 25, 2024 (11:55 PM)",
      amount: "$1,200"
    },
    {
      type: "Influencer Income",
      date: "Today, August 25, 2024 (11:55 PM)",
      amount: "$1,200"
    },
    {
      type: "Influencer Income",
      date: "Today, August 25, 2024 (11:55 PM)",
      amount: "$1,200"
    },
  ];

  const stats = [
    { label: "$12,801", sublabel: "TRANSACTION", trend: "up" },
    { label: "$40,325", sublabel: "AMOUNT", trend: "up" },
    { label: "120 times", sublabel: "", trend: "down" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Last Transaction</h3>
        <button className="text-blue-600 text-sm">See Details</button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center gap-1">
              {stat.trend === "up" ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span className="font-bold text-lg">{stat.label}</span>
            </div>
            {stat.sublabel && (
              <p className="text-xs text-gray-500 uppercase">{stat.sublabel}</p>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="font-medium text-sm">{transaction.type}</p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className="font-semibold">{transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionCard;
