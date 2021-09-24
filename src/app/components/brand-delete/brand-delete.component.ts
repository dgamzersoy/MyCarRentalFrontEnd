import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {

  brandDeleteForm :FormGroup;
  brand:Brand;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService,private toastrService:ToastrService,private router:Router ,private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.createBranDeleteForm();

    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getBrandById(params["brandId"])
      }
    })
  }
  


  createBranDeleteForm(){
    this.brandDeleteForm=this.formBuilder.group({
      brandName:["",Validators.required],
       
    })
    }
    getBrandById(brandId : number){
      this.brandService.getByBrandId(brandId).subscribe(response =>{
        this.brand = response.data
      })
    }

    deleteBrand(){
      if(this.brandDeleteForm.valid){
        let brandModel= Object.assign({},this.brandDeleteForm.value)
        this.brandService.deleteBrand(brandModel).subscribe(response=>{
          this.toastrService.success(response.message,"marka silindi")
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
     backToList(){
      this.router.navigate(["brands/list"])
    }
  
}
