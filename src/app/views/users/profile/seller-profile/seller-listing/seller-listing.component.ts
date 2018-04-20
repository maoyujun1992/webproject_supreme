import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../../../../services/item.service.client';

@Component({
  selector: 'app-seller-listing',
  templateUrl: './seller-listing.component.html',
  styleUrls: ['../../../../../style.css']
})
export class SellerListingComponent implements OnInit {
  itemList: [{}];
  user: any;
  sellerId: String;
  @ViewChild('f') loginForm: NgForm;

  constructor(private itemService: ItemService, private router: Router,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.itemService.findSellerListing(this.sharedService.user['_id']).subscribe((returnList: any) => {
      this.itemList = returnList;

    });
  }

  goToEdit(itemId) {
    this.router.navigate(['user/seller/item/', itemId]);
  }

}
