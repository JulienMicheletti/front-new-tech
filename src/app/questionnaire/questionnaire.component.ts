import {Component, forwardRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnairesService} from '../shared/services/questionnaire.service';
import {filter, flatMap, map} from 'rxjs/operators';
import {Choice, Player, Question, Questionnaire} from '../shared/interfaces/questionnaire';
import {Form, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DialogPseudoComponent} from '../shared/dialog-pseudo/dialog-pseudo.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {

  // questionnaire sur lequel on fait le quizz
  private _questionnaire: Questionnaire;

  private _questionnaireOriginal: Questionnaire;

  private _score: number;

  // private property to store dialog reference
  private _pseudoDialog: MatDialogRef<DialogPseudoComponent>;

  constructor(private _route: ActivatedRoute, private _dialog: MatDialog, private _questionnairesService: QuestionnairesService,private _formBuilder: FormBuilder, private router: Router) {
    // this._questionnaire = QUESTIONNAIRES[ 0 ];
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._questionnairesService.fetchOne(id))
      )
      .subscribe((quizz: Questionnaire) => this._questionnaire = this.genererQuizz(quizz)), () => {
      this.router.navigate(['/home'])
    };
    this._score = 0;
  }

  genererQuizz(questionnaire: Questionnaire): Questionnaire {
    this._questionnaireOriginal = questionnaire;
    this._questionnaire = questionnaire;
    for (let question of this._questionnaire.questionnaire) {
      let tailleTabChoice = question.choices.length;
      let random = Math.floor(0 + Math.random() * (tailleTabChoice + 1 - 0));
      question.choices.splice(random, 0, new Choice(question.response));
    }
    return questionnaire;
  }


  /**
   * Returns private property _questionnaire
   */
  get questionnaire(): Questionnaire {
    return this._questionnaire;
  }


  onSubmit(tabRep: object) {
    let i = 0;
    for (let key in tabRep) {
      if (tabRep[key] == this._questionnaire.questionnaire[i].response) {
        // +1 quand le resultat est bon
        this._score += 1;
      }
      i++;
    }
    for (let question of this._questionnaire.questionnaire) {
      for (let i = 0; i < question.choices.length; i++) {
        if (question.choices[i].choice == question.response){
          question.choices.splice(i, 1);
        }
      }
    }
    this.openModel();
  }

  openModel() {
    console.log('ajout player');
    // open modal
    this._pseudoDialog = this._dialog.open(DialogPseudoComponent, {
      width: '500px',
      disableClose: true,
      autoFocus: true
    });

    this._pseudoDialog.afterClosed().pipe(
      filter(_ => !!_),
      flatMap(_ => this.addPlayer(_))
    ).subscribe(() => {this.router.navigate(['/scoreboard', this._questionnaire.id])});
  }

  addPlayer(pseudo: string): Observable<any> {
    let player: Player = {
      pseudo: pseudo,
      score: this._score
    }
    console.log(player);
    this._questionnaireOriginal.players.push(player);
    return this._questionnairesService.update(this._questionnaireOriginal, this._questionnaireOriginal.id);
  }

  ngOnInit(): void {
  }



}
