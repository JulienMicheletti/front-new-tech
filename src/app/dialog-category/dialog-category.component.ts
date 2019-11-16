import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Category} from "../shared/interfaces/category";

@Component({
  selector: 'app-dialog-category',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.css']
})
export class DialogCategoryComponent implements OnInit {

  /**
   * Component constructor
   */
  constructor(private _dialogRef: MatDialogRef<DialogCategoryComponent>, @Inject(MAT_DIALOG_DATA) private _category: Category) {
  }

  /**
   * Returns person passed in dialog open
   */
  get category(): Category {
    return this._category;
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
  onSave(category: Category) {
    this._dialogRef.close(category);
  }
}
