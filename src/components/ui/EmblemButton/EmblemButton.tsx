interface EmblemButtonProps {
  label: string;
  onClick?: () => void;
}

export function EmblemButton({ label, onClick }: EmblemButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg cursor-pointer transition-colors duration-200 hover:border-white/40"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
