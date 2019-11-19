import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './shared/quiz/quiz.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
];
import { FormQuestionnaireComponent } from './shared/form-questionnaire/form-questionnaire.component';
import { DialogQuestionnaireComponent } from './shared/dialog-questionnaire/dialog-questionnaire.component';
import {MatTabsModule} from "@angular/material/tabs";
import { UpdateQuestionnaireComponent } from './shared/update-questionnaire/update-questionnaire.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DialogPseudoComponent } from './shared/dialog-pseudo/dialog-pseudo.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';


// @ts-ignore
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
    UpdateQuestionnaireComponent,
    DialogPseudoComponent,
    ScoreboardComponent,
  ],
  entryComponents: [ DialogQuestionnaireComponent, DialogPseudoComponent ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
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
    MatGridListModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
