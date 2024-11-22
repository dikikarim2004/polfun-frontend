import { useState } from "react";
import { Card } from "@/components/ui/card";
import TokenCreator from "@/components/TokenCreator";
import TokenDistribution from "@/components/TokenDistribution";
import TransactionHistory from "@/components/TransactionHistory";
import WalletConnect from "@/components/WalletConnect";
import MemeCard from "@/components/MemeCard";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Extended sample memecoin data
const SAMPLE_MEMECOINS = [
  {
    id: 1,
    name: "Doge Classic",
    symbol: "DOGC",
    description: "The original meme cryptocurrency making a comeback with new features",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    price: "0.00023",
    change24h: 15.4,
    marketCap: "$1.2M",
    holders: 2500,
    totalSupply: "1,000,000,000"
  },
  {
    id: 2,
    name: "Space Kitten",
    symbol: "SKIT",
    description: "To the moon with the most adorable token in the galaxy",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    price: "0.00012",
    change24h: -5.2,
    marketCap: "$800K",
    holders: 1800,
    totalSupply: "500,000,000"
  },
  {
    id: 3,
    name: "Banana Ape",
    symbol: "BAPE",
    description: "Join the ape revolution with the most appealing memecoin",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
    price: "0.00045",
    change24h: 23.7,
    marketCap: "$2.1M",
    holders: 3200,
    totalSupply: "750,000,000"
  },
  {
    id: 4,
    name: "Pixel Pup",
    symbol: "PPUP",
    description: "The first pixel art dog-themed token with gaming utilities",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    price: "0.00018",
    change24h: 8.9,
    marketCap: "$950K",
    holders: 2100,
    totalSupply: "888,888,888"
  },
  {
    id: 5,
    name: "Cosmic Cat",
    symbol: "CCAT",
    description: "Intergalactic feline token with NFT integration",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    price: "0.00034",
    change24h: -2.8,
    marketCap: "$1.5M",
    holders: 2800,
    totalSupply: "666,666,666"
  }
];

const ITEMS_PER_PAGE = 3;

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  const handleConnect = () => {
    setIsWalletConnected(true);
    toast({
      title: "Wallet Connected",
      description: "Successfully connected to zkEVM Polygon network",
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const filteredMemecoins = SAMPLE_MEMECOINS.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMemecoins.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMemecoins = filteredMemecoins.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2c] to-[#2d1f3f]">
      <Header onSearch={handleSearch} />
      
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
        <header className="text-center space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Create & Launch Tokens Instantly
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Memecoin Launch Platform
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create and launch new tokens in less than a minute for under $2
          </p>
        </header>

        <div className="grid gap-4 animate-fade-in">
          {paginatedMemecoins.map((coin) => (
            <MemeCard key={coin.id} {...coin} />
          ))}
        </div>

        {filteredMemecoins.length > ITEMS_PER_PAGE && (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        <main className="grid gap-6 md:grid-cols-2">
          <Card className="glass-card p-6 col-span-full md:col-span-1 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Create Token</h2>
              {isWalletConnected ? (
                <TokenCreator />
              ) : (
                <WalletConnect onConnect={handleConnect} />
              )}
            </div>
          </Card>

          <Card className="glass-card p-6 col-span-full md:col-span-1 animate-fade-in [animation-delay:200ms]">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Distribution</h2>
              {isWalletConnected ? (
                <TokenDistribution />
              ) : (
                <div className="text-center text-muted-foreground">
                  Connect wallet to distribute tokens
                </div>
              )}
            </div>
          </Card>

          <Card className="glass-card p-6 col-span-full animate-fade-in [animation-delay:400ms]">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Recent Launches</h2>
              <TransactionHistory />
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Index;