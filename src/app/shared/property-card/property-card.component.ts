import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../models/property.model';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {

  @Input()
  property: Property;

  @Output()
  delete: EventEmitter<void> = new EventEmitter();

  loading: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  nextHomeSite: string;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.nextHomeSite = environment.nextHomeSite;
  }
}
