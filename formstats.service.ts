import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { Element, Response } from './data-interfaces.module';

const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

@Injectable()
export class FormstatsService {

  private loginUrl       = 'http://localhost/formstats2/index.php/api/login';
  private logoutUrl      = 'http://localhost/formstats2/index.php/api/logout';
  private formsUrl       = 'http://localhost/formstats2/index.php/api/forms';
  private responsesUrl   = 'http://localhost/formstats2/index.php/api/responses';
  private updatFormUrl   = 'http://localhost/formstats2/index.php/api/updatform';
  private formByIdUrl    = 'http://localhost/formstats2/index.php/api/form';
  private qListUrl       = 'http://localhost/formstats2/index.php/api/questionlist';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  login (email: string, password: string): Observable<{}> {
    return this.http.post<string>(this.loginUrl, {'email': email, 'password': password})
      .pipe(
        catchError(this.handleError('login', []))
      );
  }

  logout (): Observable<{}> {
    return this.http.get<boolean>(this.logoutUrl)
      .pipe(
        catchError(this.handleError('logout', []))
      );
  }

  getForms (limit: number, offset: number): Observable<Element[]> {
    return this.http.get<Element[]>(this.formsUrl + '/?limit=' + limit + '&offset=' + offset)
    .pipe(
      catchError(this.handleError('forms', []))
    );
  }

  getResponses (id: number, limit: number, offset: number): Observable<Response[]> {
    return this.http.get<Response[]>(this.responsesUrl + '/?id=' + id + '&limit=' + limit + '&offset=' + offset)
    .pipe(
      catchError(this.handleError('responses', []))
    );
  }

  updatForm (data: Element): Observable<any> {
    return this.http.put(this.updatFormUrl, data, httpOptions)
    .pipe(
      catchError(this.handleError('updatForm', []))
    );
  }

  formById (id: number): Observable<any> {
    return this.http.get<Element>(this.formByIdUrl + '/?id=' + id)
    .pipe(
      catchError(this.handleError('formById', []))
    );
  }

  questionList(id: number): Observable<any> {
    return this.http.get<any>(this.qListUrl + '/?id=' + id)
    .pipe(
      catchError(this.handleError('questionList', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    };
  }

}

