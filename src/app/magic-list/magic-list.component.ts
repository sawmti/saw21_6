import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

interface RockBand {
  id:string;
  name: string;
  image_uris: any;
  year: string;
  rockBandDescription:string;
}

@Component({
  selector: 'app-magic-list',
  templateUrl: './magic-list.component.html',
  styleUrls: ['./magic-list.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class MagicListComponent implements OnInit {

  rockBands: RockBand[];
  rockBandSelect: RockBand[];
  draggedProduct?: RockBand | null;

  id: string | null;
  name: string | null;
  numbers: Array<Number>;
  totalBandSelected: any = {
    num: 0
  };
  constructor(private http: HttpClient,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
    this.id = localStorage.getItem('ID_DESTINO');
    this.name = localStorage.getItem('NAME_COUNTRY');
    this.rockBands = [];
    const arr = localStorage.getItem('ITEM_CARGADOS');
    if (arr) {
      this.rockBandSelect = JSON.parse(arr);
    } else {
      this.rockBandSelect = [];
    }
    this.calcTotal();
    this.numbers = [1, 2, 3, 4];
  }

  ngOnInit(): void {
    const arr = this.http.get('/api/getbands/' + this.id);
    arr.subscribe((data: any) => {
      console.log('BANDS_ID:', this.id)
      this.rockBands = data.data;
      console.log('BANDS:', this.rockBands);
    });
  }

  calcTotal() {
    this.totalBandSelected.num = this.rockBandSelect.length + 1;
  }

  saveItemStorage(card: RockBand, num: number) {
    const arr = localStorage.getItem('ITEM_CARGADOS');
    let st;
    if (arr) {
      st = JSON.parse(arr);
    } else {
      st = [];
    }
    st.push(card);
    const salida = JSON.stringify(st);
    localStorage.setItem('ITEM_CARGADOS', salida);
  }

  deleteItemStorage(card: RockBand) {
    let arr = localStorage.getItem('ITEM_CARGADOS');
    let st;
    if (arr) {
      st = JSON.parse(arr);
    } else {
      st = [];
    }
    let draggedProductIndex = this.findIndex(card, this.rockBandSelect);
    st = st.filter((val: any, i: any) => i != draggedProductIndex);
    const salida = JSON.stringify(st);
    localStorage.setItem('ITEM_CARGADOS', salida);
  }

  dragStart(product: RockBand) {
    this.draggedProduct = product;
  }
  drop() {
    if (this.draggedProduct) {
      this.saveItemStorage(this.draggedProduct, 1);
      let draggedProductIndex = this.findIndex(this.draggedProduct, this.rockBands);
      this.rockBandSelect = [...this.rockBandSelect, this.draggedProduct];
      this.rockBands = this.rockBands.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
      this.calcTotal();
    }
  }

  deleteCard(event: Event, product: RockBand) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Estas seguro que deseas eliminar a ' + product.name + '?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Has eliminado con exito' });
        this.deleteItemStorage(product);
        let draggedProductIndex = this.findIndex(product, this.rockBandSelect);
        this.rockBands = [...this.rockBands, product];
        this.rockBandSelect = this.rockBandSelect.filter((val, i) => i != draggedProductIndex);
        this.draggedProduct = null;
        this.calcTotal();
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Sigue igual', detail: 'No se ha eliminado' });
      }
    });

  }

  changeNumber(event: any, product: RockBand) {
    this.deleteItemStorage(product);
    this.saveItemStorage(product, event.value);
    this.calcTotal();
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(card: RockBand, array: Array<RockBand>) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (card.name === array[i].name) {
        index = i;
        break;
      }
    }
    return index;
  }
}
