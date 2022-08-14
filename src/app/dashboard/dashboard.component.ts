import { Component, OnInit } from '@angular/core';
import { LoadApiService } from '../load-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(public api: LoadApiService) { }


/**
 * loading the remaining days and a few movies
 */
  async ngOnInit() {
    await this.api.getXMovies(this.randomIntFromInterval(1, 514));
    await this.api.getXTime();
  }


/**
 * generate a random number
 *
 * @param min - minimum number to be generated
 * @param max - Maximum number to be generated
 * @returns - generate number
 */
  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
