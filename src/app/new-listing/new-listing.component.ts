import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css'],
  providers: [ListingService]
})
export class NewListingComponent implements OnInit {

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
  }

  addNewListing(title: string, price: string, image: string, description: string, category: string, contactInfo: string, location: string) {
  let newListing = new Listing(title, parseInt(price), image, description, Date.now(), category, contactInfo, location);
  this.listingService.updateDatabase(newListing);
  this.router.navigate(['marketplace'])
  }
}
