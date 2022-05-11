import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface Countries {
  id: string;
  name: string;
  icon_svg_uri: string;
  search_uri: string;
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})

export class CarrouselComponent implements OnInit {
  cars: Array<Countries>;
  countrySelected: Countries;
  responsiveOptions: any;

  constructor(private http: HttpClient, private router: Router) {
    this.cars = [];
    const arr = this.http.get('/api/countries');
    console.log(arr);
    this.countrySelected = {
      id: '',
      name: '',
      icon_svg_uri: '',
      search_uri: '',
    }
    arr.subscribe((data: any) => {
      this.cars = data.data;
      this.countrySelected = this.cars[0];
    });

  }

  ngOnInit() {

  }
  handleClick(event: any) {
    console.log(this.countrySelected);
    localStorage.setItem('NAME_COUNTRY', this.countrySelected.name);
    localStorage.setItem('ID_DESTINO', this.countrySelected.id);
    this.router.navigate(['/app-magic-list']);
  }
}
