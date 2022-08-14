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
  screenWidth: any;
  openNav:boolean = true;


  constructor() { }


  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }


  /**
   * determine the window width
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 799) {
      this.sideMode = 'side';
      this.openNav = true;
    } else if (this.screenWidth < 799) {
      this.sideMode = 'over';
      this.openNav = false;
    }
  }
}
