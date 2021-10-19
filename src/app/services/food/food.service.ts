import { Injectable } from '@angular/core';
import {Restaurant} from '../../shared/models/restaurant';
import { Location } from 'src/app/shared/models/Location';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Restaurant[]{
    return[
      {
        id:1,
        name: 'Empire',
        averagePrice:  800,
        favorite: false,
        locations: ['FrazerTown'],
        stars: 4.8,
        imageUrl: '/assets/images/foods/res1.jpg',
        averageCookTime: '30 mins',
        dishesAvailable:['Samosa','Kulche','Jalebi','Aloo Parantha']
      },
      {
        id:2,
        name: 'Azure',
        averagePrice: 1000,
        favorite: false,
        locations: ['BensonTown'],
        stars: 4.9,
        imageUrl: '/assets/images/foods/res2.jpg',
        averageCookTime: '20 mins',
        dishesAvailable:['Polenta','Lasagna','Ravioli','Arancini']
      },
      {
        id:3,
        name: 'Savoury',
        averagePrice: 700,
        favorite: false,
        locations: ['MGRoad',],
        stars: 4.5,
        imageUrl: '/assets/images/foods/res3.jpg',
        averageCookTime: '40 mins',
        dishesAvailable:['Grilled halloumi','Foul meddamas','Moutabal/baba ghanoush','Fattoush']
      },
      {
        id:4,
        name: 'Raidan',
        averagePrice: 600,
        favorite: true,
        locations: ['Kamanahalli'],
        stars: 4.4,
        imageUrl: '/assets/images/foods/res4.jpg',
        averageCookTime: '15 mins',
        dishesAvailable:['Hummus','Manakeesh','Falafel','Tabouleh']

      }
    ]
  }
  getAllFoodsByLocation(location: string):Restaurant[]{
    if(location=="all")
      return this.getAll();
    else
      return this.getAll().filter(res=>res.locations?.includes(location));
  }

  getAllLocations(): Location[]{
    return[
      {name:'FrazerTown', count:14},
      {name:'BensonTown', count:1},
      {name:'Kamanahalli', count:4},
      {name:'MGRoad', count:5},
    ]
  }

  getAllRestaurantsBySearchTerm(searchTerm:string):Restaurant[]{
    return this.getAll().filter(res=>res.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getRestaurantById(id:number):Restaurant{
    return this.getAll().find(res=>res.id==id)!;
  }
}
