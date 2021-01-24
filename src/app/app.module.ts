import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyCardSmallComponent } from './shared/property-card-small/property-card-small.component';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertyCardComponent } from './shared/property-card/property-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { getPortuguesePaginatorIntl } from './portuguese-paginator-intl';
import { FilterDialogComponent } from './search-page/filter-dialog/filter-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PropertyCardSmallComponent,
    PropertyCardComponent,
    SearchPageComponent,
    FilterDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
