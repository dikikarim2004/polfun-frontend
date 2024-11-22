import { Card } from "@/components/ui/card";
import { useState } from "react";
import MemeDetails from "./MemeDetails";

interface MemeCardProps {
  name: string;
  symbol: string;
  description: string;
  image: string;
  price: string;
  change24h: number;
  marketCap?: string;
  holders?: number;
  totalSupply?: string;
}

const MemeCard = ({ name, symbol, description, image, price, change24h, marketCap, holders, totalSupply }: MemeCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card 
        className="glass-card hover-scale p-4 cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="flex items-start gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-white">{name}</h3>
                <p className="text-sm text-muted-foreground">${symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">${price}</p>
                <p className={`text-sm ${change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {change24h > 0 ? '+' : ''}{change24h}%
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>
      </Card>

      <MemeDetails
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        meme={{
          name,
          symbol,
          description,
          image,
          price,
          change24h,
          marketCap,
          holders,
          totalSupply,
        }}
      />
    </>
  );
};

export default MemeCard;