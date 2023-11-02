import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm!:FormGroup
  routervar = "/signup"
  constructor(private router:Router,private fb:FormBuilder,private arts:ArtsService)
  {
    this.reactiveForm = this.fb.group({
      email : new FormControl(''),
      password:new FormControl('')
    })
  }
  x:any
  handleUserDetails(){
    this.x = localStorage.getItem('users')
    console.log(this.x)
    if(this.x!=null)
    {
      this.x = JSON.parse(this.x)
    }
    if(this.x.email == this.reactiveForm.value.email && this.x.password == this.reactiveForm.value.password)
    {
      this.arts.login = true
      this.router.navigate(['/wishlist'])
    }
    else{
      alert('Enter valid Credentials')
    }
  }
}
