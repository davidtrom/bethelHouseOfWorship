import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';

@Component({
  selector: 'app-view-prayer-requests',
  templateUrl: './view-prayer-requests.component.html',
  styleUrls: ['./view-prayer-requests.component.css']
})
export class ViewPrayerRequestsComponent implements OnInit {

  noRequests: boolean;
  userPrayerRequests: any[];

  constructor(private prayerRequestService: PrayerRequestServiceService) { }

  ngOnInit() {
    this.getPrayerRequests();
  }

  getPrayerRequests(){
    this.prayerRequestService.getAllPrayerRequests().subscribe(data => {
      console.log("fetching prayer requests");
      this.userPrayerRequests = data;
      if(this.userPrayerRequests.length === 0){
        this.noRequests = true;
      }
      else {this.noRequests = false;}
    });
  }

}
