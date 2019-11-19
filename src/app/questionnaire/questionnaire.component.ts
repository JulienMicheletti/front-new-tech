import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnairesService} from '../shared/services/questionnaire.service';
import {flatMap, map} from 'rxjs/operators';
import {Choice, Questionnaire} from '../shared/interfaces/questionnaire';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  private _questionnaire: Questionnaire;

  private _quizzForm: FormGroup;

  constructor(private _route: ActivatedRoute, private _questionnairesService: QuestionnairesService, private _formBuilder: FormBuilder, private router: Router) {
    // this._questionnaire = QUESTIONNAIRES[ 0 ];
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._questionnairesService.fetchOne(id))
      )
      .subscribe((quizz: Questionnaire) => this._questionnaire = this.genererQuizz(quizz)),  error => {this.router.navigate(['/home'])};
  }

  genererQuizz(questionnaire: Questionnaire): Questionnaire {
    for (let question of questionnaire.questionnaire) {
      let tailleTabChoice = question.choices.length;
      let random = Math.floor(0 + Math.random() * (tailleTabChoice + 1 - 0));
      console.log(random);
      question.choices.splice(random, 0, new Choice(question.response));
    }
    return questionnaire;
  }


  /**
   * Returns private property _questionnaire
   */
  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }

  onSave() {

  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    // initForm();
  }



}
