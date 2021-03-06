import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';

import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarImageAddComponent } from './components/car-image-add/car-image-add.component';
import { CarImageListComponent } from './components/car-image-list/car-image-list.component';

import { CarImageUpdateComponent } from './components/car-image-update/car-image-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDetailDtoComponent},

  {path:"colors",component:CarComponent},
  {path:"users",component:CarComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path:"customers",component:CarComponent},
  {path:"detail",component:CarDetailDtoComponent},
  {path:"payment",component:PaymentComponent},
  {path:"rentals", component:CarDetailDtoComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"brands",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent}, 
  {path:"cars/detail/:id",component:CarDetailDtoComponent},
  {path:"cars/rental/payment",component:CarComponent},
  {path:"cars/list",component:CarListComponent},
  {path:"cars/add", component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars/list/add/:id",component:CarAddComponent},
  {path:"cars/list/update/:carId",component:CarUpdateComponent},

  
  {path:"brands/add", component:BrandAddComponent},
  {path:"brands/update", component:BrandUpdateComponent},
  {path:"brands/list/delete/:brandId",component:BrandDeleteComponent},
  {path:"brands/list/add/:brandId",component:BrandAddComponent},
  {path:"brands/list",component:BrandListComponent},
  {path:"brands/list/update/:brandId",component:BrandUpdateComponent},
  

  {path:"colors/add", component:ColorAddComponent},
  {path:"cars/update", component:CarUpdateComponent},
  {path:"colors/update", component:ColorUpdateComponent},
  {path:"colors/list",component:ColorListComponent},
  {path:"colors/list/update/:colorId",component:ColorUpdateComponent},
  {path:"colors/list/add/:colorId",component:ColorAddComponent},

  {path:"cars/image/add/:carId",component:CarImageAddComponent},
  {path:"cars/image/update/:id",component:CarImageUpdateComponent},
  {path:"image/list",component:CarImageListComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
