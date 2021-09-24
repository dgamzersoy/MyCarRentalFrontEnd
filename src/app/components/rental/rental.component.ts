import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  response1:string;
  denemeRent:Rental = {carId:1, customerId:1, rentDate : new Date("2021-10-10"), returnDate: new Date("2021-10-11"), rentalId:3}
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
    })}
  addRental(rental:Rental){
    this.rentalService.addRental(rental).subscribe(response=>{
      this.response1 = response.message
    })
  }
  deleteRental(rental:Rental){
    this.rentalService.deleteRental(rental).subscribe(response=>{
      this.response1 = response.message
    })
  }
  
  
  }
