import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';

@Component({
  selector: 'app-prayer-request-review',
  templateUrl: './prayer-request-review.component.html',
  styleUrls: ['./prayer-request-review.component.css']
})
export class PrayerRequestReviewComponent implements OnInit {

  noRequests: boolean;
  showingPending: boolean;
  showingApproved: boolean;
  showingDenied: boolean;
  userPrayerRequests: any[];
  status: string;
  deniedRequests: boolean;
  p: number = 1;

  constructor(private prayerRequestService: PrayerRequestServiceService) { }

  ngOnInit() {
    this.getPendingRequests();
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

  approveRequest(id: number){
    this.prayerRequestService.approvePrayerRequest(id).subscribe(data => {
      console.log("approving prayer request");
      if(data != null){
        alert('Prayer Request has been Approved');
      }
      else{
        alert('There was an error Approving the Prayer Request');
      }})
    location.reload();
  }

  denyRequest(id: number){
    this.prayerRequestService.denyPrayerRequest(id).subscribe(data => {
      console.log("denying prayer request");
      if(data != null){
        alert('Prayer Request has been Denied');
      }
      else{
        alert('There was an error Denying the Prayer Request');
      }
    })
    location.reload();
  }

  pendingRequest(id: number){
    this.prayerRequestService.pendingPrayerRequest(id).subscribe(data => {
      console.log("pending prayer request");
      if(data != null){
        alert('Prayer Request has been returned to Pending');
      }
      else{
        alert('There was an error Denying the Prayer Request');
      }
    })
    location.reload();
  }

  approveAllRequests(){
    this.prayerRequestService.approveAllPrayerRequests().subscribe(data => {console.log("approving all prayer requests");
      if(data == true){
        alert('All Prayer Requests have been approved');
      }
      else{
      alert('There was an error approving all prayer requests');
      }
    })
    location.reload();
  }

  deleteDeniedRequests(){
    this.prayerRequestService.deleteDeniedRequests().subscribe(data => {console.log("deleting denied prayer requests");
      if(data == true){
        alert('ALL DENIED Prayer Requests have been deleted');
      }
      else{
      alert('There was an error deleting all prayer requests');
      }
    })
    location.reload();
  }

}
