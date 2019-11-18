export class Questionnaire {
  public readonly id?: string;
  public readonly title: string;
  public readonly level: string;
  public readonly category: string;
  public readonly player: Player[];
  public readonly questionnaire: Question[];
}
export class Player {
  pseudo: string;
  score: number;
}

export class Choice {
  public readonly choice: string;
}

export class Question {
  public readonly title: string;
  public readonly choices: Choice[];
  public readonly response: string;

}
