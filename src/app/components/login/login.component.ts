import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
    }
  }


}
