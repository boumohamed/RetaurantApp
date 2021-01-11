import { Component, OnInit } from '@angular/core';

import { CommandeService } from '../../services/commande.service';
import { commande } from '../../models/commande';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes: commande[];

  id: string;
  constructor(private data : CommandeService) { }

  ngOnInit(): void {
    this.data.getCommandes().subscribe(commandes => {
      this.commandes = commandes; 
    });
  }

  
  
  

}
