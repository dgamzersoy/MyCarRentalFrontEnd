import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';

import { UserComponent } from './components/user/user.component';
import { RentalComponent } from './components/rental/rental.component';

import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';

import { ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { RentalPageComponent } from './components/rental-page/rental-page.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';

import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarImageUpdateComponent } from './components/car-image-update/car-image-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarImageListComponent } from './components/car-image-list/car-image-list.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    UserComponent,
    RentalComponent,
    CarDetailDtoComponent,
     VatAddedPipe,
     FilterPipePipe,
     BrandFilterPipePipe,
     ColorFilterPipePipe,
     CartSummaryComponent,
     RentalPageComponent,
     PaymentComponent,
     CarAddComponent,
     BrandAddComponent,
     ColorAddComponent,
     CarUpdateComponent,
     BrandUpdateComponent,
     ColorUpdateComponent,
     BrandListComponent,
     ColorListComponent,
     CarListComponent,
     BrandDeleteComponent,
     CarDeleteComponent,
  
     CarImageAddComponent,
     CarImageUpdateComponent,
     LoginComponent,
     CarImageListComponent,
     RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
