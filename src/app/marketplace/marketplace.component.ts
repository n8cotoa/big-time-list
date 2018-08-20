import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listings: Listing[] = [
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 1, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 2, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 3, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 4, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 5, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 6, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 7, 'thisemail@email.com', 'Right Behind You'),
    new Listing("Buy My Stuff", 400, 'test-img', 'All of my great stuff', Date.now(), 'Great Stuff', 8, 'thisemail@email.com', 'Right Behind You'),
  ]

}
