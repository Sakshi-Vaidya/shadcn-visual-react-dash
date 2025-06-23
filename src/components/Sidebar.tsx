
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  Tag, 
  BookOpen, 
  DollarSign, 
  Settings, 
  Moon,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: ShoppingCart, label: "Marketplace" },
    { icon: Package, label: "Orders" },
    { icon: Package, label: "Tracking" },
    { icon: Users, label: "Customers" },
    { icon: Tag, label: "Discounts" },
  ];

  const paymentItems = [
    { icon: BookOpen, label: "Ledger" },
    { icon: DollarSign, label: "Taxes" },
  ];

  const systemItems = [
    { icon: Settings, label: "Settings" },
    { icon: Moon, label: "Dark mode" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="font-semibold text-lg">Flup</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        {/* Marketing Section */}
        <div className="mb-6">
          <p className="text-xs uppercase text-gray-500 mb-3 font-medium">MARKETING</p>
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start text-left ${
                  item.active ? "bg-teal-50 text-teal-700" : "text-gray-600"
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <Separator className="my-4" />

        {/* Payments Section */}
        <div className="mb-6">
          <p className="text-xs uppercase text-gray-500 mb-3 font-medium">PAYMENTS</p>
          <nav className="space-y-1">
            {paymentItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-left text-gray-600"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <Separator className="my-4" />

        {/* System Section */}
        <div>
          <p className="text-xs uppercase text-gray-500 mb-3 font-medium">SYSTEM</p>
          <nav className="space-y-1">
            {systemItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-left text-gray-600"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-medium">Harper Nelson</p>
            <p className="text-xs text-gray-500">Admin Manager</p>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start text-left text-gray-600">
          <LogOut className="mr-3 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
