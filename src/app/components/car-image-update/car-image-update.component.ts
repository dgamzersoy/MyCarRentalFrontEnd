import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image-update',
  templateUrl: './car-image-update.component.html',
  styleUrls: ['./car-image-update.component.css']
})
export class CarImageUpdateComponent implements OnInit {

  imageUpdateForm:FormGroup;
  id:number;
  selectedImage:File;

  constructor(private carImageService:CarImageService,private toastrService:ToastrService,private router:Router,private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.setImageId(params["id"]);
    })
    this.createImageUpdateForm();
  }


  createImageUpdateForm(){
    this.imageUpdateForm=this.formBuilder.group({
      Image:["",Validators.required],
    })
  }


  update(){
    if(this.imageUpdateForm.valid){
      this.carImageService.update(this.selectedImage, this.id).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error(responseError.message,"Başarısız");
      })
    }

  }
  setSelectedFile(event:any):void {
    this.selectedImage = event.target.files[0];
  }

  setImageId(id:number){
    this.id = id;
  }

}