import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { UniquePipe } from '../unique.pipe';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ListingService]
})
export class MarketplaceComponent implements OnInit {

   listings: any[];

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.getListings().subscribe(listings => this.listings = listings);
  }

  goToListing(clickedListing) {
    this.router.navigate(['listing-detail', clickedListing.$key])
  }

}
