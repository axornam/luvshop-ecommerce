import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './pages/home-page/components/header/header.component';
import { ProductsListComponent } from './pages/home-page/components/products-list/products-list.component';
import { SideMenuComponent } from './pages/home-page/components/side-menu/side-menu.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    HomePageComponent,
    CheckoutPageComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
