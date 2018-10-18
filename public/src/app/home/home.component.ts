import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newCake:any;
  allCakes: any;
  selectedCake: any;

  constructor(private _httpService: HttpService) { 
    
  }

  resetCake(){
    this.newCake={
      name: "",
      servings:1,
      bakerName:"",
      imgUrl:""
    }
  }



  ngOnInit() {
    this.resetCake();
    this.getCakes();
  }

  getCakes(){
    let observable = this._httpService.getCakes();
      observable.subscribe((data) => {
        this.allCakes = data;
        console.log("Got our tasks!", data)
      });
    } 

  makeCake(){
    console.log(`Hitting Component. Cake= ${this.newCake}`);
    let obs = this._httpService.makeCake(this.newCake);
    obs.subscribe((data)=>{
      console.log(`Coming back to component again`);
      this.resetCake();
      this.getCakes();
    });
  }

  selectCake(cake){
    this.selectedCake=cake;
  }

  dataFromChild(eventData){
    // console.log(`Got info from rating component ${eventData}`)
    this.getCakes();
  }




}
