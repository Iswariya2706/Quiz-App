export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string>; // questionId -> selectedOption
  isCompleted: boolean;
}

export type AnimationDirection = 1 | -1 | 0;