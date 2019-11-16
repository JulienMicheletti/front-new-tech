import {Category} from '../shared/interfaces/category';

export class Questionnaire {
  public readonly id: string;
  public readonly title: string;
  public readonly level: string;
  public readonly category: Category;
  public readonly questionnaire: Question[];

}

export class Question {
  public readonly title: string;
  public readonly choices: string[];
  public readonly response: string;

}
