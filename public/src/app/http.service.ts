import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) { }

  getCakes(){
    return this._http.get('/cakes');
  }

  makeCake(cake){
    console.log(`Hitting Service. Cake= ${cake}`)
    return this._http.post("/cakes", cake);
  }

  makeRating(rating, id){
    console.log(`Hitting Service. Rating= ${rating}`);
    return this._http.put("/rate/"+id, rating);
  }
}
