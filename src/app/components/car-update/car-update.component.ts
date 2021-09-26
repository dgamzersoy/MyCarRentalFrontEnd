import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CarDetailDto } from 'src/app/models/Dto/carDetailDto';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm :FormGroup;
  colors:Color[]=[]
  brands:Brand[]=[]
  car:Car;
  id:number;
  cars:Car[]=[];
  carDetailDto:CarDetailDto[]=[];
  singleCar:Car;
  imageUrl: string = "https://localhost:44359";
  singleCarImage:CarImage;
  carImage:CarImage[]=[];

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,
    private colorService:ColorService,private router:Router,
    private brandService:BrandService,private carService:CarService,
    private activatedRoute:ActivatedRoute,private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getByCarId(params["id"])
  })
    this.createCarUpdateForm()
    this.getBrands()
    this.getColor()
  }

createCarUpdateForm(){
  this.carUpdateForm = this.formBuilder.group({
  
    description:["",Validators.required],
    colorId:["",Validators.required],
    brandId:["",Validators.required],
    modelYear:["",Validators.required],
    dailyPrice:["",Validators.required]
  })
}
  update(){
      if(this.carUpdateForm.valid){
        let carModel = Object.assign({},this.carUpdateForm.value)
       this.carService.updateCar(carModel).subscribe(response=>{
          this.toastrService.success(response.message,"Başarılı")
          this.backToList();
        },responseError=>{
          if(responseError.error.Errors.length>0){
            for (let i = 0; i <responseError.error.Errors.length; i++) {
                     this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hatalı")
                     console.log(responseError.error.Errors[i].ErrorMessage);
                     
          }
        }
      })
        
      }else{
        this.toastrService.error("Form Eksik")
      }
      
    }

    getByImageId(carId:number){
      this.carImageService.getByCarId(carId).subscribe(response=>{
          this.carImage=response.data
        })
    }

getColor(){
  this.colorService.getColors().subscribe(response => {
    this.colors = response.data
  })
}

getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data
  })
}

getByCarId(id:number){
  this.carService.getByCarId(this.activatedRoute.snapshot.params["id"]).subscribe(response=>{
    this.car = response.data
    this.id=this.car.id
    console.log(this.car)
  
    
  })
}
backToList(){
  this.router.navigate(["cars/list"])
}


}
