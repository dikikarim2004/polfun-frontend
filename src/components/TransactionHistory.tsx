import { ArrowRight } from "lucide-react";

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: "Token Creation",
      name: "Awesome Meme Token",
      symbol: "AMT",
      creator: "0x1234...5678",
      timestamp: "2 mins ago",
    },
    {
      id: 2,
      type: "Token Launch",
      name: "Super Fun Token",
      symbol: "SFT",
      creator: "0x8765...4321",
      timestamp: "5 mins ago",
    },
  ];

  return (
    <div className="space-y-4">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="p-4 rounded-lg glass-card hover-scale cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-white">{tx.name} ({tx.symbol})</p>
              <p className="text-sm text-muted-foreground">{tx.creator}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-primary">{tx.type}</p>
              <p className="text-sm text-muted-foreground">{tx.timestamp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;