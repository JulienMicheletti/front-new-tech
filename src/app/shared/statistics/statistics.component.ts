import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Player, Questionnaire} from "../interfaces/questionnaire";
import {QuestionnairesService} from "../../services/questionnaire.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  // tableau de questionnaires
  private _questionnaire: Questionnaire[];
  private _sport: number;
  private _cinema: number;
  private _science: number;
  private _musique: number;
  private chartType: string = 'pie';

  constructor(private questionnaireService: QuestionnairesService, private _dialog: MatDialog,  private _route: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    this.questionnaireService.fetchByCategory('sport').subscribe((questionnaire: Questionnaire[]) => this._sport = questionnaire.length);
    this.questionnaireService.fetchByCategory('cinema').subscribe((questionnaire: Questionnaire[]) => this._cinema = questionnaire.length);
    this.questionnaireService.fetchByCategory('science').subscribe((questionnaire: Questionnaire[]) => this._science = questionnaire.length);
    this.questionnaireService.fetchByCategory('musique').subscribe((questionnaire: Questionnaire[]) => this._musique = questionnaire.length);
  }


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
