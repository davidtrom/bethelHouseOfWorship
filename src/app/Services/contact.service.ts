import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  baseUrl = environment.baseUrl + "/contact";
  private sendEmailUrl: string = this.baseUrl + "/send-email";
  private cleanContactsUrl: string = this.baseUrl + "/clean-contacts";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  createContact(contactToCreate: Contact): Observable<Boolean>{
    return this.http.post<Boolean>(this.sendEmailUrl, contactToCreate, this.httpOptions)
      .pipe(tap(data => {console.log("sending contact email"), 
      catchError(this.handleError<Boolean>('error sending email', null))}))
  }

  removeOldContacts(): Observable<Boolean>{
    return this.http.put<Boolean>(this.cleanContactsUrl, this.httpOptions)
      .pipe(tap(data => {console.log("removing outdated Contacts"),
      catchError(this.handleError<Boolean>('error removing outdated contacts', null))}))
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
