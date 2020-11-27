import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';

@Component({
  selector: 'app-prayer-request-review',
  templateUrl: './prayer-request-review.component.html',
  styleUrls: ['./prayer-request-review.component.css']
})
export class PrayerRequestReviewComponent implements OnInit {

  noRequests: boolean;
  showingPending: boolean=true;
  showingApproved: boolean=false;
  showingDenied: boolean=false;
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
    this.showingPending = true;
    this.showingApproved = false;
    this.showingDenied = false;
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
    this.showingPending = false;
    this.showingApproved = true;
    this.showingDenied = false;
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
    this.status = "Denied";
    this.showingPending = false;
    this.showingApproved = false;
    this.showingDenied = true;
  }

}
