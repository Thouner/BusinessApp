import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadApiService {

  xMovies: any = '';

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
  totalResults:number;
  searchName:string = 'Christmas';


  constructor() { }


/**
 * loading movies by search term and page
 *
 * @param rNum - page of the films to be loaded
 */
  async getXMovies(rNum) {
    let xUrl = `https://www.omdbapi.com/?s=${this.searchName}&apikey=f7b75b3a&page=${rNum}`;
    let xResponse = await fetch(xUrl);
    this.xMovies = await xResponse.json();
    this.totalResults = this.xMovies.totalResults;
    this.xMovies = this.xMovies.Search;
  }


/**
 * shortening the number of months
 */
  shortMonths() {
    let number = this.restDays / 30.5;
    let m = Number((Math.abs(number) * 10).toPrecision(15));
    this.shortRestMonths = Math.round(m) / 10 * Math.sign(number);
  }


/**
 * shortening the number of weeks
 */
  shortWeeks() {
    let number = this.restDays / 7;
    let m = Number((Math.abs(number) * 100).toPrecision(15));
    this.shortRestWeeks = Math.round(m) / 100 * Math.sign(number);
  }


/**
 * temporal distance to christmas
 */
  distanceTimeToX() {
    let yearBeforX = this.xInSecounds - this.yearInSecounds;
    let timePassToX = this.secoundsToToday - yearBeforX;
    this.percentPassX = (100 / this.yearInSecounds) * timePassToX;
    let m = Number((Math.abs(this.percentPassX) * 100).toPrecision(15));
    this.percentPassX = Math.round(m) / 100 * Math.sign(this.percentPassX);
  }


/**
 * which day is christmas
 */
  getXWeekday() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.xInSecounds = this.secoundsToToday + (this.restSeconds * 1000) - (60 * 60 * 1000) + 2000;
    let date = new Date(this.xInSecounds);
    this.xWeekDay = weekday[date.getDay()];
  }


/**
 * loading times until christmas
 */
  async getXTime() {
    let xUrl = 'https://api.christmascountdown.live/pine/timeleft?timezone=UTC';
    let xResponse = await fetch(xUrl);
    this.timeLeft = await xResponse.json();
    this.storeCurrentTime(this.timeLeft);
    setTimeout(() => {
      this.getXTime();
    }, 200);
  }


/**
 * Save the loaded of times
 *
 * @param time - json with times loaded
 */
  storeCurrentTime(time) {
    this.restSeconds = time.seconds;
    this.restMinutes = time.minutes;
    this.restHours = time.hours;
    this.restDays = time.days;
    this.restSleeps = time.sleeps;
  }


/**
 * Loading the jokes
 */
  async getXJokes() {
    let xUrl = 'https://api.christmascountdown.live/pine/jokes';
    let xResponse = await fetch(xUrl);
    this.xJokes = await xResponse.json();
  }


/**
 * select a random joke
 */
  getRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 111);
    this.jokePlusNumber = this.xJokes[this.randomNumber];
  }
}
