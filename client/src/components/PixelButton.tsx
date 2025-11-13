import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  variant?: "default" | "primary" | "secondary";
  disabled?: boolean;
  testId?: string;
  ariaLabel?: string;
  className?: string;
}

export function PixelButton({
  children,
  onClick,
  selected = false,
  variant = "default",
  disabled = false,
  testId,
  ariaLabel,
  className,
}: PixelButtonProps) {
  const getVariant = () => {
    if (selected) return "default";
    if (variant === "primary") return "default";
    if (variant === "secondary") return "secondary";
    return "outline";
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={getVariant()}
      size="default"
      aria-label={ariaLabel}
      data-testid={testId}
      className={cn(
        "border-4 font-pixel text-xs md:text-sm",
        selected && "bg-primary text-primary-foreground border-primary-border",
        className
      )}
    >
      {children}
    </Button>
  );
}
