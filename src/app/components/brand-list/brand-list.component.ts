import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
brands:Brand[]=[]
singleBrand:Brand;
  constructor(private brandService:BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }

  
  delete(brandId:number){
    
    this.brandService.getByBrandId(brandId).subscribe(response=>{
      this.singleBrand=response.data
      this.brandService.deleteBrand(this.singleBrand).subscribe(response=>{
        this.toastrService.success(response.message, "Başarılı");
      }, responseError=>{
        this.toastrService.error(responseError.message, "Dikkat");
      })
    })
  }

}
