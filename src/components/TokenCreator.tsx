import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Rocket } from "lucide-react";

const TokenCreator = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const { toast } = useToast();

  const handleCreateToken = () => {
    // This would connect to your smart contract
    toast({
      title: "Token Created!",
      description: `Successfully created ${tokenName} (${tokenSymbol})`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Token Name</label>
          <Input
            placeholder="e.g. Awesome Meme Token"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="glass-card"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Token Symbol</label>
          <Input
            placeholder="e.g. AMT"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="glass-card"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Total Supply</label>
          <Input
            type="number"
            placeholder="e.g. 1000000"
            value={totalSupply}
            onChange={(e) => setTotalSupply(e.target.value)}
            className="glass-card"
          />
        </div>
      </div>
      <Button 
        onClick={handleCreateToken} 
        className="w-full button-glow bg-gradient-to-r from-primary to-secondary"
        size="lg"
      >
        <Rocket className="w-5 h-5 mr-2" />
        Launch Token
      </Button>
    </div>
  );
};

export default TokenCreator;