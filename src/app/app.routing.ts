import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { NewListingComponent } from './new-listing/new-listing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'listing-detail/:id',
    component: ListingDetailComponent
  },
  {
    path: 'listing-detail/:id/edit',
    component: ListingEditComponent
  },
  {
    path: 'new-listing',
    component: NewListingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
