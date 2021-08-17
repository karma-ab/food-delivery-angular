import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchBy : any = ""


  public hotelsData = [{
    "city" : "Mumbai",
    "restaurants" : [
      "Mumbai Darbar",
      "Taj",
      "Jinnys",
      "New York Cafe",
      "Gear Cafe"
      ]
  },
  {
     "city" : "Delhi",
    "restaurants" : [
      "Delhi Darbar",
      "Taj",
      "Indian Accent",
      "Leela Palace",
      "Orient Express"
      ]
  },{
     "city" : "Chandigarh",
    "restaurants" : [
      "Chandigarh Darbar",
      "Chilli & Pepper",
      "Sagar Ratna",
      "Banjara Dhaba",
      "Shangrila"
      ]
  },{
     "city" : "Kolkata",
    "restaurants" : [
      "Kolkata Darbar",
      "Paris Cafe",
      "Dum Pukht",
      "Waterside Cafe",
      "Tamara"
      ]
  },{
     "city" : "Chennai",
    "restaurants" : [
      "Chennai Darbar",
      "Tokyo Cafe",
      "Indian Table",
      "Krishna Restaurant",
      "Five Spice"
      ]
  }]
  showResults: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  checkSearch(){
    if(this.searchBy.length == 0){
      this.showResults = false
    } else {
      this.showResults = true
    }
    
  }
}
