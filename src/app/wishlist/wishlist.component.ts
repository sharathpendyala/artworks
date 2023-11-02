import { Component } from '@angular/core';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishList:Array<any> = []
  constructor(private arts:ArtsService){
    this.wishList = this.arts.wishList
    console.log(this.wishList)
  }
  removeFavorite(id1:number){
   let idx = this.wishList.findIndex((obj)=>{
      return obj.id == id1
    })
    this.wishList.splice(idx,1)
  }
}
