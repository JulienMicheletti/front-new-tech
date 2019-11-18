import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnairesService} from '../services/questionnaire.service';
import {flatMap, map} from 'rxjs/operators';
import {Questionnaire} from '../shared/interfaces/questionnaire';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  private _questionnaire: Questionnaire;

  constructor(private _route: ActivatedRoute, private _questionnairesService: QuestionnairesService) {
    // this._questionnaire = QUESTIONNAIRES[ 0 ];
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._questionnairesService.fetchOne(id))
      )
      .subscribe((quizz: Questionnaire) => this._questionnaire = quizz);
  }


  /**
   * Returns private property _questionnaire
   */
  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}



}
