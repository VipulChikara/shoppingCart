import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sidenav.nativeElement.style.width = "250px";
  }

  closeSideNav() {
    this.sidenav.nativeElement.style.width = "0%";
  }

}
