import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// ERROR HANDLER
import { ErrorHandler } from './../app.error-handler';

// OBSERVABLE rxJs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// MODEL
import { Restaurant } from './restaurant/restaurant.model';

// API ROUTE
import { MEAT_API } from './../app.api';


@Injectable()
export class RestaurantsService {

  constructor(
    private http: Http
  ) { }

  // GET ALL RESTAURANTS
  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  // GET RESTAURANTS BY ID
  getRestaurantsById(id: string) {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
