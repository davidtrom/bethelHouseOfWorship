import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';
import { PrayerRequest } from 'src/app/Models/prayer-request.model';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.component.html',
  styleUrls: ['./prayer-request.component.css']
})
export class PrayerRequestComponent implements OnInit {

  prayerRequestForm: FormGroup;
  formNotValid: boolean;

  constructor(private fb:FormBuilder, private prayerRequestService:PrayerRequestServiceService ) { }

  ngOnInit() {

    this.prayerRequestForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-z. A-Z]+$')]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      prayerRequest: ['', Validators.required]
    });
  }

  get form() { return this.prayerRequestForm.controls; }

  onSubmit(): void{       
    console.log("inside onSubmit")
    if(this.prayerRequestForm.valid){
      let prayerRequest: PrayerRequest = new PrayerRequest(
        null,
        this.prayerRequestForm.controls.firstName.value,
        this.prayerRequestForm.controls.lastName.value,
        this.prayerRequestForm.controls.city.value,
        this.prayerRequestForm.controls.state.value,
        this.prayerRequestForm.controls.country.value,
        this.prayerRequestForm.controls.prayerRequest.value,
        null
        );

        this.prayerRequestService.addPrayerRequest(prayerRequest).subscribe(
          data => {
            console.log("sending request", data);     
          if(data == true){
            alert('Your request has been sent');
          }
          else {
            alert('There was an error, your request has NOT been sent ' + '\n'
            + 'Please try again.');
          }
          this.prayerRequestForm.reset();
        }
        );
    }
    else{
      this.prayerRequestForm.markAllAsTouched();
      this.formNotValid = true;
    }
  } 

}
