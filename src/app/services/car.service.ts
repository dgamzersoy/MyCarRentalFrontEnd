import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/Dto/carDetailDto';
import { ItemResponseModel } from '../models/itemResponseModel';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44359/api/";
 
  constructor(private httpClient:HttpClient) { }
 
 
    getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getall" 
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
    
    }

    getCarDetail():Observable<ListResponseModel<CarDetailDto>>{
      let newPath = this.apiUrl + "cars/getcardetaildtos";
      return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  
    }
    getByCarId(id:number):Observable<ItemResponseModel<Car>>{
      let newPath = this.apiUrl + "cars/getbyid?id=" +id
      return this.httpClient.get<ItemResponseModel<Car>>(newPath)
    }
   
    getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
     let newPath=this.apiUrl + "cars/getallbybrandId?brandId="+brandId
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
      
      }
      getCarsByColors(colorId:number):Observable<ListResponseModel<Car>>{
        let newPath=this.apiUrl+"cars/getAllByBrandId?colorId="+colorId
        return this.httpClient.get<ListResponseModel<Car>>(newPath)
      }
      addCar(car:Car):Observable<ResponseModel>{
        let newPath = this.apiUrl+"cars/add"
        return this.httpClient.post<ResponseModel>(newPath,car)
      }
      updateCar(car:Car):Observable<ResponseModel>{
        let newPath = this.apiUrl+"cars/update"
        return this.httpClient.post<ResponseModel>(newPath,car)
      }
     
      getCarDetailDto(carId:number):Observable<ListResponseModel<Car>>{
        let newPath = this.apiUrl + "cars/getcardetaildto?carId="+carId;
        return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }

   
      

  }

