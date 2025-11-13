import { Link } from "wouter";
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

import eggieMascot from "@assets/images/mascot.png";

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export function Header({ soundEnabled, onToggleSound }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b-4 border-border bg-card w-full">
      {/* removed max-w and mx-auto so logo hugs the edge */}
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        {/* Left Section: Logo + Nav */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/">
            <div
              className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 cursor-pointer"
              data-testid="link-home"
              role="link"
              aria-label="Go to Home"
            >
              <img
                src={eggieMascot}
                alt="Eggie mascot"
                className="w-8 h-8 object-contain"
              />
              <h1 className="font-pixel text-sm md:text-base text-primary">EGGIE</h1>
            </div>
          </Link>

          {/* Navigation Buttons */}
          <nav className="flex items-center gap-2" aria-label="Main navigation">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-4 font-pixel text-xs"
                data-testid="nav-home"
                aria-label="Home"
              >
                Home
              </Button>
            </Link>

            <Link href="/timer">
              <Button
                variant="outline"
                size="sm"
                className="border-4 font-pixel text-xs"
                data-testid="nav-timer"
                aria-label="Timer page"
              >
                Timer
              </Button>
            </Link>

            <Link href="/scramble">
              <Button
                variant="outline"
                size="sm"
                className="border-4 font-pixel text-xs"
                data-testid="nav-game"
                aria-label="Cooking game"
              >
                Cooking Game
              </Button>
            </Link>
          </nav>
        </div>

        {/* Right Section: Sound + Theme */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleSound}
            aria-label={soundEnabled ? "Mute sound" : "Unmute sound"}
            data-testid="button-toggle-sound"
            className="border-4"
          >
            {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            data-testid="button-toggle-theme"
            className="border-4"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}