import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import { entityConfig } from './shared/entity/entity-metadata';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSidenavModule, MatSliderModule,
  MatToolbarModule,
  MatTreeModule,
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './shared/quiz/quiz.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import {CategoryComponent} from "./category/category.component";
import {CategoriesComponent} from "./categories/categories.component";
import {DialogCategoryComponent} from "./dialog-category/dialog-category.component";
import {FormCategoryComponent} from "./form-category/form-category.component";
const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];
import {Sidenav} from './sideNavBar/sidenav';
import {defaultDataServiceConfig } from './config/configDataService';
import { FormQuestionnaireComponent } from './form-questionnaire/form-questionnaire.component';
import { DialogQuestionnaireComponent } from './dialog-questionnaire/dialog-questionnaire.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoriesComponent,
    FormCategoryComponent,
    HomeComponent,
    DialogCategoryComponent,
    QuizComponent,
    QuestionnaireComponent,
    QuestionnairesComponent,
    QuestionnairesComponent,
    Sidenav,
    FormQuestionnaireComponent,
    DialogQuestionnaireComponent,
  ],
  entryComponents: [ DialogCategoryComponent, Sidenav, DialogQuestionnaireComponent ],

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
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatTreeModule,
    MatSidenavModule,
    NgbModule,
    MatGridListModule,
    MatSidenavModule,


  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
