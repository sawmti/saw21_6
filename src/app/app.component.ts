import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-cli';

  items: MenuItem[];

  home: MenuItem;

  constructor(private primengConfig: PrimeNGConfig) {
    this.items = [
      {
        label: 'Buscador de Sets',
        routerLink: ['/carrousel']
      },
      {
        label: 'Cartas',
        routerLink: ['/app-magic-list'],
      },
    ];
    this.home = { icon: 'pi pi-home' };
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
