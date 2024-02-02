const CloseMenu = () => {
  return (
    <div className="space-y-2 relative">
      <div className="w-12 h-1.5 bg-primary rounded-lg absolute rotate-45"></div>
      <div className="w-12 h-1.5 bg-primary rounded-lg -rotate-45"></div>
    </div>
  );
};

export default CloseMenu;
