import { Component, OnInit } from '@angular/core';
import { item } from '../../models/item';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ItemsServiceService} from '../../services/items-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  item: item;
  id: string;
  constructor(private data :ItemsServiceService,
              private rout : ActivatedRoute,
              private flash : FlashMessagesService,
              private router: Router)
    {
      this.id = this.rout.snapshot.params['id'];
      this.data.getItem(this.id).subscribe( item => {
        this.item = item;
        });
      }
    

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: item, valid: boolean})
  {
    if(valid)
    {
      
      this.data.updateItem(this.item);
      this.flash.show('Item Udated ',{
        cssClass: 'alert-success', timeout:3000
      });
      this.router.navigate(['/']);
    }
    else
    {
      this.flash.show('Please fill out the form correctly',{
        cssClass: 'alert-danger', timeout:3000
      });
    }
  }

}
