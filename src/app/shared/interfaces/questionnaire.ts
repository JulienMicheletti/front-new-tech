export interface Questionnaire {
  id?: string;
  title: string;
  nb: number;
  level: string;
  category: string;
  questionnaire: Question[];
}

export interface Question {
  title: string;
  choices: Choice[];
  response: string;
}

export interface Choice {
  choice: string;
}
