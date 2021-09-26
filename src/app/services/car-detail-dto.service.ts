import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/Dto/carDetailDto';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {
  
  apiUrl="https://localhost:44359/api/cars/";
  constructor(private httpClient:HttpClient) { }
 
 
  getCarDetailGetAlls():Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getcardetaildtos";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

  getCarDetailById(id:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getallbydetaildto?carId="+id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }

}
