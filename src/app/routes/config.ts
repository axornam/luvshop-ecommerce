import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CheckoutPageComponent } from '../pages/checkout-page/checkout-page.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { RegisterComponent } from '../pages/auth/register/register.component';
import { ProductDetailsComponent } from '../pages/product-details/product-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'LuvShoop - Home',
    children: [],
  },
  { path: 'details/:id', component: ProductDetailsComponent, title: 'Details' },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    title: 'LuvShoop Checkout',
    children: [],
  },
  { path: 'auth/login', component: LoginComponent, title: 'Login' },
  { path: 'auth/register', component: RegisterComponent, title: 'Register' },
  //{ path: 'admin/register', component: DetailsComponent, title: 'Register' },
  //{ path: 'admin/login', component: DetailsComponent, title: 'Register' },
  //{ path: 'admin/manage', component: DetailsComponent, title: 'Register' },
  //{ path: 'logout', component: DetailsComponent, title: 'Register' },
];

export default routeConfig;
