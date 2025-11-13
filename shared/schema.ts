import { z } from "zod";

export type Difficulty = "soft" | "medium" | "hard";
export type TimerState = "idle" | "running" | "paused" | "completed";
export type GameStep = "crack" | "whisk" | "heat" | "pour" | "stir" | "plate";

export const DIFFICULTY_TIMES = {
  soft: 3 * 60,
  medium: 6 * 60,
  hard: 10 * 60,
} as const;

export const DIFFICULTY_LABELS = {
  soft: "SOFT (3 min)",
  medium: "MEDIUM (6 min)",
  hard: "HARD (10 min)",
} as const;

export const GAME_STEPS: GameStep[] = ["crack", "whisk", "heat", "pour", "stir", "plate"];

export const GAME_STEP_LABELS = {
  crack: "Crack the egg",
  whisk: "Whisk it up",
  heat: "Heat the pan",
  pour: "Pour into pan",
  stir: "Stir gently",
  plate: "Plate it up",
} as const;

export interface TimerSettings {
  difficulty: Difficulty;
  timeRemaining: number;
  state: TimerState;
}

export interface GameState {
  currentStep: number;
  score: number;
  isComplete: boolean;
  stepStartTime: number;
}

export interface ScoreEntry {
  score: number;
  date: string;
}

export interface AppSettings {
  theme: "light" | "dark";
  soundEnabled: boolean;
  difficulty: Difficulty;
  highScore: number;
  gameScores: ScoreEntry[];
}

export const defaultSettings: AppSettings = {
  theme: "light",
  soundEnabled: true,
  difficulty: "medium",
  highScore: 0,
  gameScores: [],
};
