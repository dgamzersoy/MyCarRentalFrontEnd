import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';

import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  cars:Car[]=[];
  carDetailDto:CarDetailDto[]=[];
  filterText=""
 
 
  
  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })

    

  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
    })
    }
    getCarsByBrand(brandId:number){
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
        this.cars=response.data
      })
      }

      getCarsByColor(colorId:number){
        this.carService.getCarsByBrand(colorId).subscribe(response=>{
          this.cars=response.data
        })
        }

  

}