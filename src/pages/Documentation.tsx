import { Card } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-card p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Documentation</h1>
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>1. Connect your wallet to zkEVM Polygon network</p>
              <p>2. Navigate to the Create Token page</p>
              <p>3. Fill in your token details</p>
              <p>4. Launch your token for less than $2</p>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Token Creation</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>• Choose a unique name and symbol</p>
              <p>• Set initial supply and distribution</p>
              <p>• Configure trading parameters</p>
              <p>• Review and deploy your contract</p>
            </div>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Documentation;