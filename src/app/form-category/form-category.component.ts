import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../interfaces/category';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  private _categoryForm: FormGroup;

  private readonly _submit$: EventEmitter<Category>;
  private readonly _cancel$: EventEmitter<void>;
  private _model: Category;


  constructor(private formBuilder: FormBuilder) {
    this._submit$ = new EventEmitter<Category>();
    this._cancel$ = new EventEmitter<void>();
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Category) {
    this._model = model;
  }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Returns private property _form
   */
  get formCategory(): FormGroup {
    return this._categoryForm;
  }

  initForm() {
    this._categoryForm = new FormGroup({
      libelle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.compose ( [
        Validators.minLength(20), Validators.required])),
    });
  }

  onSubmitForm(category: Category){
    this._submit$.emit(category);
  }

  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and category
   */
  submit(category: Category) {
    this._submit$.emit(category);
  }


  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<Category> {
    return this._submit$;
  }

  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }
}
