import { Injectable } from '@angular/core';
import {
  EntityActionOptions,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Questionnaire } from '../interfaces/questionnaire';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../config/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class QuestionnaireService extends EntityCollectionServiceBase<Questionnaire> {

  /**
   * Permet de creer, retrouver, mettre a jour et surprimer les
   * questionnaire de la BD
   */
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Questionnaire', serviceElementsFactory);
  }

  getAll(options?: EntityActionOptions): Observable<Questionnaire[]> {
    return this.http.get<Questionnaire[]>(
      `${environment.apiUrl}/questionnaires`
    );
  }
}
