import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Questionnaire} from '../interfaces/questionnaire';
import {DialogQuestionnaireComponent} from '../../dialog-questionnaire/dialog-questionnaire.component';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-pseudo',
  templateUrl: './dialog-pseudo.component.html',
  styleUrls: ['./dialog-pseudo.component.css']
})
export class DialogPseudoComponent implements OnInit {

  //Formulaire groupe pour le questionnaire
  private _form: FormGroup;

  /**
   * Component constructor
   */
  constructor(private _dialogRef: MatDialogRef<DialogQuestionnaireComponent>, @Inject(MAT_DIALOG_DATA) private _pseudo: string, private _formBuilder: FormBuilder) {
    this.initForm();
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
  onSave(pseudoForm: NgForm) {
    this._dialogRef.close(pseudoForm.value['pseudo']);
  }

  private initForm() {
    this._form = this._formBuilder.group({
      pseudo: [''],
    });
  }

  get form(): FormGroup {
    return this._form;
  }
}
