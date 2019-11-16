import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.css']
})
export class QuestionnairesComponent implements OnInit {

  loading$: Observable<boolean>;
  questionnaire$: Observable<Questionnaire[]>;

  // private property to store dialog reference
  private _questionnaireDialog: MatDialogRef<DialogQuestionnaireComponent>;

  // tableau de questionnaires
  private _questionnaires: Questionnaire[];

  constructor(private questionnaireService: QuestionnaireService, private _dialog: MatDialog) {
    this.questionnaire$ = questionnaireService.entities$;
    this.loading$ = questionnaireService.loading$;
    this._questionnaires = [];
  }

  ngOnInit() {
    this.getQuestionnaires()
      .subscribe((questionnaires: Questionnaire[]) => this._questionnaires = questionnaires);
  }

  add(questionnaire: Questionnaire): Observable<Questionnaire[]> {
    this.questionnaireService.add(questionnaire);
    return this.questionnaire$;
  }

  delete(questionnaire: Questionnaire) {
    this.questionnaireService.delete(questionnaire.id);
  }

  getQuestionnaires(): Observable<Questionnaire[]>  {
    return this.questionnaireService.getAll();
  }

  update(questionnaire: Questionnaire) {
    this.questionnaireService.update(questionnaire);
  }

  get questionnaires(): Questionnaire[] {
    return this._questionnaires;
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


