import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchPageComponent } from './search-page/search-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: 'search', pathMatch: 'full', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
