import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMovieDetailsComponent } from '../dialog-movie-details/dialog-movie-details.component';
import { LoadApiService } from '../load-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  moviePage: number = 1;
  maxPage: number = 2;
  serachValue: string = 'Christmas';
  serachMovie: string = '';
  movieImage: string = 'assets/img/noImages.jpg'
  testtext = 'How the Grinch Stole Christmas';
  nächtserTest = this.testtext.replace(/ /g, '+');


  constructor(public dialog: MatDialog, public api: LoadApiService) { }


  /**
   * load the first 10 movies
   */
  async ngOnInit() {
    await this.load10Movies(this.moviePage);
  }


  /**
   * loading the movies after pressing the enter key
   *
   * @param event - press the enter key
   */
  onKeyDownEvent(event: any) {
    this.searchMovies();
  }


  /**
   * loading 10 movies
   *
   * @param moviePage - page that is opened from loaded  movies
   */
  async load10Movies(moviePage: number) {
    await this.api.getXMovies(moviePage);
    this.maxNumberForPages();
  }


  /**
   * maximum pages at found movies
   */
  maxNumberForPages() {
    this.maxPage = this.api.totalResults;
    this.maxPage = this.maxPage / 10;
    this.maxPage = Math.ceil(this.maxPage);
  }


  /**
   * open previous page
   */
  preMovies() {
    this.moviePage--;
    this.api.xMovies = '';
    this.load10Movies(this.moviePage)
  }


  /**
   * open next page
   */
  nextMovies() {
    this.moviePage++;
    this.api.xMovies = '';
    this.load10Movies(this.moviePage)
  }


  /**
   * search for movies
   */
  async searchMovies() {
    this.api.xMovies = '';
    this.api.searchName = this.serachMovie;
    this.serachValue = this.api.searchName;
    await this.load10Movies(this.moviePage);
    this.serachMovie = '';
  }


  /**
   * open the detail componente of the movie
   *
   * @param id - imdb id of the movie
   */
  openMovieDialog(id) {
    const dialog = this.dialog.open(DialogMovieDetailsComponent, {
      width: '450px',
    });
    dialog.componentInstance.movieId = id;
  }
}
