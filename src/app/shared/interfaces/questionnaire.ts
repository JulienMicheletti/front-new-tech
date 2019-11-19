export class Questionnaire {
  public readonly id?: string;
  public readonly title: string;
  public readonly level: string;
  public readonly category: string;
  public readonly players: Player[];
  public readonly questionnaire: Question[];
}
export class Player {
  pseudo: string;
  score: number;
}

export class Choice {
  public readonly choice: string;
  constructor(choix: string) {
    this.choice = choix;
  }
}

export class Question {
  public  title: string;
  public choices: Choice[];
  public readonly response: string;

}
