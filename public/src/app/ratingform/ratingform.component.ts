import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-ratingform',
  templateUrl: './ratingform.component.html',
  styleUrls: ['./ratingform.component.css']
})
export class RatingformComponent implements OnInit {
  newRating: any;
  @Input() currentCake: any;
  @Output() emitter = new EventEmitter();

  constructor(private _httpService: HttpService) { 
    this.resetRating();
  }

  ngOnInit() {

  }

  resetRating(){
    this.newRating={
      stars:1,
      comment:""
    }
  }

  makeRating(id:number){
    console.log(id)
    let obs = this._httpService.makeRating(this.newRating, id);
    obs.subscribe(data=>{
      console.log(data);
      this.emitter.emit("Hello");
    });
  }

}
