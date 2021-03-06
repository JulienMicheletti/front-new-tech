import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Questionnaire} from '../interfaces/questionnaire';

@Component({
  selector: 'app-dialog-questionnaire',
  templateUrl: './dialog-questionnaire.component.html',
  styleUrls: ['./dialog-questionnaire.component.css']
})
export class DialogQuestionnaireComponent implements OnInit {

  /**
   * Component constructor
   */
  constructor(private _dialogRef: MatDialogRef<DialogQuestionnaireComponent>, @Inject(MAT_DIALOG_DATA) private _questionnaire: Questionnaire) {
  }

  /**
   * Returns person passed in dialog open
   */
  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to cancel the process and close the modal
   */
  onCancel() {
    this._dialogRef.close();
  }

  /**
   * Function to close the modal and send person to parent
   */
  onSave(questionnaire: Questionnaire) {
    this._dialogRef.close(questionnaire);
  }

}
