import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm :FormGroup;
  colors:Color[]=[];
  brands:Brand[]=[];

  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private router:Router,
    private colorService:ColorService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
  }


createCarAddForm(){
this.carAddForm=this.formBuilder.group({
  description:["",Validators.required],
  colorId:["",Validators.required],
  brandId:["",Validators.required],
  modelYear:["",Validators.required],
  dailyPrice:["",Validators.required]

})
}
add(){
  if(this.carAddForm.valid){
    let carModel= Object.assign({},this.carAddForm.value)
    this.carService.addCar(carModel).subscribe(response=>{
      this.toastrService.success(response.message,"ürün eklendi")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for(let i=0; i<=responseError.error.Errors.length;i++){
     
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"hatalı giriş")
      }}
  
    })
  }else{
   this.toastrService.error("formunuz eksik")
 }

 }

  
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }
 
 backToList(){
  this.router.navigate(["cars/list"])
}
 }
 
