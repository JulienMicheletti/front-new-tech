import { Component, OnInit } from '@angular/core';
import {Questionnaire} from "../shared/interfaces/questionnaire";
import {QuestionnairesService} from "../shared/services/questionnaire.service";
import {MatDialog} from "@angular/material/dialog";

import {ActivatedRoute, Router} from "@angular/router";
import {merge, Observable} from "rxjs";
import {filter, flatMap} from "rxjs/operators";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  private _questionnaire: Questionnaire;
  private _displayedColumns: string[] = ['pseudo', 'score'];

  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog,  private _route: ActivatedRoute, private router: Router) {

  }

  get questionnaire():Questionnaire  {
    return this._questionnaire;
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

  ngOnInit() {
    merge(
      this._route.params.pipe(
        filter(params => !!params.id),
        flatMap(params => this.questionnaireService.fetchOne(params.id)),
      ),
    )
      .subscribe((questionnaire: any) => this._questionnaire = questionnaire, error => {this.router.navigate(['/home'])});
  }


}
