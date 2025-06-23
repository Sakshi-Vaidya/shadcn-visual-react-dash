
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div>
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="text-sm text-gray-500">Account details overview and analytics</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search something..." 
            className="pl-10 w-64"
          />
        </div>
        
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
        
        <div className="flex items-center space-x-2">
          <img 
            src="https://i.pravatar.cc/32?img=13" 
            alt="Joey Inc."
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Joey Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
