import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";
import {FormQuestionnaireComponent} from './form-questionnaire/form-questionnaire.component';
import {QuestionnairesComponent} from "./questionnaires/questionnaires.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'questionnaires', component: QuestionnairesComponent },
  { path: 'questionnaire', component: QuestionnaireComponent},
  { path: 'questionnaires', component: QuestionnairesComponent },
  { path: 'ajouterQuestionnaire', component: FormQuestionnaireComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
