import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Questionnaire} from "../interfaces/questionnaire";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private _questionnaire: Questionnaire;
  // private property to store delete$ value
  private readonly _delete$: EventEmitter<Questionnaire>;
  /**
   * Component constructor
   */
  constructor(private _router: Router) {
    this._delete$ = new EventEmitter<Questionnaire>();
  }

  @Input()
  set questionnaire(value: Questionnaire) {
    this._questionnaire = value;
  }

  /**
   * Returns private property _delete$
   */
  @Output('deleteQuestionnaire') get delete$(): EventEmitter<Questionnaire> {
    return this._delete$;
  }


  /**
   * Function to emit event to delete current questionnaire
   */
  delete(questionnaire: Questionnaire) {
    this._delete$.emit(questionnaire);
  }

  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }

  ngOnInit(): void {
  }

}
