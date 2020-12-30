import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-testimonial-review',
  templateUrl: './testimonial-review.component.html',
  styleUrls: ['./testimonial-review.component.css']
})
export class TestimonialReviewComponent implements OnInit {

  noTestimonials: boolean;
  showingPending: boolean;
  showingApproved: boolean;
  showingDenied: boolean;
  userTestimonials: any[];
  status: string;
  p: number = 1;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.getPendingTestimonials();
  }

  getPendingTestimonials(){
    this.testimonialService.getPendingTestimonials().subscribe(data => {
      console.log("fetching pending testimonials");
      this.userTestimonials = data;
      if(this.userTestimonials.length === 0){
        this.noTestimonials = true;
      }
      else {this.noTestimonials = false;}
    });
    this.status = "Pending";
    this.showingPending = true;
    this.showingApproved = false;
    this.showingDenied = false;
  }

  getApprovedTestimonials(){
    this.testimonialService.getApprovedTestimonials().subscribe(data => {
      console.log("fetching approved testimonials");
      this.userTestimonials = data;
      if(this.userTestimonials.length === 0){
        this.noTestimonials = true;
      }
      else {this.noTestimonials = false;}
    });
    this.status = "Approved";
    this.showingPending = false;
    this.showingApproved = true;
    this.showingDenied = false;
  }

  getDeniedTestimonials(){
    this.testimonialService.getDeniedTestimonials().subscribe(data => {
      console.log("fetching denied testimonials");
      this.userTestimonials = data;
      if(this.userTestimonials.length === 0){
        this.noTestimonials = true;
      }
      else {this.noTestimonials = false;}
    });
    this.status = "Denied";
    this.showingPending = false;
    this.showingApproved = false;
    this.showingDenied = true;
  }

  approveTestimonial(id: number){
    this.testimonialService.approveTestimonial(id).subscribe(data => {
      console.log("approving testimonial");
      if(data != null){
        alert('Testimonial has been Approved');
      }
      else{
        alert('There was an error Approving the Testimonial');
      }})
    location.reload();
  }

}
