import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listing');
   }

  getListings(){
    return this.listings;
  }

  getListingById(listingId: string) {
    return this.database.object('listing/' + listingId);

  }

}
