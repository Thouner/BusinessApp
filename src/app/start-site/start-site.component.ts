import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-site',
  templateUrl: './start-site.component.html',
  styleUrls: ['./start-site.component.scss']
})
export class StartSiteComponent implements OnInit {

  timeLeft: any;
  restSeconds: number = 0;
  restMinutes: number = 0;
  restHours: number = 0;
  restDays: number = 0;
  restWeeks: number = 0;
  restMonths: number = 0;
  restSleeps: number = 0;
  xJokes: any = '';
  randomNumber: number;
  today: Date = new Date();
  secoundsToToday: number = this.today.getTime();
  xInSecounds: number;
  yearInSecounds: number = 1000 * 60 * 60 * 24 * 365;
percentPassX;
  xWeekDay:string = '';


  constructor() { }

  async ngOnInit() {
    await this.getXTime();
    await this.getXJokes();
    this.getRandomNumber();
    this.getXWeekday();
this.distanceToX();


}


distanceToX(){
  let yearBeforX = this.xInSecounds - this.yearInSecounds;
  let timePassToX = this.secoundsToToday - yearBeforX;
  this.percentPassX = (100 / this.yearInSecounds) * timePassToX;
  console.log(this.percentPassX);
 }


  getXWeekday() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.xInSecounds = this.secoundsToToday + (this.restSeconds * 1000) - (60 * 60 * 1000) + 2000;
    let date = new Date(this.xInSecounds);
    this.xWeekDay = weekday[date.getDay()];
  }


  async getXTime() {
    let xTimeUrl = 'https://api.christmascountdown.live/pine/timeleft?timezone=UTC';
    let xTimeresponse = await fetch(xTimeUrl);
    this.timeLeft = await xTimeresponse.json();
    this.restSeconds = this.timeLeft.seconds;
    this.restMinutes = this.timeLeft.minutes;
    this.restHours = this.timeLeft.hours;
    this.restDays = this.timeLeft.days;;
    this.restWeeks = this.timeLeft.weeks;;
    this.restMonths = this.timeLeft.months;;
    this.restSleeps = this.timeLeft.sleeps;
    setTimeout(() => {
      this.getXTime();
    }, 200);
  }

  async getXJokes() {
    let xTimeUrl = 'https://api.christmascountdown.live/pine/jokes';
    let xTimeresponse = await fetch(xTimeUrl);
    this.xJokes = await xTimeresponse.json();
  }


  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 111);
  }


}
