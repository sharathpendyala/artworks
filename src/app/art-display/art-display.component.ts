import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-art-display',
  templateUrl: './art-display.component.html',
  styleUrls: ['./art-display.component.css']
})
export class ArtDisplayComponent {
  artsList!:any
  constructor(private arts:ArtsService,private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params=>{
        let _id = +params['id']
        this.arts.getArt(_id).subscribe(res =>{
          console.log(res)
          this.artsList = res['data']
          console.log(this.artsList)
        })
    })
    
  } 
}
