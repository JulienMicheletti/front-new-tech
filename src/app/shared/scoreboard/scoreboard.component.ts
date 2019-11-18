import { Component, OnInit } from '@angular/core';
import {Questionnaire} from "../interfaces/questionnaire";
import {QuestionnairesService} from "../../services/questionnaire.service";
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
  // tableau de questionnaires
  private _questionnaire: Questionnaire;
  public chartType: string = 'doughnut';
  displayedColumns: string[] = ['pseudo', 'score'];
  tab: number[];

  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog,  private _route: ActivatedRoute, private router: Router) {

  }

  getQuestionnaire(id: string): Observable<Questionnaire>  {
    return this.questionnaireService.fetchOne(id);
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
