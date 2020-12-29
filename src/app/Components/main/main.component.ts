import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private prayerRequestService: PrayerRequestServiceService, private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.removeOutdatedRequests();
    this.removeOutdatedTestimonials();
  }

  removeOutdatedRequests(){
    this.prayerRequestService.cleanRequests().subscribe(data => 
      {console.log(data)})
  }

  removeOutdatedTestimonials(){
    this.testimonialService.cleanTestimonials().subscribe(data => 
      {console.log(data)})
  }

  //removeOutdatedContacts?
}
