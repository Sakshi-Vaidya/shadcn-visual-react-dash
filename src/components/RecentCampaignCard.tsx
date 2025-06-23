
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RecentCampaignCard = () => {
  const campaign = {
    name: "Blue Chips Chicago",
    date: "Today, August 29, 2024 (10:56 PM)",
    status: "Active",
    team: [
      "https://i.pravatar.cc/24?img=1",
      "https://i.pravatar.cc/24?img=2",
      "https://i.pravatar.cc/24?img=3"
    ]
  };

  return (
    <Card className="p-4 bg-yellow-50 border-yellow-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-yellow-800">Recent Campaign</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">{campaign.name}</h4>
          <p className="text-sm text-gray-600">{campaign.date}</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-2">
            {campaign.team.map((avatar, index) => (
              <img 
                key={index}
                src={avatar} 
                alt={`Team member ${index + 1}`}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{campaign.status}</span>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          See Campaign Details
        </Button>
      </div>
    </Card>
  );
};

export default RecentCampaignCard;
