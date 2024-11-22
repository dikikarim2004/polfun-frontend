import { Search, Moon, Sun, Wallet } from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const { setTheme, theme } = useTheme();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setWalletAddress(accounts[0]);
      } else {
        console.error('No wallet found!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/og-image.svg" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            MemeGen
          </span>
        </Link>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search memecoins..."
              className="pl-10"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex items-center space-x-4">
          <Link to="/create" className="text-sm font-medium hover:text-primary transition-colors">
            Create Token
          </Link>
          <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Documentation
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {theme === "light" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {walletAddress ? (
            <Button variant="outline" className="ml-4">
              <Wallet className="h-4 w-4 mr-2" />
              {formatAddress(walletAddress)}
            </Button>
          ) : (
            <Button onClick={connectWallet} className="ml-4">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;