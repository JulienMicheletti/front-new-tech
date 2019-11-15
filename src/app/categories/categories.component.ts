import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {filter, flatMap} from 'rxjs/operators';
import {DialogCategoryComponent} from '../dialog-category/dialog-category.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  loading$: Observable<boolean>;
  categories$: Observable<Category[]>;

  // private property to store dialogStatus value
  private _dialogStatus: string;
  // private property to store dialog reference
  private _categoriesDialog: MatDialogRef<DialogCategoryComponent>;

  private _view: string;

  private _categories: Category[];


  constructor(private categoryService: CategoryService, private _dialog: MatDialog) {
    this.categories$ = categoryService.entities$;
    this.loading$ = categoryService.loading$;
    this._view = 'list';
    this._dialogStatus = 'inactive';
    this._categories = [];

  }

  ngOnInit() {
    this.categories();
    this.categories$.subscribe((categories: Category[]) => this._categories = categories);
  }

  add(category: Category): Observable<Category[]> {
    this.categoryService.add(category);
    return this.categories$;
  }

  delete(category: Category) {
    this.categoryService.delete(category.id);
  }

  categories() {
    this.categoryService.getAll();
  }

  update(category: Category) {
    this.categoryService.update(category);
  }

  /**
   * Returns private property _view
   */
  get view(): string {
    return this._view;
  }

  /**
   * Function to display modal
   */
  showDialog() {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._categoriesDialog = this._dialog.open(DialogCategoryComponent, {
      width: '500px',
      disableClose: true,
      autoFocus: true
    });

    this._categoriesDialog.afterClosed().pipe(
     filter(_ => !!_),
     flatMap(_ => this.add(_))
    ).subscribe((cate: Category[]) => this._categories = cate,
      _ => this._dialogStatus = 'inactive',
      () => this._dialogStatus = 'inactive'
    );


  }
}
