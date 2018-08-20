import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ListingService]
})
export class MarketplaceComponent implements OnInit {

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }
  listings: Listing[];

  goToListing(clickedListing: Listing) {
    this.router.navigate(['listing-detail', clickedListing.postId])
  }

}
