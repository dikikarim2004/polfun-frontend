import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MemeSearch = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <Input
        placeholder="Search for memecoins..."
        className="pl-10 h-12 glass-card text-lg"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default MemeSearch;