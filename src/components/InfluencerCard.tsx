
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Influencer {
  id: number;
  name: string;
  followers: string;
  avatar: string;
  platforms: string[];
}

const InfluencerCard = () => {
  const influencers: Influencer[] = [
    {
      id: 1,
      name: "Noah Wneritino",
      followers: "2.9M (SM) follower",
      avatar: "https://i.pravatar.cc/40?img=1",
      platforms: ["instagram", "facebook", "twitter"]
    },
    {
      id: 2,
      name: "Xin Qia No",
      followers: "2.8M (SM) follower",
      avatar: "https://i.pravatar.cc/40?img=2",
      platforms: ["instagram", "facebook", "twitter"]
    },
    {
      id: 3,
      name: "Noah Vneritino",
      followers: "2.9M (SM) follower",
      avatar: "https://i.pravatar.cc/40?img=3",
      platforms: ["instagram", "facebook", "twitter", "youtube"]
    },
    {
      id: 4,
      name: "Zahra Aulia",
      followers: "2.8M (SM) follower",
      avatar: "https://i.pravatar.cc/40?img=4",
      platforms: ["instagram", "facebook", "twitter"]
    },
    {
      id: 5,
      name: "Emerson Melig",
      followers: "2.8M (SM) follower",
      avatar: "https://i.pravatar.cc/40?img=5",
      platforms: ["instagram", "facebook", "twitter"]
    },
    {
      id: 6,
      name: "Syarifiahla Pal",
      followers: "2.8M (SM) follower",
      avatar: "https://i.pravatar.cc/40?img=6",
      platforms: ["instagram", "facebook", "twitter", "youtube"]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Find Influencer for Your Campaign</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          We help you find the suitable influencer to match with your brand
        </p>
        <div className="flex space-x-2">
          <Input placeholder="Search username" className="flex-1" />
          <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Influencer</h3>
          <button className="text-blue-600 text-sm">See All Influencer</button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {influencers.map((influencer) => (
            <Card key={influencer.id} className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src={influencer.avatar} 
                  alt={influencer.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium text-sm">{influencer.name}</h4>
                  <p className="text-xs text-gray-500">{influencer.followers}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {influencer.platforms.map((platform, index) => (
                    <div key={index} className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 text-xs"
                >
                  Add to Campaign
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;
