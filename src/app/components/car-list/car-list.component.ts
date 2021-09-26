import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars:Car[]=[];
  carDetailDtos:CarDetailDto[]=[];
  singleCar:Car;
  imageUrl: string = "https://localhost:44359";

  constructor(private carService:CarService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCarDetails();
    this.getCars();
  }

  getCarDetails(){
    this.carService.getCarDetail().subscribe(response => {
      this.carDetailDtos = response.data
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars= response.data
    })
  }

 delete(id:number){
    
    this.carService.getByCarId(id).subscribe(response=>{
      this.singleCar=response.data
      this.carService.delete(this.singleCar).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı");
      }, responseError=>{
        this.toastrService.error(responseError.message, "Dikkat");
      })
    })


  }}