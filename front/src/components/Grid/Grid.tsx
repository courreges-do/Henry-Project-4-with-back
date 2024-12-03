const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4 mx-auto max-w-7xl">
      {children}
    </div>
  );
};

export default Grid;
