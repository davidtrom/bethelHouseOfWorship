import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrayerRequest } from '../Models/prayer-request.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrayerRequestServiceService {

  baseUrl=environment.baseUrl;
  prayerRequest: PrayerRequest;
  private addRequestUrl: string = this.baseUrl + "/add-request";
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  
  constructor(private http: HttpClient) { }

  addPrayerRequest(prayerRequest: PrayerRequest): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(this.addRequestUrl, prayerRequest, this.httpOptions)
      .pipe(tap(data => console.log("sending prayer request")), 
      catchError(this.handleError<PrayerRequest>('error sending request', null)))
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
