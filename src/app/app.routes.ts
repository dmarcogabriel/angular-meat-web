import { Routes } from '@angular/router';

// HOME PAGE
import { HomeComponent } from './home/home.component';

// ABOUT PAGE
import { AboutComponent } from './about/about.component';

// RESTAURANTS PAGE
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';


export const ROUTES: Routes = [

  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent}

];
