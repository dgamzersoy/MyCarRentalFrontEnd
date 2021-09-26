import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';

import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]=[]
  singleColor:Color;

  constructor(private colorService:ColorService,private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.getColor();
  }

  getColor(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
}

  
delete(colorId:number){
    
  this.colorService.getByColorId(colorId).subscribe(response=>{
    this.singleColor=response.data
    this.colorService.deleteColor(this.singleColor).subscribe(response=>{
      this.toastrService.success(response.message, "Başarılı");
    }, responseError=>{
      this.toastrService.error(responseError.message, "Dikkat");
    })
  })
}



}
