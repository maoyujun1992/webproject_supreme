import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';
import {UserService} from '../../../../../services/user.service.client';
import {ItemService} from '../../../../../services/item.service.client';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['../../../../../style.css']
})
export class SaleHistoryComponent implements OnInit {
  user: any;
  userId: String;
  items: [{}];

  constructor(private itemService: ItemService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.userService.findUserById(this.userId).subscribe((returnUser: any) => {
      this.user = returnUser;
    });
    this.itemService.findItemBySellerId(this.userId)
      .subscribe(
        (data: any) => {
          this.items = data;
        },
        (error: any) => console.log(error)
      );
  }
}
