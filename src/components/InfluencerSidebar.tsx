
import { 
  Home,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  Shield,
  Users2,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const InfluencerSidebar = ({ currentPage, onPageChange }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", key: "home", active: true },
    { icon: Users, label: "Campaign", key: "campaign" },
    { icon: CreditCard, label: "Payments", key: "payments" },
    { icon: BarChart3, label: "Influencer", key: "influencer" },
    { icon: Settings, label: "Settings", key: "settings" },
  ];

  const connectedServices = [
    { label: "Connected Service", key: "connected" },
  ];

  const securityItems = [
    { icon: Shield, label: "Password & Security", key: "security" },
    { icon: Users2, label: "Team", key: "team" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* User Profile */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img 
            src="https://i.pravatar.cc/40?img=12" 
            alt="Jastinus Liaaksana"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">Jastinus Liaaksana</p>
            <p className="text-xs text-gray-500">Influencer Manager</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.key}
              variant={currentPage === item.key ? "secondary" : "ghost"}
              className={`w-full justify-start text-left ${
                currentPage === item.key ? "bg-blue-50 text-blue-700" : "text-gray-600"
              }`}
              onClick={() => onPageChange(item.key)}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>

        <Separator className="my-4" />

        <nav className="space-y-1">
          {connectedServices.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              className="w-full justify-start text-left text-gray-600"
              onClick={()=> onPageChange(item.key)}
            >
              <Bell className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>

        <Separator className="my-4" />

        <nav className="space-y-1">
          {securityItems.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              className="w-full justify-start text-left text-gray-600"
              onClick={() => onPageChange(item.key)}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Pro Access Banner */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
          <h3 className="font-semibold mb-2">Become Pro Access</h3>
          <p className="text-xs mb-3">Try our advanced for brand more better experience.</p>
          <Button 
            variant="secondary" 
            size="sm" 
            className="w-full bg-white text-blue-600 hover:bg-gray-50"
          >
            ↗ Upgrade Pro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfluencerSidebar;
