import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  color:Color;

  constructor(private formBuilder:FormBuilder,private colorService:ColorService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {

    this.createColorForm();
    this.activatedRoute.params.subscribe(params =>{
      if(params["colorId"]){
        this.getColorById(params["colorId"])
      }
    })
  }

  createColorForm(){
    this.colorUpdateForm = this.formBuilder.group({
      colorName: ["",Validators.required]
    })
  }
  
  getColorById(colorId : number){
    this.colorService.getByColorId(colorId).subscribe(response =>{
      this.color= response.data
    })
  }

  updateColor(){
      if(this.colorUpdateForm.valid){
        let colorModel = Object.assign({},this.colorUpdateForm.value)
  colorModel.colorId = this.color.colorId
  this.colorService.updateColor(colorModel).subscribe(response=>{
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
    this.router.navigate(["colors/list"])
  }

}



