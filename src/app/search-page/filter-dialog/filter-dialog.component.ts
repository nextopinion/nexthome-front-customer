import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SearchParams } from '../../shared/models/search-params';
import { Router } from '@angular/router';
import { getOnlyDefinedSearchParams } from '../../shared/util';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent {

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public searchParams: SearchParams, private router: Router) {
  }

  close(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log('submit', this.searchParams);
    this.router.navigate(['/search', getOnlyDefinedSearchParams(this.searchParams)]).then();
    this.close();
  }

  clear() {
    this.router.navigate(['/search', getOnlyDefinedSearchParams(new SearchParams())]).then();
    this.close();
  }
}
