import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['../../../../style_derek.css']
})
export class BuyerProfileComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  userId: String;
  user: {};
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  phone: String;
  constructor(private userService: UserService,
              private sharedService: SharedService, private activatedRoute: ActivatedRoute, private router: Router) { }
  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
    this.password = this.user['password'];
    this.phone = this.user['phone'];
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  update() {
    this.user['username'] = this.loginForm.value.username;
    this.user['firstName'] = this.loginForm.value.firstName;
    this.user['lastName'] = this.loginForm.value.lastName;
    this.user['email'] = this.loginForm.value.email;
    this.user['password'] = this.loginForm.value.password;
    this.user['phone'] = this.loginForm.value.phone;
    this.userService.updateUser(this.userId, this.user).subscribe((data: any) => {
      this.router.navigate(['/user', this.userId]);
    });
  }

  delete() {
    this.userService.deleteUser(this.userId).subscribe((data: any) => {
      this.router.navigate(['/login']);
    });
  }
  ngOnInit() {
    this.getUser();
  }

}
