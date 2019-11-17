import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Player, Questionnaire} from "../interfaces/questionnaire";
import {QuestionnairesService} from "../../services/questionnaire.service";
import {ActivatedRoute} from "@angular/router";
import {merge, Observable} from "rxjs";
import {filter, flatMap} from "rxjs/operators";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  // tableau de questionnaires
  private _questionnaire: Questionnaire;
  private _players: Player[];
  displayedColumns: string[] = ['pseudo', 'score'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataSource: MatTableDataSource<unknown>;


  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog,  private _route: ActivatedRoute) {
    this._players = [{pseudo: 'Julien', score:100}];
    this.dataSource = new MatTableDataSource(this._players);
  }

  getQuestionnaire(id: string): Observable<Questionnaire>  {
    return this.questionnaireService.fetchOne(id);
  }


  ngOnInit() {
    this.dataSource.sort = this.sort;
    merge(
      this._route.params.pipe(
        filter(params => !!params.id),
        flatMap(params => this.questionnaireService.fetchOne(params.id)),
      ),
    )
      .subscribe((questionnaire: any) => this._questionnaire = questionnaire);
  }

}
