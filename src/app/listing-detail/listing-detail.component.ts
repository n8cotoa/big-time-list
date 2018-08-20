import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
  providers: [ListingService]
})
export class ListingDetailComponent implements OnInit {
  postId: number = null;
  title: string = null;
  listing: Listing = null;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private listingService: ListingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });
    this.listing = this.listingService.getListingById(this.postId);
  }

  editListing(currentListing: Listing) {
    this.router.navigate(['listing-detail', currentListing.postId, 'edit'])
  }

}
