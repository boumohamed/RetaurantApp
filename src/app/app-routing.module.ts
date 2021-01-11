import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServeComponent } from './components/serve/serve.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AddCommandeComponent } from './components/add-commande/add-commande.component';
import { CommandeDetailsComponent } from './components/commande-details/commande-details.component';

const routes : Routes =
[
  {path : '', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'item/add', component: AddItemComponent},
  {path : 'item/:id', component: ItemDetailsComponent},
  {path : 'contactus', component: ContactUsComponent},
  {path : 'commandes', component: CommandesComponent},
  {path : 'commandes/:id', component: CommandeDetailsComponent},
  {path : 'item/:id/addcommande/:id', component: AddCommandeComponent},
  {path : '**', component: NotFoundComponent},
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports :
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
