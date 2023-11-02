import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtsService } from '../arts.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  reactiveForm! : FormGroup
  @Output() changeEvent = new EventEmitter<string> ();
  constructor(private arts:ArtsService,private fb:FormBuilder,private router:Router){
    this.reactiveForm = this.fb.group({
      searchValue:''
    })
    this.reactiveForm.get('searchValue')?.valueChanges.subscribe(res =>{
      console.log(res)
      this.arts.emitSubject(res)
    })
  }
  addToWishlist() {
    if(!this.arts.login)
    this.router.navigate(['/login'])
    else
    this.router.navigate(['/wishlist'])
  }
}
