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
  private addRequestUrl: string = this.baseUrl + "/prayer-requests/create";
  private getApprovedRequestsUrl: string = this.baseUrl + "/prayer-requests/view-approved";
  private getPendingRequestsUrl: string = this.baseUrl + "/prayer-requests/view-pending";
  private getDeniedRequestsUrl: string = this.baseUrl + "/prayer-requests/view-denied";
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  
  constructor(private http: HttpClient) { }

  addPrayerRequest(prayerRequest: PrayerRequest): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(this.addRequestUrl, prayerRequest, this.httpOptions)
      .pipe(tap(data => console.log("sending prayer request", data)), 
      catchError(this.handleError<PrayerRequest>('error sending request', null)))
  }

  getApprovedPrayerRequests(): Observable<PrayerRequest[]>{
    return this.http.get<PrayerRequest[]>(this.getApprovedRequestsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching requests")),
      catchError(this.handleError<PrayerRequest[]>('error getting approved prayer requests', null)))
  }

  getPendingPrayerRequests(): Observable<PrayerRequest[]>{
    return this.http.get<PrayerRequest[]>(this.getPendingRequestsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching requests")),
      catchError(this.handleError<PrayerRequest[]>('error getting pending prayer requests', null)))
  }

  getDeniedPrayerRequests(): Observable<PrayerRequest[]>{
    return this.http.get<PrayerRequest[]>(this.getDeniedRequestsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching requests")),
      catchError(this.handleError<PrayerRequest[]>('error getting denied prayer requests', null)))
  }

  approvePrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/prayer-requests/${id}/approve-request`, this.httpOptions)
    .pipe(tap(data => console.log("approving request")),
    catchError(this.handleError<PrayerRequest>('error approving prayer request', null)));
  }

  denyPrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/prayer-requests/${id}/deny-request`, this.httpOptions)
    .pipe(tap(data => console.log("denying request")),
    catchError(this.handleError<PrayerRequest>('error denying prayer request', null)));
  }

  pendingPrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/prayer-requests/${id}/pending-request`, this.httpOptions)
    .pipe(tap(data => console.log("pending request")),
    catchError(this.handleError<PrayerRequest>('error pending prayer request', null)));
  }

  deletePrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(this.baseUrl + `/prayer-requests/${id}/delete-request`, this.httpOptions)
      .pipe(tap(data => console.log("deleting prayer request")), 
      catchError(this.handleError<PrayerRequest>('error deleting request', null)))
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
