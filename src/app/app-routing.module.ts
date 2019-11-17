import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";
import {FormQuestionnaireComponent} from './form-questionnaire/form-questionnaire.component';
import {QuestionnairesComponent} from "./questionnaires/questionnaires.component";
import {UpdateQuestionnaireComponent} from './update-questionnaire/update-questionnaire.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'questionnaire', component: QuestionnaireComponent},
  { path: 'questionnaires/:id', component: QuestionnairesComponent },
  { path: 'questionnaires', component: QuestionnairesComponent },
  { path: 'ajouterQuestionnaire', component: FormQuestionnaireComponent },
  { path: 'voirQuizz/:id', component: QuestionnaireComponent },
  { path: 'editQuizz/:id', component: UpdateQuestionnaireComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
