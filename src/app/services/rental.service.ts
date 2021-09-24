import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44359/api/rentals/";
  rental:Rental
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + "add"
    return this.httpClient.post<ResponseModel>(newPath, rental)
  }
  deleteRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModel>(newPath, rental)
  }

}
