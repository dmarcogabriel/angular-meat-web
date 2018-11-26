import { Routes } from '@angular/router';

// HOME PAGE
import { HomeComponent } from './home/home.component';

// ABOUT PAGE
import { AboutComponent } from './about/about.component';

// RESTAURANTS PAGE
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

// childrens
  import { MenuComponent } from './restaurant-detail/menu/menu.component';
  import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

// ORDER PAGE
import { OrderComponent } from './order/order';


export const ROUTES: Routes = [

  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', component: OrderComponent}

];
