import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Location } from '../shared/models/Location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations:Location[] = [];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.locations = this.foodService.getAllLocations();
  }

}
