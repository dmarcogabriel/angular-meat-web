import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// PROVIDERS
import { RestaurantsService } from 'app/restaurants/restaurants.service';

// INTERFACES
import { MenuItem } from './../menu-item/menu-item.model';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuForRestaurant(this.route.parent.snapshot.params['id']);
  }

  // EVENTO CHAMADO PELO COMPONENTE FILHO
  addToCart(item: MenuItem) {
    console.log(item);
  }

}
