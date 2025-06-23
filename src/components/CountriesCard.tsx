
import { Card } from "@/components/ui/card";

const CountriesCard = () => {
  const countries = [
    { name: "Poland", percentage: "19%" },
    { name: "Austria", percentage: "15%" },
    { name: "Spain", percentage: "13%" },
    { name: "Romania", percentage: "12%" },
    { name: "France", percentage: "11%" },
    { name: "Italy", percentage: "11%" },
    { name: "Germany", percentage: "10%" },
    { name: "Ukraine", percentage: "9%" },
  ];

  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Sales by countries</h3>
        <div className="w-32 h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
          <div className="text-teal-600 text-2xl">🗺️</div>
        </div>
      </div>
      
      <div className="space-y-3">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-gray-700">{country.name}</span>
            </div>
            <span className="font-medium">{country.percentage}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CountriesCard;
