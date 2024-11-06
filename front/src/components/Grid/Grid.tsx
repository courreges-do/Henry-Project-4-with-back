const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {children}
    </div>
  );
};

export default Grid;
