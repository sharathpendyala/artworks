import { Component } from '@angular/core';
import { ArtsService } from '../arts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productsList: Array<any> = [];
  length = 123265;
  pageSize = 12;
  pageIndex = 0;
  constructor(private router:Router,private arts: ArtsService) {
    localStorage.setItem('users',JSON.stringify({email:'',password:''}))
    this.arts.fetchFxn().subscribe((res) => {
      this.productsList = res['data'];
      // console.log(this.productsList);
      // this.productsList.forEach((obj)=>{
      //   console.log(obj.id)
      // })
    });
    this.arts.searched.subscribe((recievedData) => {
      if (recievedData == '') {
        this.arts.fetchFxn().subscribe((res) => {
          this.productsList = res['data'];
          console.log(this.productsList);
        });
      } else {
        this.arts.setValue(recievedData).subscribe((res) => {
          this.productsList = res['data'];
          console.log(this.productsList);
        });
      }
    });
    
  }
  ids = [1, 2, 3, 4, 5, 6, 7, 9, 10];
  curr = 1;
  fxn(id: number) {
    this.curr = id;
    this.arts.fetchParticularPage(id,12).subscribe((res) => {
      this.productsList = res['data'];
    });
  }
  paginate(e: any) {
    console.log(e);
    // if(passed === 'left')
    // {
    //   this.curr -= 1
    // }
    // else{
    //   this.curr += 1
    // }
    console.log(this.pageIndex,this.pageSize)
    console.log(e.pageIndex,e.pageSize)
    if (this.pageIndex != e.pageIndex) {
      this.arts.fetchParticularPage(e.pageIndex,12).subscribe((res) => {
        this.productsList = res['data'];
      });
    }
    else if(this.pageSize != e.pageSize)
    {
      this.arts.fetchParticularPage(e.pageIndex,e.pageSize).subscribe((res) => {
        this.productsList = res['data'];
      });
    }
    else{
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex
    }
  }
  addToWishlist(product: any, id: string) {
    if (this.arts.addedwishList.indexOf(product.id) == -1)
      this.arts.wishList.push(product);
    this.arts.addedwishList.push(product.id);
    if(!this.arts.login)
    this.router.navigate(['/login'])
    else
    this.router.navigate(['/wishlist'])
  }
  
}
