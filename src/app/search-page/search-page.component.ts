import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchParams } from '../shared/models/search-params';
import { Property } from '../shared/models/property.model';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PropertySearchService } from '../shared/property-search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  SEARCH_DELAY = 500;

  searchParams: SearchParams;
  locationOptions: string[]; // ToDo fill with API recommendations
  ordering: '-created' | 'price' | '-price';
  searchData: { count: number, results: Property[] };
  loading: boolean;
  searchTimer: any;

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
              private propertySearchService: PropertySearchService) {
    this.ordering = '-created';

    this.route.params.subscribe(params => {
      this.searchParams = SearchParams.fromRouteParams(params as SearchParams);
      this.doSearch();
    });
  }

  openFilterDialog() {
    this.dialog.open(FilterDialogComponent, {
      width: '550px',
      data: { ...this.searchParams }
    });
  }


  doSearch(page = 1) {
    delete this.searchData;
    this.loading = true;
    this.propertySearchService.search(this.searchParams, page, this.ordering).subscribe(
      data => {
        this.loading = false;
        this.searchData = data;
      },
      _ => this.loading = false);
  }

  onChangeLocation() {
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.doSearch(), this.SEARCH_DELAY);
  }
}
