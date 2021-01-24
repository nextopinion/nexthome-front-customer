import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchParams } from '../shared/models/SearchParams';
import { getOnlyDefinedSearchParams } from '../shared/util';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  searchParams: SearchParams;
  searchFormGroup: FormGroup;
  cityOptions: string[] = ['One', 'Two', 'Three'];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.searchParams = new SearchParams();
    this.searchFormGroup = this.formBuilder.group({
      negotiation_type: ['SELL'],
      city: [''],
      neighborhood: [''],
      price: [0],
      rooms: [0]
    });
  }

  goToSearchPage() {
    this.router.navigate(['/search', getOnlyDefinedSearchParams(this.searchParams)]);
  }
}
