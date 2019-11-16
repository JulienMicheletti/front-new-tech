import { Injectable } from '@angular/core';
import {Questionnaire} from '../interfaces/questionnaire';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
  private readonly _backendURL: any;
  // private property to store default person
  private readonly _defaultQuestionnaire: Questionnaire;

  constructor(private _http: HttpClient) {
    this._defaultQuestionnaire = {
      level: 'level',
      title: 'title',
      nb: 3,
      category: 'category',
      questionnaire: [ {
        title: 'title',
        choices: [{
         choice: 'choice',
        }],
        response: 'response',
      }],
    };
    this._backendURL = {};

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
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
    return this._http.post<Questionnaire>(this._backendURL.allQuestionnaire, questionnaire, this._options());
  }

  /**
   * Function to update one person
   */
  update(questionnaire: Questionnaire): Observable<any> {
    return this._http.put<Questionnaire>(this._backendURL.onePeople.replace(':id', questionnaire.id), questionnaire, this._options());
  }

  /**
   * Function to delete one person for current id
   */
  delete(id: string): Observable<string> {
    return this._http.delete(this._backendURL.oneQuestionnaire.replace(':id', id))
      .pipe(
        map(_ => id)
      );
  }

  /**
   * Function to return request options
   */
  private _options(headerList: object = {}): any {
    return {headers: new HttpHeaders(Object.assign({'Content-Type': 'application/json'}, headerList))};
  }
}
