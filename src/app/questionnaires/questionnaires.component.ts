import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Questionnaire} from '../shared/interfaces/questionnaire';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {filter, flatMap} from "rxjs/operators";
import {QuestionnaireComponent} from "../questionnaire/questionnaire.component";
import {QUESTIONNAIRES} from "../_static/questionnaires";

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }


}
