import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Restaurant } from '../shared/models/restaurant';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Restaurant;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.food = foodService.getRestaurantById(params.id);
    })
  }

  ngOnInit(): void {
  }

}
