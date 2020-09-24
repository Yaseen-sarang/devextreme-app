import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any[];
  showSubmenuModes: any;
  showFirstSubmenuModes: any;

  constructor(private _homeservice: HomeService) {
    this.products = _homeservice.getProducts();
    this.showSubmenuModes = [
      {
        name: 'onHover',
        delay: { show: 0, hide: 500 },
      },
      {
        name: 'onClick',
        delay: { show: 0, hide: 300 },
      },
    ];
    this.showFirstSubmenuModes = this.showSubmenuModes[0];
  }
  itemClick(data) {
    /* let item = data.itemData;

    if (item.price) {
      this.currentProduct = item;
    } */
  }
}
