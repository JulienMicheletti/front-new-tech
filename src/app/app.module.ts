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
const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];
import {defaultDataServiceConfig } from './config/configDataService';
import { FormQuestionnaireComponent } from './form-questionnaire/form-questionnaire.component';
import { DialogQuestionnaireComponent } from './dialog-questionnaire/dialog-questionnaire.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuestionnaireComponent,
    QuestionnairesComponent,
    QuestionnairesComponent,
    FormQuestionnaireComponent,
    DialogQuestionnaireComponent,
  ],
  entryComponents: [ DialogQuestionnaireComponent ],

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
    MatOptionModule,
    MatSelectModule,


  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent],

})
export class AppModule { }
