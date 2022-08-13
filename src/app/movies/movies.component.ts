import { Component, OnInit } from '@angular/core';
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

  constructor(public dialog: MatDialog, public api: LoadApiService) { }

  async ngOnInit() {
    await this.load10Movies(this.moviePage);
    // console.log(this.api.xMovies[1].imdbID);

  }

  async load10Movies(moviePage: number) {
    await this.api.getXMovies(moviePage);
  }

  preMovies() {
    this.moviePage--;
    this.load10Movies(this.moviePage)
  }


  nextMovies() {
    this.moviePage++;
    this.load10Movies(this.moviePage)
  }


  openMovieDialog(id) {
    // console.log(id);
    const dialog = this.dialog.open(DialogMovieDetailsComponent, {
      width: '450px',
    });
      dialog.componentInstance.movieId = id;
  }

}
