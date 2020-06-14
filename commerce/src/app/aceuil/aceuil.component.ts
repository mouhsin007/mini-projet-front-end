import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../services/produit.service';
import {Produit} from '../models/produit.model';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {

  constructor(private produitService: ProduitService) { }
  ngOnInit(): void {
    this.produitService.getProduit().subscribe(
      response =>{this.produitService.handleSuccessfulResponseAceuil(response);}
    );
    console.log(this.produits);
  }
  get produits(): Array<Produit>{
    return this.produitService.produits;
  }

}
