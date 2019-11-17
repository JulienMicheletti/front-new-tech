import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnaireService} from '../services/questionnaire.service';
import {flatMap, map} from 'rxjs/operators';
import {Questionnaire} from '../shared/interfaces/questionnaire';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  private _questionnaire: Questionnaire;

  constructor(private _route: ActivatedRoute, private _router: Router, private _questService: QuestionnaireService) {
    this._questionnaire = null;
  }

  ngOnInit() {
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._questService.getById(id))
      ).subscribe((quest: Questionnaire) => this._questionnaire = quest);

  }



}
