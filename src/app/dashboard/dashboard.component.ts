import { Component, OnInit } from '@angular/core';
import { LoadApiService } from '../load-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  constructor(public api: LoadApiService) { }

  async ngOnInit() {
    await this.api.getXMovies(this.randomIntFromInterval(1, 514));
    await this.api.getXTime();
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
