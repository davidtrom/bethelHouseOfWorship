import { Component, OnInit } from '@angular/core';
import { PrayerRequestServiceService } from 'src/app/Services/prayer-request-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private prayerRequestService: PrayerRequestServiceService) { }

  ngOnInit() {
    this.removeOutdatedRequests();
  }

  removeOutdatedRequests(){
    this.prayerRequestService.cleanRequests().subscribe(data => 
      {console.log(data)})
  }
}
