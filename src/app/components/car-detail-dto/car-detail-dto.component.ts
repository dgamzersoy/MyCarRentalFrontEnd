import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { Rental } from 'src/app/models/rental';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {


  carDetailDto:CarDetailDto[]=[];
  carDetailById:CarDetailDto;
  carImage: CarImage[]=[];
  singleCarImage:CarImage;
  imageUrl: string = "https://localhost:44359";
  rent:boolean = false;
  paymen:boolean=false;
  constructor(private carDetailDtoService:CarDetailDtoService,private carService:CarService,private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByCarId(params["id"]);
      }else{
        this.getCarDetailGetAlls();
      }
    })
  }

  getCarDetailGetAlls(){
    this.carDetailDtoService.getCarDetailGetAlls().subscribe(response=>{
      console.log(response);
      this.carDetailDto=response.data
    })
  }
  getByImageId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
        this.carImage=response.data
      })
  }

  addToRental(rental:Rental){
    this.toastrService.success("SEPETE EKLENDİ");
  this.cartService.addToRental(rental);
  }

  getCarsByCarId(id:number){
    console.log("component getCarsByCarId çalıştı")
    this.carDetailDtoService.getCarDetailById(id).subscribe(response=>{
      this.carDetailDto = response.data;
    })
  }
  rental(){
    this.rent=true;
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





