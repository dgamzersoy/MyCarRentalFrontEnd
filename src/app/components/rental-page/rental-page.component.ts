import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-page',
  templateUrl: './rental-page.component.html',
  styleUrls: ['./rental-page.component.css']
})
export class RentalPageComponent implements OnInit {

  rental:Rental;
  rentDate:Date;
  returnDate:Date;
  responseModel:ResponseModel;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
  }
  addRental(rental:Rental){
    this.rentalService.addRental(rental).subscribe(response=>{
      this.responseModel = response;
    })
  }

  setRental(rentDate:Date, returnDate:Date){
    this.rental = { carId : 2004, customerId : 1, rentDate : this.rentDate, returnDate : this.returnDate };
    this.addRental(this.rental);
  }

}
