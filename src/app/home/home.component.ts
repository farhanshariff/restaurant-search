import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Restaurant } from '../shared/models/restaurant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Restaurant[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    //Listening to the changes made in the search bar
    this.route.params.subscribe(params=>{
      if(params.searchTerm)
      this.foods = this.foodService.getAllRestaurantsBySearchTerm(params.searchTerm);
      else if(params.location)
      this.foods = this.foodService.getAllFoodsByLocation(params.location);
      else
      this.foods = this.foodService.getAll();
    })

  }

}
