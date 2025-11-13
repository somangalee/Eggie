import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { useSound } from "@/hooks/useSound";
import HomePage from "@/pages/HomePage";
import TimerPage from "@/pages/TimerPage";
import ScrambleGamePage from "@/pages/ScrambleGamePage";
import NotFound from "@/pages/not-found";

function App() {
  const { soundEnabled, toggleSound, playTimerComplete, playClick, playSuccess } = useSound();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            <Header soundEnabled={soundEnabled} onToggleSound={toggleSound} />
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="/timer">
                <TimerPage playTimerComplete={playTimerComplete} playClick={playClick} />
              </Route>
              <Route path="/scramble">
                <ScrambleGamePage playClick={playClick} playSuccess={playSuccess} />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
