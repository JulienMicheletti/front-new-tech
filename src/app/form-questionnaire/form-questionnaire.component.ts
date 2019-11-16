import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Questionnaire} from '../interfaces/questionnaire';
import {Category} from '../interfaces/category';

@Component({
  selector: 'app-form-questionnaire',
  templateUrl: './form-questionnaire.component.html',
  styleUrls: ['./form-questionnaire.component.css']
})
export class FormQuestionnaireComponent implements OnInit {

  //Formulaire groupe pour le questionnaire
  private _questionnaireForm: FormGroup;

  // Model pour cast le form en questionnaire
  private _model: Questionnaire;

  // Event emmiter pour faire remonter le model
  private readonly _submit$: EventEmitter<Questionnaire>;

  // Event emiter pour dire que la dialog a fermé
  private readonly _cancel$: EventEmitter<void>;


  constructor(private _formBuilder: FormBuilder) {
    this._submit$ = new EventEmitter<Questionnaire>();
    this._cancel$ = new EventEmitter<void>();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this._questionnaireForm = this._formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      level: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      questionnaire: this._formBuilder.array([this.createQuestion() ])
    });
  }

  private createQuestion(): FormGroup {
    return this._formBuilder.group({
      title: ['', Validators.required],
      choices: this._formBuilder.array([this.createChoice()]),
      response: ['', Validators.required],
    });
  }

  private createChoice() {
    return this._formBuilder.group({
      choices: ['', Validators.required]
    });
  }

  addQuestion() {
    (this._questionnaireForm.get('questionnaire') as FormArray).push(this.createQuestion());
  }

  deleteQuestion(index) {
    (this._questionnaireForm.get('questionnaire') as FormArray).removeAt(index);
  }

  addChoice(question) {
    question.get('choices').push(this.createChoice());
  }

  deleteChoice(question, index) {
    question.get('choices').removeAt(index);
  }

  get questionnaireForm(): FormGroup {
    return this._questionnaireForm;
  }

  cancel() {
    this._cancel$.emit();
  }

  save(questionnaire: Questionnaire) {
    this._submit$.emit(questionnaire);
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Questionnaire) {
    this._model = model;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<Questionnaire> {
    return this._submit$;
  }

  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }


}
