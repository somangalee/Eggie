import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  const steppedProgress = Math.floor(progress / 5) * 5;

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("w-full bg-muted border-4 border-border h-8 md:h-12 overflow-hidden", className)}
      data-testid="progressbar-timer"
    >
      <div
        className="h-full bg-primary transition-none"
        style={{ width: `${steppedProgress}%` }}
      />
    </div>
  );
}
