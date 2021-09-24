import { Component, OnInit } from '@angular/core';

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

  constructor(private carService:CarService) { }

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

}
