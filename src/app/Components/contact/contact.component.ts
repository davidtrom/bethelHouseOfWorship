import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/contact.service';
import { Contact } from 'src/app/Models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  formNotValid: boolean;

  constructor(private fb:FormBuilder, private contactService: ContactService) { }

  ngOnInit() {

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-z. A-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%$!#+\-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$')]],
      phoneNum: ['', [Validators.required, Validators.minLength(10)]],
      birthDate: ['', Validators.required],
      reasonForContact: ['', Validators.required],
      preferredApptTime: ['', Validators.required],
      message: [''],
    });
  }

  get form() { return this.contactForm.controls; }

  onSubmit(): void{       
    console.log("inside onSubmit")
    if(this.contactForm.valid){
      let contact: Contact = new Contact(
        null,
        this.contactForm.controls.firstName.value,
        this.contactForm.controls.lastName.value,
        this.contactForm.controls.email.value,
        this.contactForm.controls.phoneNum.value,
        this.contactForm.controls.city.value,
        this.contactForm.controls.state.value,
        this.contactForm.controls.country.value,
        this.contactForm.controls.reasonForContact.value,
        );

        this.contactService.createContact(contact).subscribe(
          data => {
            console.log("was email sent? ", data);     
          if(data){
            alert('Your email has been sent');
          }
          else {
            alert('There was an error, your email has NOT been sent ' + '\n'
            + 'Please try again.');
          }
          this.contactForm.reset();
        }
        );
    }
    else{
      this.contactForm.markAllAsTouched();
      this.formNotValid = true;
    }
  } 

}
