import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userForm:FormGroup;
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
  this.createUserForm()
  }

    createUserForm(){
      
    this.userForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }



}
