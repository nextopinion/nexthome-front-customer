import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card-small',
  templateUrl: './property-card-small.component.html',
  styleUrls: ['./property-card-small.component.scss']
})
export class PropertyCardSmallComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  navigate() {
    window.location.replace('https://nexthome.pt/property-page/84');
  }
}
