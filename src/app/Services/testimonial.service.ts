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

  baseUrl=environment.baseUrl;
  testimonial: Testimonial;
  private addTestimonialUrl: string = this.baseUrl + "/add-testimonial";
  private getAllRequestsUrl: string = this.baseUrl + "/prayer-requests/view-requests"
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  addTestimonial(testimonial: Testimonial): Observable<Testimonial>{
    return this.http.post<Testimonial>(this.addTestimonialUrl, testimonial, this.httpOptions)
      .pipe(tap(data => console.log("sending testimony")), 
      catchError(this.handleError<Testimonial>('error sending request', null)))
  }

  getAllTestimonials(): Observable<Testimonial[]>{
    return this.http.get<Testimonial[]>(this.getAllRequestsUrl, this.httpOptions)
      .pipe(tap(data => console.log("fetching requests")),
      catchError(this.handleError<Testimonial[]>('error getting testimonials', null)))
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
