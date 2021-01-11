import { Component, OnInit } from '@angular/core';
import { ItemsServiceService} from '../../services/items-service.service';
import { item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: item[]; 
  constructor(private data : ItemsServiceService) { }

  ngOnInit(): void {
    this.data.getItems().subscribe(items => {
      this.items = items;     
    });
  }

}
