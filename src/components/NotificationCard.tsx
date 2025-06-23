
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Notification {
  id: number;
  user: string;
  action: string;
  time: string;
  avatar: string;
  type: "missing" | "campaign" | "payment";
}

const NotificationCard = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      user: "Missing Inc.",
      action: "send you campaign request",
      time: "2 minutes ago",
      avatar: "https://i.pravatar.cc/32?img=7",
      type: "missing"
    },
    {
      id: 2,
      user: "Aminoc.",
      action: "reach 2x than the target!",
      time: "2 minutes ago",
      avatar: "https://i.pravatar.cc/32?img=8",
      type: "campaign"
    },
    {
      id: 3,
      user: "Foxo.",
      action: "campaign is started",
      time: "2 minutes ago",
      avatar: "https://i.pravatar.cc/32?img=9",
      type: "campaign"
    },
    {
      id: 4,
      user: "Astrazendo.",
      action: "is sending payment request",
      time: "2 minutes ago",
      avatar: "https://i.pravatar.cc/32?img=10",
      type: "payment"
    },
    {
      id: 5,
      user: "Onoiml.",
      action: "is sending payment request",
      time: "2 minutes ago",
      avatar: "https://i.pravatar.cc/32?img=11",
      type: "payment"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Notifications</h2>
          <p className="text-sm text-gray-500">You currently have "1 request"</p>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 border rounded-md text-sm"
          />
          <select className="px-3 py-1 border rounded-md text-sm">
            <option>All</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-4 border-b">
        <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">All</button>
        <button className="pb-2 text-gray-500">System</button>
        <button className="pb-2 text-gray-500">Activity</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <img 
                src={notification.avatar} 
                alt={notification.user}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm">
                  <span className="font-medium">{notification.user}</span>{" "}
                  {notification.action}
                </p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="text-xs">
                Decline
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                Accept
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-3">Filters</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">Campaign</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">Sales</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">Payments</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">Invitations</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">Approval</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs">Declined</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
