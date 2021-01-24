import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-property-card-small',
  templateUrl: './property-card-small.component.html',
  styleUrls: ['./property-card-small.component.scss']
})
export class PropertyCardSmallComponent implements OnInit {

  @Input()
  property: Property;
  nextHomeSite: string;

  constructor() {
    this.nextHomeSite = environment.nextHomeSite;
  }

  ngOnInit(): void {
  }
}
