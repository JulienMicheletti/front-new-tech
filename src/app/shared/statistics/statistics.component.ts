import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Player, Questionnaire} from "../interfaces/questionnaire";
import {QuestionnairesService} from "../../services/questionnaire.service";
import {ActivatedRoute, Router} from "@angular/router";
import {from, merge, Observable} from "rxjs";
import {filter, flatMap, map} from "rxjs/operators";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  // tableau de questionnaires
  private _sport: Questionnaire[];
  private _cinema: number;
  private _science: Questionnaire[];
  private _musique: Questionnaire[];
  public chartType: string = 'doughnut';
  displayedColumns: string[] = ['pseudo', 'score'];
  tab: number[];

  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog,  private _route: ActivatedRoute, private router: Router) {

  }

  getQuestionnaire(id: string): Observable<Questionnaire>  {
    return this.questionnaireService.fetchOne(id);
  }

  ngOnInit() {
    this.questionnaireService.fetchByCategory('sport').subscribe((questionnaire: any) => this._sport = questionnaire);
    this.questionnaireService.fetchByCategory('cinema').subscribe((questionnaire: Questionnaire[]) => this._cinema = questionnaire.length);
    this.questionnaireService.fetchByCategory('science').subscribe((questionnaire: any) => this._science = questionnaire);
    this.questionnaireService.fetchByCategory('musique').subscribe((questionnaire: any) => this._musique = questionnaire);
  }

  public chartDatasets: Array<any> = [
    {
      data: [9, 50, 100, 40], label: 'Statistiques' }
  ];

  public chartLabels: Array<any> = ['Sport', 'Cinéma', 'Sciences', 'Musique'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: false
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
