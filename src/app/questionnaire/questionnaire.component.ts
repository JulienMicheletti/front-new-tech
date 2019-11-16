import { Component, OnInit } from '@angular/core';
import {QUESTIONNAIRES} from "../_static/questionnaires";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  // private property to store questionnaire value
  private _questionnaire: any;

  /**
   * Component constructor
   */
  constructor() {
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
  ngOnInit() {
  }

}
