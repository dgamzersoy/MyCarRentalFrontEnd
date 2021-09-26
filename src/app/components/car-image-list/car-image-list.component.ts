import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image-list',
  templateUrl: './car-image-list.component.html',
  styleUrls: ['./car-image-list.component.css']
})
export class CarImageListComponent implements OnInit {
  singleCarImage:CarImage;
  carImage:CarImage[]=[];
  carDetailDto:CarDetailDto[]=[];
  imageUrl: string = "https://localhost:44359";

  constructor(private carImageService:CarImageService,
    private toastrService:ToastrService,private activatedRoute:ActivatedRoute,
    private carDetailDtoService:CarDetailDtoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByCarId(params["id"]);
      }else{
        this.getCarDetailGetAlls();
      }
    })
  }
  getByImageId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
        this.carImage=response.data
      })
  }
  
  getCarDetailGetAlls(){
    this.carDetailDtoService.getCarDetailGetAlls().subscribe(response=>{
      console.log(response);
      this.carDetailDto=response.data
    })
  }
  getCarsByCarId(id:number){
    console.log("component getCarsByCarId çalıştı")
    this.carDetailDtoService.getCarDetailById(id).subscribe(response=>{
      this.carDetailDto = response.data;
    })
  }
  
  delete(id:number){
    
    this.carImageService.getById(id).subscribe(response=>{
      this.singleCarImage=response.data
      this.carImageService.delete(this.singleCarImage).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı");
      }, responseError=>{
        this.toastrService.error(responseError.message, "Dikkat");
      })
    })
  }

}
