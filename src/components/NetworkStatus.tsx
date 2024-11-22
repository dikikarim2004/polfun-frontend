const NetworkStatus = () => {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-sm font-medium text-white">Polygon zkEVM</span>
    </div>
  );
};

export default NetworkStatus;