import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PrayerRequest } from '../Models/prayer-request.model';
import { Testimonial } from '../Models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  baseUrl=environment.baseUrl + "/testimonials";
  testimonial: Testimonial;
  private addTestimonialUrl: string = this.baseUrl + "/create";
  private getApprovedTestimonialsUrl: string = this.baseUrl + "/view-approved";
  private getPendingTestimonialsUrl: string = this.baseUrl + "/view-pending";
  private getDeniedTestimonialsUrl: string = this.baseUrl + "/view-denied";
  private approveAllTestimonialsUrl: string = this.baseUrl + "/approve-all";
  private deleteDeniedTestimonialsUrl: string = this.baseUrl +"/delete-denied";
  private cleanTestimonialsUrl: string = this.baseUrl + "/remove-outdated";

  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  addTestimonial(testimonial: Testimonial): Observable<boolean>{
    return this.http.post<boolean>(this.addTestimonialUrl, testimonial, this.httpOptions)
      .pipe(tap(data => console.log("sending testimony", data)), 
      catchError(this.handleError<boolean>('error sending request', null)))
  }

  getApprovedTestimonials(): Observable<Testimonial[]>{
    return this.http.get<Testimonial[]>(this.getApprovedTestimonialsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching requested testimonials")),
      catchError(this.handleError<Testimonial[]>('error getting testimonials', null)))
  }

  getPendingPrayerTestimonials(): Observable<PrayerRequest[]>{
    return this.http.get<PrayerRequest[]>(this.getPendingTestimonialsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching testimonials")),
      catchError(this.handleError<PrayerRequest[]>('error getting pending testimonials', null)))
  }

  getDeniedPrayerTestimonials(): Observable<PrayerRequest[]>{
    return this.http.get<PrayerRequest[]>(this.getDeniedTestimonialsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching testimonials")),
      catchError(this.handleError<PrayerRequest[]>('error getting denied testimonials', null)))
  }

  approvePrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/${id}/approve-testimonial`, this.httpOptions)
    .pipe(tap(data => console.log("approving request")),
    catchError(this.handleError<PrayerRequest>('error approving testimonial', null)));
  }

  denyPrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/${id}/deny-testimonial`, this.httpOptions)
    .pipe(tap(data => console.log("denying request")),
    catchError(this.handleError<PrayerRequest>('error denying testimonial', null)));
  }

  pendingPrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.put<PrayerRequest>(this.baseUrl+`/${id}/pending-testimonial`, this.httpOptions)
    .pipe(tap(data => console.log("pending request")),
    catchError(this.handleError<PrayerRequest>('error pending prayer request', null)));
  }

  deletePrayerRequest(id: number): Observable<PrayerRequest>{
    return this.http.post<PrayerRequest>(this.baseUrl + `/testimonials/${id}/delete-testimonial`, this.httpOptions)
      .pipe(tap(data => console.log("deleting prayer request")), 
      catchError(this.handleError<PrayerRequest>('error deleting request', null)))
  }

  approveAllPrayerTestimonials():Observable<boolean>{
    return this.http.put<boolean>(this.approveAllTestimonialsUrl, this.httpOptions)
    .pipe(tap(data => console.log("approving all testimonials")),
    catchError(this.handleError<boolean>('error approving all testimonials', null)))
  }

  deleteDeniedTestimonials():Observable<boolean>{
    return this.http.delete<boolean>(this.deleteDeniedTestimonialsUrl, this.httpOptions)
    .pipe(tap(data => console.log("deleting all denied testimonials")),
    catchError(this.handleError<boolean>('error deleting denied testimonials', null)))
  }

  cleanTestimonials():Observable<boolean>{
    return this.http.delete<boolean>(this.cleanTestimonialsUrl, this.httpOptions)
    .pipe(tap(data => console.log("removing old testimonials")),
    catchError(this.handleError<boolean>('error removinging old testimonials', null)))
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
