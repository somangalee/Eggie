import { cn } from "@/lib/utils";

interface TimerDisplayProps {
  timeRemaining: number;
  className?: string;
}

export function TimerDisplay({ timeRemaining, className }: TimerDisplayProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const displayTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      className={cn("font-pixel text-5xl md:text-7xl text-foreground tabular-nums", className)}
      data-testid="text-timer-display"
    >
      {displayTime}
    </div>
  );
}
