import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { NewListingComponent } from './new-listing/new-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MarketplaceComponent,
    ListingDetailComponent,
    ListingEditComponent,
    NewListingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
