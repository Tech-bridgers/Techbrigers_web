export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-badge px-4 py-1.5 text-sm font-semibold text-navy">
      {children}
    </span>
  );
}
