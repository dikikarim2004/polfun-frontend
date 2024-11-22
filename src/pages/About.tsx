import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-card p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">About MemeGen</h1>
        <div className="space-y-4 text-muted-foreground">
          <p>
            MemeGen is a platform that enables anyone to create and launch memecoins
            instantly for less than $2 in under a minute.
          </p>
          <p>
            Built on zkEVM Polygon network, our platform offers a fair and
            accessible launch system for early memecoin hunters.
          </p>
          <p>
            Our team is dedicated to making memecoin creation and trading
            accessible to everyone while maintaining security and transparency.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;