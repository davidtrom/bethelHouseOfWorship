import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';

@Component({
  selector: 'app-prayer-request-review',
  templateUrl: './prayer-request-review.component.html',
  styleUrls: ['./prayer-request-review.component.css']
})
export class PrayerRequestReviewComponent implements OnInit {

  noRequests: boolean;
  userPrayerRequests: any[];
  status: string;

  constructor(private prayerRequestService: PrayerRequestServiceService) { }

  ngOnInit() {
    this.getPendingRequests()
  }

  getPendingRequests(){
    this.prayerRequestService.getPendingPrayerRequests().subscribe(data => {
      console.log("fetching pending prayer requests");
      this.userPrayerRequests = data;
      if(this.userPrayerRequests.length === 0){
        this.noRequests = true;
      }
      else {this.noRequests = false;}
    });
    this.status = "Pending";
  }
  
  getApprovedRequests(){
    this.prayerRequestService.getApprovedPrayerRequests().subscribe(data => {
      console.log("fetching approved prayer requests");
      this.userPrayerRequests = data;
      if(this.userPrayerRequests.length === 0){
        this.noRequests = true;
      }
      else {this.noRequests = false;}
    });
    this.status = "Approved";
  }
  
  getDeniedRequests(){
    this.prayerRequestService.getDeniedPrayerRequests().subscribe(data => {
      console.log("fetching denied prayer requests");
      this.userPrayerRequests = data;
      if(this.userPrayerRequests.length === 0){
        this.noRequests = true;
      }
      else {this.noRequests = false;}
    });
    this.status = "Denied"
  }

}
