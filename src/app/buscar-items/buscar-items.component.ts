import { Component, OnInit } from '@angular/core';
import { itemsInterface } from '../interfaces/itemsInterface' ;
import { UserService } from '../services/user.services';
import { ItemsService } from '../services/items.service' ;

@Component({
  selector: 'app-buscar-items',
  templateUrl: './buscar-items.component.html',
  styleUrls: ['./buscar-items.component.css']
})
export class BuscarItemsComponent implements OnInit {

  items: Array<itemsInterface> = [];

  seller: any;

  buscar: string;

  constructor(private itemService: ItemsService, private userService: UserService) { }

  ngOnInit() {
  }


  mostrar() {
    this.items = [];
    this.itemService.getAll(this.buscar)
      .subscribe(data => {
        let aux: Array<any> = data.results;
        aux.forEach((itemTemp) => {
          this.userService.getSeller(itemTemp.seller.id.toString())
            .subscribe(data => {
              let item: itemsInterface = {
                itemName: itemTemp.title,
                itemImg: itemTemp.thumbnail,
                sellerName: data.nickname,
                itemCost: itemTemp.price

              };
              this.items.push(item);
              console.log(this.items);
            })
        })
      });
  }
}
