import { Component, OnInit } from '@angular/core';
import { item } from '../../models/item';
import { ItemsServiceService} from '../../services/items-service.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  id: string;
  item: item;
  constructor(private  data: ItemsServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.data.getItem(this.id).subscribe( item => {
      
    this.item = item;
    })
  };
  
  }


