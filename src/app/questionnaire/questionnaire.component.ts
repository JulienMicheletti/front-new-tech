import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnairesService} from '../services/questionnaire.service';
import {flatMap, map} from 'rxjs/operators';
import {Questionnaire} from '../shared/interfaces/questionnaire';
import {QUESTIONNAIRES} from "../_static/questionnaires";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  private _questionnaire: Questionnaire;

  constructor() {
    // this._questionnaire = null;
    this._questionnaire = QUESTIONNAIRES[ 0 ];

  }

  /**
   * Returns private property _questionnaire
   */
  get questionnaire(): any {
    return this._questionnaire;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {}



}
