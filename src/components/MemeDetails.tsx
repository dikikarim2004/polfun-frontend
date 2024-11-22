import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Wallet } from "lucide-react";

interface MemeDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  meme: {
    name: string;
    symbol: string;
    description: string;
    image: string;
    price: string;
    change24h: number;
    marketCap?: string;
    holders?: number;
    totalSupply?: string;
  };
}

const MemeDetails = ({ isOpen, onClose, meme }: MemeDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{meme.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <img src={meme.image} alt={meme.name} className="w-24 h-24 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl text-white">{meme.symbol}</h3>
                  <p className="text-lg text-primary">${meme.price}</p>
                </div>
                <p className={`text-lg font-semibold ${meme.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {meme.change24h > 0 ? '+' : ''}{meme.change24h}%
                </p>
              </div>
              <p className="mt-4 text-muted-foreground">{meme.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-card p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Market Cap</p>
                  <p className="font-medium text-white">{meme.marketCap || '$0'}</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Holders</p>
                  <p className="font-medium text-white">{meme.holders || 0}</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card p-4">
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Supply</p>
                  <p className="font-medium text-white">{meme.totalSupply || '0'}</p>
                </div>
              </div>
            </Card>
          </div>

          <Button className="w-full button-glow" size="lg">
            Trade Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemeDetails;