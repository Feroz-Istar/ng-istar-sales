import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConfiguration } from '../../app.constant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authentication(body): Observable<any> {
    console.log('called')
    return this.http.post<any>(AppConfiguration.ServerWithLoginUrl, body, httpOptions).pipe(
      tap((body: any) => this.log(body)),
      catchError(this.handleError<any>('addHero'))
    );
  }



  dummy(): Observable<any> {
    console.log('called')
    return this.http.get<any>("http://sales.talentify.in/istar/rest/sales_manager/3/team_analysis", httpOptions).pipe(
      tap((response: any) => this.log(response)),
      catchError(this.handleError<any>('addHero'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message)
  }
}




