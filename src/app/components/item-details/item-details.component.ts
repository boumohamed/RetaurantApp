import { Component, OnInit } from '@angular/core';
import { item } from '../../models/item';
import { ItemsServiceService} from '../../services/items-service.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  Logged: boolean = false;
  id: string;
  item: item = 
  {
    
    
    name: '',
    image1: '',
    image2: '',
    description: '',
    price: 0,
    chef: ''
  };
  constructor(private  data: ItemsServiceService,
              private route: ActivatedRoute,
              private auth : AuthService,
              private flash : FlashMessagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.data.getItem(this.id).subscribe( item => {
    this.item = item;
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
  deleteItem()
  {
    if(confirm('Are you Sure ?'))
      {
    this.data.deleteItem(this.item);
    this.flash.show('Item deleted successfully:) ',{
      cssClass: 'alert-success', timeout:3000
    });
    this.router.navigate(['/']);
  }
  }
  
  }


