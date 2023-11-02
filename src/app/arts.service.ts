import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtsService {
  artsList: Array<any> = [];
  wishList : Array<any> = [];
  addedwishList: Array<number> = []
  searched = new Subject<any>()
  login = false
  constructor(private api: HttpClient) {
  }
  fetchFxn():  Observable<any> {
    return this.api.get <any> ('https://api.artic.edu/api/v1/artworks')
  }
  fetchParticularPage(page:number,limit:number) : Observable<any>{
    return this.api.get <any> (`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`)
  }
  setValue(passed:string): Observable<any>{
    return this.api.get <any> (`https://api.artic.edu/api/v1/artworks/search?q=${passed}&fields=image_id,id,title`)
  }
  emitSubject(passed:string){
    this.searched.next(passed)
  }
  getArt(passed:number): Observable<any>{
    return this.api.get <any> (`https://api.artic.edu/api/v1/artworks/${passed}`)
  }
}
