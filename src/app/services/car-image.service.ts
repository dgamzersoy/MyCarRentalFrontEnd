import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarImageService {
apiUrl="https://localhost:44359/api/";
  constructor(private httpClient:HttpClient) { }

  getByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getbycarid?carId=" +carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getImageAll():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

getImage(imagePath:string){
  let newPath=this.apiUrl+imagePath;
  return newPath;
}

add(file:File, carId:number):Observable<ResponseModel>{
  let newPath = this.apiUrl + "carimages/add"
  const formData:FormData = new FormData();
  console.log("servis çalıştı")
  console.log(file)
  console.log(carId)
  formData.append("Image",file);
  formData.append("CarId",carId?.toString());
  return this.httpClient.post<ResponseModel>(newPath,formData,{
    reportProgress: true,
    responseType: 'json'
  });
}

  update(file:File, id:number):Observable<ResponseModel>{
  let newPath = this.apiUrl + "carimages/update"
  const formData:FormData = new FormData();
  console.log("servis çalıştı")
  formData.append("Image",file);
  formData.append("Id",id?.toString());
  return this.httpClient.post<ResponseModel>(newPath,formData,{
    reportProgress: true,
    responseType: 'json'
  });
}

  delete(image:CarImage):Observable<ResponseModel>{
    console.log(image)
    let newPath = this.apiUrl + "carimages/delete"
   
    return this.httpClient.post<ResponseModel>(newPath, image);
    

  }
  
  getById(id:number):Observable<ItemResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getbyid?id="+id;
    return this.httpClient.get<ItemResponseModel<CarImage>>(newPath);
  }
}
