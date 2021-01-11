import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { ItemsServiceService} from './services/items-service.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { from } from 'rxjs';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ItemsComponent } from './components/items/items.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServeComponent } from './components/serve/serve.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AddCommandeComponent } from './components/add-commande/add-commande.component';
import { CommandeDetailsComponent } from './components/commande-details/commande-details.component';

@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ItemDetailsComponent,
    NotFoundComponent,
    ContactUsComponent,
    ItemsComponent,
    SidebarComponent,
    ServeComponent,
    CommandesComponent,
    AddCommandeComponent,
    CommandeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
  ],
  providers: [
    ItemsServiceService,
    FlashMessagesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
