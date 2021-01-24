import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchParams } from '../shared/models/search-params';
import { getOnlyDefinedSearchParams } from '../shared/util';
import { Property } from '../shared/models/property.model';
import { PropertySearchService } from '../shared/property-search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  searchParams: SearchParams;
  searchFormGroup: FormGroup;
  locationOptions: string[]; // ToDo fill with API recommendations
  recommendationCity: string;
  recommendationProperties: Property[];
  loadingRecommendations: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private searchService: PropertySearchService) {
    this.searchParams = new SearchParams();
    this.searchFormGroup = this.formBuilder.group({
      negotiation_type: ['SELL'],
      city: [''],
      minPrice: [0],
      maxPrice: [0],
      rooms: [0]
    });

    this.recommendationCity = 'Maceió'; // ToDo get user's city
    this.getRecommendations();
  }

  goToSearchPage() {
    this.router.navigate(['/search', getOnlyDefinedSearchParams(this.searchParams)]).then();
  }

  getRecommendations() {
    delete this.recommendationProperties;
    this.loadingRecommendations = true;
    this.searchService.getRecommendations(this.recommendationCity).subscribe(
      (data: { count: number, results: Property[] }) => {
        this.loadingRecommendations = false;
        this.recommendationProperties = data.results.map(p => Property.factory(p));
      },
      _ => this.loadingRecommendations = false
    );
  }
}
