import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image-add',
  templateUrl: './car-image-add.component.html',
  styleUrls: ['./car-image-add.component.css']
})
export class CarImageAddComponent implements OnInit {

  carId:number;
  imageAddForm:FormGroup;
  selectedImage:File;

  constructor(private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute, private carImageService:CarImageService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.setCarId(params["carId"]);
    })
    this.createImageAddForm();
    console.log(this.carId);    
    console.log("ctor çalıştı");
  }
  createImageAddForm(){
    this.imageAddForm=this.formBuilder.group({
      Image:["",Validators.required],
    })
  }
  add(){
    if(this.imageAddForm.valid){
      this.carImageService.add(this.selectedImage, this.carId).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error(responseError.message,"Başarısız");
      })
    }

  }
  setSelectedImage(event:any):void {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }

  setCarId(id:number){
    this.carId = id;
  }
}
