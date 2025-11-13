import { useSpriteAnimation } from "@/hooks/useSpriteAnimation";
import eggMascot from "@assets/images/mascot.png";

interface EggSpriteProps {
  isAnimating?: boolean;
  size?: "sm" | "md" | "lg";
}

export function EggSprite({ isAnimating = false, size = "lg" }: EggSpriteProps) {
  const frame = useSpriteAnimation(2, 2, isAnimating);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32 md:w-40 md:h-40",
    lg: "w-40 h-40 md:w-56 md:h-56",
  };

  const rotationDegree = frame === 0 ? 0 : (frame % 2 === 0 ? -5 : 5);

  return (
    <div className="flex items-center justify-center" data-testid="sprite-egg-mascot">
      <img
        src={eggMascot}
        alt="Egg mascot"
        className={`${sizeClasses[size]} object-contain transition-none`}
        style={{
          transform: isAnimating ? `rotate(${rotationDegree}deg)` : "rotate(0deg)",
        }}
      />
    </div>
  );
}
