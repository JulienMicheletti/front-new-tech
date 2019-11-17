import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Questionnaire} from "../shared/interfaces/questionnaire";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogQuestionnaireComponent} from "../dialog-questionnaire/dialog-questionnaire.component";
import {QuestionnairesService} from "../services/questionnaire.service";
import {filter, flatMap} from "rxjs/operators";

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {

  // private property to store dialog reference
  private _questionnaireDialog: MatDialogRef<DialogQuestionnaireComponent>;

  // tableau de questionnaires
  private _questionnaires: Questionnaire[];

  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog) {
    this._questionnaires = [];
  }

  ngOnInit() {
    this.getQuestionnaires()
      .subscribe((questionnaires: Questionnaire[]) => this._questionnaires = questionnaires);
  }

  private add(questionnaire: Questionnaire): Observable<Questionnaire[]> {
    return this.questionnaireService
      .create(questionnaire)
      .pipe(
        flatMap(_ => this.questionnaireService.fetch())
      );
  }

  delete(questionnaire: Questionnaire) {
    this.questionnaireService.delete(questionnaire.id);
  }

  getQuestionnaires(): Observable<Questionnaire[]>  {
    return this.questionnaireService.fetch();
  }

  get questionnaires(): Questionnaire[] {
    return this._questionnaires;
  }

  /**
   * Function to display modal
   */
  showDialog() {
    // open modal
    this._questionnaireDialog = this._dialog.open(DialogQuestionnaireComponent, {
      width: '500px',
      disableClose: true,
      autoFocus: true
    });

    this._questionnaireDialog.afterClosed().pipe(
      filter(_ => !!_),
      flatMap(_ => this.add(_))
    ).subscribe((questionnaire: Questionnaire[]) => this._questionnaires = questionnaire);
  }
}


