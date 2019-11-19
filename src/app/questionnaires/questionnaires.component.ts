import { Component, OnInit } from '@angular/core';
import {merge, Observable} from "rxjs";
import {Choice, Questionnaire} from '../shared/interfaces/questionnaire';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogQuestionnaireComponent} from "../shared/dialog-questionnaire/dialog-questionnaire.component";
import {QuestionnairesService} from "../shared/services/questionnaire.service";
import {filter, flatMap, tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Logger} from "tslint/lib/runner";

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {
  private _questionnaireDialog: MatDialogRef<DialogQuestionnaireComponent>;
  private _questionnaires: Questionnaire[];

  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog,  private _route: ActivatedRoute, private router: Router) {
    this._questionnaires = [];
  }

  private add(questionnaire: Questionnaire): Observable<Questionnaire[]> {
    return this.questionnaireService
      .create(questionnaire)
      .pipe(
        flatMap(_ => this.questionnaireService.fetch())
      );
  }

  delete(questionnaire: Questionnaire) {
    this.questionnaireService
      .delete(questionnaire.id)
      .subscribe(_ => this._questionnaires = this._questionnaires.filter(__ => __.id !== _));
  }

  get questionnaires(): Questionnaire[] {
    return this._questionnaires;
  }

  ngOnInit() {
    merge(
      this._route.params.pipe(
        filter(params => !!params.id),
        flatMap(params => this.questionnaireService.fetchByCategory(params.id)),
      ),
      this._route.params.pipe(
        filter(params => !params.id),
        flatMap(_ => this.questionnaireService.fetch()),
      )
    )
      .subscribe((questionnaires: any) => this._questionnaires = questionnaires, error => {this.router.navigate(['/home'])});
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


