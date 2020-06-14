import { Component, OnInit } from '@angular/core';
import {Produit} from '../../models/produit.model';
import {ProduitService} from '../../services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  constructor(private produitService: ProduitService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.produitService.getProduit().subscribe(
      response => this.produitService.handleSuccessfulResponse(response)
    );
    console.log(this.produits);
  }

  deleteProduit(id: number){
    this.produitService.deletePrduit(id);
  }
  setProduit(detailProduit: Produit){
    this.produitService.produit= detailProduit;
    this.router.navigate(['detail']);
  }
  get produits(): Array<Produit> {
   return  this.produitService.produits;
  }


}
