import { Component, OnInit } from '@angular/core';

// MODEL
import { Restaurant } from './restaurant/restaurant.model';

// PROVIDERS
import { RestaurantsService } from './restaurants.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurantsService
      .getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
