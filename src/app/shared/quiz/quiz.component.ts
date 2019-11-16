import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Questionnaire} from '../interfaces/questionnaire';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private _questionnaire: Questionnaire
  /**
   * Component constructor
   */
  constructor() {
  }

  @Input()
  set questionnaire(value: Questionnaire) {
    this._questionnaire = value;
  }

  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }

  ngOnInit(): void {
  }

}
