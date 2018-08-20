import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css'],
  providers: [ListingService]
})
export class ListingEditComponent implements OnInit {
  postId: string = null;
  listing;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private listingService: ListingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.listing = this.listingService.getListingById(this.postId);
  }

  doneEditing() {
    this.router.navigate(['listing-detail', this.listing.postId])
  }
}
