import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface WalletConnectProps {
  onConnect: () => void;
}

const WalletConnect = ({ onConnect }: WalletConnectProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-float">
        <Wallet className="w-8 h-8 text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">Connect Wallet</h3>
        <p className="text-muted-foreground">
          Connect your wallet to start creating tokens
        </p>
      </div>
      <Button 
        onClick={onConnect} 
        className="button-glow bg-gradient-to-r from-primary to-secondary"
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default WalletConnect;