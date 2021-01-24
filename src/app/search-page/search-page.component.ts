import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchParams } from '../shared/models/SearchParams';
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

  searchParams: SearchParams;
  cityOptions: string[] = ['One', 'Two', 'Three'];
  sortBy: string;
  searchData: { count: number, results: Property[] };
  loading: boolean;

  constructor(private route: ActivatedRoute, private dialog: MatDialog,
              private propertySearchService: PropertySearchService) {
    this.sortBy = 'RECENT';

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
    this.loading = true;
    this.propertySearchService.search(this.searchParams, page).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.searchData = data;
      },
      _ => this.loading = false);
  }
}
