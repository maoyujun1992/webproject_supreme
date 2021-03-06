import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../../../../services/item.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../../services/shared.service';
import {UserService} from '../../../../../services/user.service.client';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['../../../../../style.css']
})
export class OrderHistoryComponent implements OnInit {
  user: any;
  userId: String;
  items: [{}];

  constructor(private itemService: ItemService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.userService.findUserById(this.userId).subscribe((returnUser: any) => {
      this.user = returnUser;
    });
    this.itemService.findItemByBuyerId(this.userId)
      .subscribe(
        (data: any) => {
          this.items = data;
        },
        (error: any) => console.log(error)
      );
  }

  goCart() {
    if (this.user.userType === 'Buyer') {
      this.router.navigate(['user/buyer/cart']);
    }
  }
}
