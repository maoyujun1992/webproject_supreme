import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import { AdminItemEditComponent } from './views/admin/admin-item-edit/admin-item-edit.component';
import { AdminUserEditComponent } from './views/admin/admin-user-edit/admin-user-edit.component';
import { ItemEditComponent } from './views/item/item-edit/item-edit.component';
import { ItemDisplayComponent } from './views/item/item-display/item-display.component';
import { BuyerProfileComponent } from './views/users/profile/buyer-profile/buyer-profile.component';
import { SellerProfileComponent } from './views/users/profile/seller-profile/seller-profile.component';
import { CartComponent } from './views/checkout/cart/cart.component';
import { PaymentComponent } from './views/checkout/payment/payment.component';
import { SummaryComponent } from './views/checkout/summary/summary.component';
import { OrderHistoryComponent } from './views/users/profile/buyer-profile/order-history/order-history.component';
import { HomeComponent } from './views/home/home.component';
import { ChooserComponent } from './views/users/chooser/chooser.component';
import { ItemListComponent } from './views/item/item-list/item-list.component';
import { SaleHistoryComponent } from './views/users/profile/seller-profile/sale-history/sale-history.component';
import { AdminProfileComponent } from './views/admin/admin-profile/admin-profile.component';
import { LoggedinHomeComponent } from './views/home/loggedin-home/loggedin-home.component';
import { CreditcardComponent } from './views/users/creditcard/creditcard.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'loggedinhome/users/:uid', component: LoggedinHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users/admin/:uid', component: AdminProfileComponent},
  {path: 'users/buyer/:uid', component: BuyerProfileComponent},
  {path: 'users/seller/:uid', component: SellerProfileComponent},
  {path: 'users/admin/:uid/edititem', component: AdminItemEditComponent},
  {path: 'users/admin/:uid/edituser', component: AdminUserEditComponent},
  {path: 'users/seller/:uid/new', component: ItemEditComponent},
  {path: 'users/seller/:uid/item/:iid', component: ItemEditComponent},
  {path: 'users/:uid/item/:iid', component: ItemDisplayComponent},
  {path: 'users/buyer/:uid/cart', component: CartComponent},
  {path: 'users/buyer/:uid/payment', component: PaymentComponent},
  {path: 'users/buyer/:uid/summary', component: SummaryComponent},
  {path: 'users/buyer/:uid/history', component: OrderHistoryComponent},
  {path: 'users/seller/:uid/history', component: SaleHistoryComponent},
  {path: 'users/seller/:uid/creditcard', component: CreditcardComponent},
  {path: 'users/buyer/:uid/creditcard', component: CreditcardComponent},
  {path: 'users/:uid/searchresult', component: ItemListComponent},
  {path: 'users/guest/searchresult', component: ItemListComponent},
  {path: 'users/guest/item/:iid', component: ItemDisplayComponent},
];

export const routing = RouterModule.forRoot(appRoutes);

