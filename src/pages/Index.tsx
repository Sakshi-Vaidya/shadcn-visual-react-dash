
import { useState } from "react";
import InfluencerSidebar from "@/components/InfluencerSidebar";
import Header from "@/components/Header";
import CampaignCard from "@/components/CampaignCard";
import RecentCampaignCard from "@/components/RecentCampaignCard";
import TransactionCard from "@/components/TransactionCard";
import InfluencerCard from "@/components/InfluencerCard";
import NotificationCard from "@/components/NotificationCard";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <CampaignCard />
              <TransactionCard />
            </div>
            <div className="space-y-6">
              <RecentCampaignCard />
              <InfluencerCard />
            </div>
          </div>
        );
      default:
        return <NotificationCard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <InfluencerSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
