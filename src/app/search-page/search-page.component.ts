import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchParams } from '../shared/models/SearchParams';
import { Property } from '../shared/models/property.model';
import { Photo } from '../shared/models/photo.model';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchParams: SearchParams;
  cityOptions: string[] = ['One', 'Two', 'Three'];
  sortBy: string;
  mockProperty: Property;
  searchData: { count: number, results: Property[] };

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
    this.sortBy = 'RELEVANT';

    this.route.params.subscribe(params => {
      this.searchParams = SearchParams.fromRouteParams(params as SearchParams);
    });

    this.mockProperty = new Property();
    this.mockProperty.name = 'Imóvel';
    this.mockProperty.price = 666420.49;
    this.mockProperty.description = 'Descrição deste imóvel incrivel!';
    this.mockProperty.address.city = 'Maceió';
    this.mockProperty.address.state = 'AL';
    this.mockProperty.address.neighborhood = 'Jatiúca';
    this.mockProperty.rooms = 3;
    this.mockProperty.parking_spots = 1;
    this.mockProperty.suites = 2;
    this.mockProperty.total_area = 420;
    this.mockProperty.images.push(new Photo('https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4='));

    this.searchData = {
      count: 5,
      results: [this.mockProperty, this.mockProperty, this.mockProperty, this.mockProperty, this.mockProperty]
    };
  }

  ngOnInit(): void {
  }

  openFilterDialog() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '550px',
      data: { ...this.searchParams }
    });
  }


  doSearch(page = 1) {
    console.log('doSearch', page);
  }
}
