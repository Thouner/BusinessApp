import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-movie-details',
  templateUrl: './dialog-movie-details.component.html',
  styleUrls: ['./dialog-movie-details.component.scss']
})

export class DialogMovieDetailsComponent implements OnInit {

  movieId: string = '';
  movieDetails: any;


  constructor() { }


  ngOnInit(): void {
    this.getXMovieDetail();
  }


/**
 * loading the details of the movie
 */
  async getXMovieDetail() {
    let xUrl = `https://www.omdbapi.com/?i=${this.movieId}&plot=full&apikey=f7b75b3a`;
    let xResponse = await fetch(xUrl);
    this.movieDetails = await xResponse.json();
  }

}
