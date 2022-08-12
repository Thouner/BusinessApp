import { Component, OnInit } from '@angular/core';
import { LoadApiService } from '../load-api.service';

@Component({
  selector: 'app-start-site',
  templateUrl: './start-site.component.html',
  styleUrls: ['./start-site.component.scss']
})

export class StartSiteComponent implements OnInit {

   constructor( public api: LoadApiService ) { }


  async ngOnInit() {
    await this.api.getXTime();
    await this.api.getXJokes();
    this.api.getRandomNumber();
    this.api.getXWeekday();
    this.api.distanceTimeToX();
    this.api.shortWeeks();
    this.api.shortMonths();
  }



  nextJoke() {
    this.api.randomNumber++;
    if (this.api.randomNumber > 110) {
      this.api.randomNumber = 0;
    }
    this.api.jokePlusNumber = this.api.xJokes[this.api.randomNumber];
  }


}
