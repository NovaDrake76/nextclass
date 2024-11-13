const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>root</h1>
      {children}
    </div>
  );
};

export default Layout;
