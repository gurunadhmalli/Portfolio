type ChipProps = {
  children: React.ReactNode;
};

export default function Chip({ children }: ChipProps) {
  return (
    <li className="rounded-md border border-line-soft bg-bg-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </li>
  );
}
