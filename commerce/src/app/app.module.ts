import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitCreateComponent } from './produit/produit-create/produit-create.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';
import { PremierPageComponent } from './premier-page/premier-page.component';


const routes: Routes =[
  {path: '', component: PremierPageComponent},
  {path: 'add-produit', component: ProduitComponent},
  {path: 'aceuil', component: AceuilComponent},
  {path: 'inscrire', component: InscrireComponent},
  {path: 'premier-page', component: PremierPageComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'connecter', component: ConnecterComponent},
  {path: '**', redirectTo: 'aceuil', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ProduitCreateComponent,
    ProduitListComponent,
    AceuilComponent,
    InscrireComponent,
    ConnecterComponent,
    MenuComponent,
    DetailComponent,
    PremierPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
