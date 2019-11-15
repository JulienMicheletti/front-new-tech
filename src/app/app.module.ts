import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity/entity-metadata';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FormCategoryComponent } from './form-category/form-category.component';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DialogCategoryComponent } from './dialog-category/dialog-category.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    FormCategoryComponent,
    HomeComponent,
    DialogCategoryComponent,
  ],
  entryComponents: [ DialogCategoryComponent ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
