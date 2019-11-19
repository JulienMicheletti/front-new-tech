import {Component, forwardRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionnairesService} from '../services/questionnaire.service';
import {filter, flatMap, map} from 'rxjs/operators';
import {Choice, Questionnaire} from '../shared/interfaces/questionnaire';
import {Form, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, NgForm} from '@angular/forms';
import {DialogQuestionnaireComponent} from '../dialog-questionnaire/dialog-questionnaire.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DialogPseudoComponent} from '../shared/dialog-pseudo/dialog-pseudo.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {

  // questionnaire sur lequel on fait le quizz
  private _questionnaire: Questionnaire;

  private _score: number;

  // private property to store dialog reference
  private _pseudoDialog: MatDialogRef<DialogPseudoComponent>;

  // tableau dans lequel on enregistre les reponses du formulaires
  private _reponses: string[];

  constructor(private _route: ActivatedRoute, private _dialog: MatDialog, private _questionnairesService: QuestionnairesService, private _formBuilder: FormBuilder, private router: Router) {
    // this._questionnaire = QUESTIONNAIRES[ 0 ];
    this._route.params
      .pipe(
        map((params: any) => params.id),
        flatMap((id: string) => this._questionnairesService.fetchOne(id))
      )
      .subscribe((quizz: Questionnaire) => this._questionnaire = this.genererQuizz(quizz)),  () => {this.router.navigate(['/home'])};
    this._reponses = [];
    this._score = 0;
  }

  genererQuizz(questionnaire: Questionnaire): Questionnaire {
    for (let question of questionnaire.questionnaire) {
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

  onSubmit(form: NgForm) {
    for (let i = 0; i < this._reponses.length; i++) {
      if (this._reponses[i] == this._questionnaire.questionnaire[i].response){
        // +1 quand le resultat est bon
        this._score += 1;
      }
    }
    console.log(this._score);

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
      flatMap(_ => )
    ).subscribe(() => {this.router.navigate(['/statistics', this.questionnaire.id])});
  }


  ajouterReponse(rep: string) {
    this._reponses.push(rep);
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }



}
