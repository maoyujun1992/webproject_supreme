import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['../../../style.css']
})
export class AdminProfileComponent implements OnInit {
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  editItem() {
    this.router.navigate(['user/admin/edititem']);
  }

  editUser() {
    this.router.navigate(['user/admin/edituser']);
  }

  logout() {
    this.router.navigate(['login']);
  }
}
