import { Injectable } from '@angular/core';
import {
  EntityActionOptions,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Questionnaire } from '../shared/interfaces/questionnaire';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {defaultIfEmpty, filter, map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Logger} from "tslint/lib/runner";

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
  // private property to store all backend URLs
  private readonly _backendURL: any;
  // private property to store default questionnaire
  private readonly _defaultQuestionnaire: Questionnaire;

  constructor(private _http: HttpClient) {
    this._defaultQuestionnaire = {
      title: 'test',
      level: 'Facile',
      category: 'Animaux',
      player: [
        {
          pseudo: "pseudo",
          score: 20,
        }
      ],
      questionnaire: [
        {
          title: 'Question facile',
          choices: [
            {
              choice: 'Réponse fausse',
            },
            {
              choice: 'Réponse juste',
            },
          ],
          response: 'Réponse juste',
        }
      ],
    };
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  /**
   * Returns the default questionnaire value
   */
  get defaultQuestionnaire(): Questionnaire {
    return this._defaultQuestionnaire;
  }

  /**
   * Function to return list of questionnaire
   */
  fetch(): Observable<Questionnaire[]> {
    return this._http.get<Questionnaire[]>(this._backendURL.allQuestionnaires)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  fetchByCategory(category: string): Observable<Questionnaire[]> {
    return this._http.get<Questionnaire[]>(this._backendURL.allCategoryQuestionnaires.replace(':category', category));
  }

  /**
   * Function to return one questionnaire for current id
   */
  fetchOne(id: string): Observable<Questionnaire> {
    return this._http.get<Questionnaire>(this._backendURL.oneQuestionnaire.replace(':id', id));
  }

  /**
   * Function to create a new questionnaire
   */
  create(questionnaire: Questionnaire): Observable<any> {
    return this._http.post<Questionnaire>(this._backendURL.allQuestionnaires, questionnaire, this._options());
  }

  /**
   * Function to update one questionnaire
   */
  update(questionnaire: Questionnaire, id: string): Observable<any> {
    return this._http.put<Questionnaire>(this._backendURL.oneQuestionnaire.replace(':id', id), questionnaire, this._options());
  }

  /**
   * Function to delete one questionnaire for current id
   */
  delete(id: string): Observable<string> {
    return this._http.delete(this._backendURL.oneQuestionnaire.replace(':id', id))
      .pipe(
        map(_ => id),
      );
  }

  /**
   * Function to return request options
   */
  private _options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }

}
