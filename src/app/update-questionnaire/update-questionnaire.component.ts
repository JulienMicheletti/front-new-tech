import { Component, OnInit } from '@angular/core';
import {DialogQuestionnaireComponent} from '../dialog-questionnaire/dialog-questionnaire.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnairesService} from '../services/questionnaire.service';
import {filter, flatMap, map} from 'rxjs/operators';
import {Questionnaire} from '../shared/interfaces/questionnaire';

@Component({
  selector: 'app-update-questionnaire',
  templateUrl: './update-questionnaire.component.html',
  styleUrls: ['./update-questionnaire.component.css']
})
export class UpdateQuestionnaireComponent implements OnInit {
  // private property to store dialog reference
  private _questionnairesDialog: MatDialogRef<DialogQuestionnaireComponent>;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _questionnairesService: QuestionnairesService, private _dialog: MatDialog) {
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._questionnairesService.fetchOne(id))
      )
      .subscribe((questionnaire: Questionnaire) => {
        this._questionnairesDialog = this._dialog.open(DialogQuestionnaireComponent, {
          width: '500px',
          disableClose: true,
          data: questionnaire
        });

        // subscribe to afterClosed observable to set dialog status and do process
        this._questionnairesDialog.afterClosed()
          .pipe(
            filter(_ => !!_),
            flatMap(_ => this._questionnairesService.update(_))
          )
          .subscribe(() => undefined, () => undefined, () => this._router.navigate([ '/questionnaires' ]));
      });
  }
}
