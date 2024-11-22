import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coins } from "lucide-react";
import { useState } from "react";

const TokenDistribution = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleDistribute = () => {
    // Implement distribution logic here
    console.log("Distributing tokens:", { amount, recipient });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Recipient Address</label>
          <Input
            placeholder="Enter recipient address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="glass-card"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Amount</label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="glass-card"
          />
        </div>
      </div>
      <Button 
        onClick={handleDistribute} 
        className="w-full button-glow"
        size="lg"
      >
        <Coins className="w-5 h-5 mr-2" />
        Distribute Tokens
      </Button>
    </div>
  );
};

export default TokenDistribution;