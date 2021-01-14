import { Component, OnInit } from '@angular/core';
import { ItemsServiceService} from '../../services/items-service.service';
import { item } from '../../models/item';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: item[]; 
  Logged :boolean;
  constructor(private auth : AuthService,
              private data : ItemsServiceService) { }

  ngOnInit(): void {
    this.data.getItems().subscribe(items => {
      this.items = items;     
    });
    this.auth.getauth().subscribe(auth => {
      if(auth.email == 'mb.bouzri@gmail.com')
      {
        this.Logged = true;
      }
        else
          this.Logged = false;
    })
  }

}
