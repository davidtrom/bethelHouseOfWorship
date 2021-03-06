import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';

@Component({
  selector: 'app-view-prayer-requests',
  templateUrl: './view-prayer-requests.component.html',
  styleUrls: ['./view-prayer-requests.component.css']
})
export class ViewPrayerRequestsComponent implements OnInit {

  noRequests: boolean;
  approvedPrayerRequests: any[];
  p: number = 1;
  

  constructor(private prayerRequestService: PrayerRequestServiceService) { }

  ngOnInit() {
    this.getPrayerRequests();
  }

  getPrayerRequests(){
    this.prayerRequestService.getApprovedPrayerRequests().subscribe(data => {
      console.log("fetching prayer requests");
      this.approvedPrayerRequests = data;
      if(this.approvedPrayerRequests.length === 0){
        this.noRequests = true;
      }
      else {this.noRequests = false;}
    });
  }

}
