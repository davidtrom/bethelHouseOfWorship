import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Testimonial } from 'src/app/Models/testimonial.model';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.css']
})
export class AddTestimonialComponent implements OnInit {

  testimonialForm: FormGroup;
  formNotValid: boolean;

  constructor(private fb:FormBuilder, private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-z. A-Z]+$')]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      testimony: ['', Validators.required]
    });
  }

  get form() { return this.testimonialForm.controls; }

  onSubmit(): void{       
    console.log("inside onSubmit")
    if(this.testimonialForm.valid){
      let testimonial: Testimonial = new Testimonial(
        null,
        this.testimonialForm.controls.firstName.value,
        this.testimonialForm.controls.lastName.value,
        this.testimonialForm.controls.city.value,
        this.testimonialForm.controls.state.value,
        this.testimonialForm.controls.country.value,
        this.testimonialForm.controls.testimony.value,
        null
        );

        this.testimonialService.addTestimonial(testimonial).subscribe(
          data => {
            console.log("sending testimonial ", data);     
          if(data !== null){
            alert('Your testimony has been sent');
          }
          else {
            alert('There was an error, your testimony has NOT been sent ' + '\n'
            + 'Please try again.');
          }
          this.testimonialForm.reset();
        }
        );
    }
    else{
      this.testimonialForm.markAllAsTouched();
      this.formNotValid = true;
    }
  } 



}
