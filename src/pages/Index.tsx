
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import ProductSalesChart from "@/components/ProductSalesChart";
import CategoryPieChart from "@/components/CategoryPieChart";
import CountriesCard from "@/components/CountriesCard";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Time period</span>
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600">
              Add data
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total customers"
            value="567,899"
            change="2.6%"
            isPositive={true}
          />
          <MetricCard
            title="Total revenue"
            value="$3,465 M"
            change="0.6%"
            isPositive={true}
          />
          <MetricCard
            title="Total orders"
            value="1,136 M"
            change="0.2%"
            isPositive={false}
          />
          <MetricCard
            title="Total returns"
            value="1,789"
            change="0.12%"
            isPositive={true}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className="xl:col-span-2">
            <ProductSalesChart />
          </div>
          <div>
            <CountriesCard />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="mb-8">
          <CategoryPieChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
