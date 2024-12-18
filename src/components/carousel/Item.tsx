
export const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ height: 240, borderRadius: 10, backgroundColor: "red" }}>
      {children}
    </div>
  );
};
