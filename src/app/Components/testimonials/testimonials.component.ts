import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  userTestimonials: any[];
  noTestimonials: boolean;
  p: number = 1;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(){
    this.testimonialService.getApprovedTestimonials().subscribe(data => {
      console.log("fetching testimonials");
      this.userTestimonials = data;
      if(this.userTestimonials.length === 0){
        this.noTestimonials = true;
      }
      else {this.noTestimonials = false;}
    });
  }

}
