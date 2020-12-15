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

  baseUrl=environment.baseUrl + "/prayer-requests";
  prayerRequest: PrayerRequest;
  private addRequestUrl: string = this.baseUrl + "/create";
  private getApprovedRequestsUrl: string = this.baseUrl + "/view-approved";
  private getPendingRequestsUrl: string = this.baseUrl + "/view-pending";
  private getDeniedRequestsUrl: string = this.baseUrl + "/view-denied";
  private approveAllRequestsUrl: string = this.baseUrl + "/approve-all";
  private deleteDeniedRequestsUrl: string = this.baseUrl +"/delete-denied";
  private cleanRequestsUrl: string = this.baseUrl + "/remove-outdated";

  
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
    return this.http.put<PrayerRequest>(this.baseUrl+`/${id}/approve-request`, this.httpOptions)
    .pipe(tap(data => console.log("approving request")),
    catchError(this.handleError<PrayerRequest>('error approving prayer request', null)));
  }

  denyPrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/${id}/deny-request`, this.httpOptions)
    .pipe(tap(data => console.log("denying request")),
    catchError(this.handleError<PrayerRequest>('error denying prayer request', null)));
  }

  pendingPrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/${id}/pending-request`, this.httpOptions)
    .pipe(tap(data => console.log("pending request")),
    catchError(this.handleError<PrayerRequest>('error pending prayer request', null)));
  }

  deletePrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(this.baseUrl + `/prayer-requests/${id}/delete-request`, this.httpOptions)
      .pipe(tap(data => console.log("deleting prayer request")), 
      catchError(this.handleError<PrayerRequest>('error deleting request', null)))
  }

  approveAllPrayerRequests():Observable<boolean>{
    return this.http.put<boolean>(this.approveAllRequestsUrl, this.httpOptions)
    .pipe(tap(data => console.log("approving all requests")),
    catchError(this.handleError<boolean>('error approving all prayer requests', null)))
  }

  deleteDeniedRequests():Observable<boolean>{
    return this.http.delete<boolean>(this.deleteDeniedRequestsUrl, this.httpOptions)
    .pipe(tap(data => console.log("deleting all denied prayer requests")),
    catchError(this.handleError<boolean>('error deleting denied requests', null)))
  }

  cleanRequests():Observable<boolean>{
    return this.http.delete<boolean>(this.cleanRequestsUrl, this.httpOptions)
    .pipe(tap(data => console.log("removing old prayer requests")),
    catchError(this.handleError<boolean>('error removinging old requests', null)))
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
