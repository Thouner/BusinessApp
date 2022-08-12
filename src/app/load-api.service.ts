import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadApiService {

  xMovies: any = '';
  hightesNummer = 514;

  timeLeft: any;
  restSeconds: number = 0;
  restMinutes: number = 0;
  restHours: number = 0;
  restDays: number = 0;
  restSleeps: number = 0;
  randomNumber: number = 0;
  shortRestWeeks: number = 0;
  shortRestMonths: number = 0;
  today: Date = new Date();
  secoundsToToday: number = this.today.getTime();
  xInSecounds: number;
  yearInSecounds: number = 1000 * 60 * 60 * 24 * 365;
  percentPassX: number = 0;
  xWeekDay: string = '';
  xJokes: any = '';
  jokePlusNumber: any = '';
  internationalNumberFormat = new Intl.NumberFormat('en-US');


  constructor() { }



  async getXMovies(rNum) {
    let xUrl = `https://www.omdbapi.com/?s=christmas&apikey=f7b75b3a&page=${rNum}`;
    let xResponse = await fetch(xUrl);
    this.xMovies = await xResponse.json();
    this.xMovies = this.xMovies.Search;
    // console.log(this.xMovies);
  }




  shortMonths() {
    let number = this.restDays / 30.5;
    let m = Number((Math.abs(number) * 10).toPrecision(15));
    this.shortRestMonths = Math.round(m) / 10 * Math.sign(number);
  }



  shortWeeks() {
    let number = this.restDays / 7;
    let m = Number((Math.abs(number) * 100).toPrecision(15));
    this.shortRestWeeks = Math.round(m) / 100 * Math.sign(number);
  }



  distanceTimeToX() {
    let yearBeforX = this.xInSecounds - this.yearInSecounds;
    let timePassToX = this.secoundsToToday - yearBeforX;
    this.percentPassX = (100 / this.yearInSecounds) * timePassToX;
    let m = Number((Math.abs(this.percentPassX) * 100).toPrecision(15));
    this.percentPassX = Math.round(m) / 100 * Math.sign(this.percentPassX);
  }



  getXWeekday() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.xInSecounds = this.secoundsToToday + (this.restSeconds * 1000) - (60 * 60 * 1000) + 2000;
    let date = new Date(this.xInSecounds);
    this.xWeekDay = weekday[date.getDay()];
  }



  async getXTime() {
    let xUrl = 'https://api.christmascountdown.live/pine/timeleft?timezone=UTC';
    let xResponse = await fetch(xUrl);
    this.timeLeft = await xResponse.json();
    this.storeCurrentTime(this.timeLeft);
    setTimeout(() => {
      this.getXTime();
    }, 200);
  }



  storeCurrentTime(time) {
    this.restSeconds = time.seconds;
    this.restMinutes = time.minutes;
    this.restHours = time.hours;
    this.restDays = time.days;
    this.restSleeps = time.sleeps;
  }



  async getXJokes() {
    let xUrl = 'https://api.christmascountdown.live/pine/jokes';
    let xResponse = await fetch(xUrl);
    this.xJokes = await xResponse.json();
  }



  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 111);
    this.jokePlusNumber = this.xJokes[this.randomNumber];
  }


}
