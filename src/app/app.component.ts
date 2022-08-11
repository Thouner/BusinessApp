import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  template: `
     <p>Screen width: {{ screenWidth }}</p>
    `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideMode: MatDrawerMode = 'side';
  public screenWidth: any;


  constructor() {

  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 799) {
      this.sideMode = 'side';
    } else if (this.screenWidth < 799) {
      this.sideMode = 'over';
    }
  }

}
