
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CampaignCard = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-2">Let's create campaign for your amazing brand!</h2>
      <p className="text-blue-100 mb-6">
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
        Go for it!
      </Button>
    </Card>
  );
};

export default CampaignCard;
