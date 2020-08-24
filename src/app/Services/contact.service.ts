import { Injectable } from '@angular/core';
import { Contact } from '../Models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  createContact(contactToCreate: Contact): Observable<Boolean>{
    return null;
  }
}
