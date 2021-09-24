import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm : FormGroup;
  brand:Brand;
  constructor(private formBuilder:FormBuilder,  private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private brandService:BrandService,
    private router:Router) { }

  ngOnInit(): void {
    this.createBrandForm()
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getBrandById(params["brandId"])
      }
    })
  }

  createBrandForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ["",Validators.required]
    })
  }
  getBrandById(brandId : number){
    this.brandService.getByBrandId(brandId).subscribe(response =>{
      this.brand = response.data
    })
  }

  updateBrand(){
if(this.brandUpdateForm.valid){
  let brandModel = Object.assign({},this.brandUpdateForm.value)
  brandModel.brandId = this.brand.brandId
  this.brandService.updateBrand(brandModel).subscribe(response=>{
    this.toastrService.success(response.message,"başarılı")
  },(responseError)=>{
    if(responseError.error.Errors.lenght>0)
    {
      for(let i=0; i<responseError.error.Errors.length;i++)
      {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"hatalı")
      }
    }
  });
  this.backToList()
}
else{
  this.toastrService.error("başarısız")
}
  }
  backToList(){
    this.router.navigate(["brands/list"])
  }

}
