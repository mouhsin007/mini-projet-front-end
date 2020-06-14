import { Injectable } from '@angular/core';
import {Produit} from '../models/produit.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
private _produit: Produit;
private _produits: Array<Produit>;
  produitRecieved: Array<Produit>;

  constructor(private httpClient: HttpClient, private router: Router) { }
  addProduit(newProduit: Produit) {
    return this.httpClient.post<Produit>('http://localhost:8080/store/produit/add', newProduit);
  }

  getProduit() {
    return this.httpClient.get<Array<Produit>>('http://localhost:8080/store/produit/get');
  }
  handleSuccessfulResponse(response) {
    this.produits = response;
  }
  handleSuccessfulResponseAceuil(response) {
    this.produits = new Array<Produit>();
    this.produitRecieved = response;
    for (const produit of this.produitRecieved) {

      const bookwithRetrievedImageField = new Produit();
      bookwithRetrievedImageField.id = produit.id;
      bookwithRetrievedImageField.nom = produit.nom;
      bookwithRetrievedImageField.picbyte =  produit.picbyte;
      bookwithRetrievedImageField.ref = produit.ref;
      bookwithRetrievedImageField.quantite = produit.quantite;
      bookwithRetrievedImageField.prix = produit.prix;
      this.produits.push(bookwithRetrievedImageField);

    }
    console.log(this.produits);
  }
  deletePrduit(id: number){
    this.httpClient.delete<Produit>('http://localhost:8080/store/produit/delete/'+ id).subscribe(
      response =>{
        if (response == null){
          alert('la suprission n est pas fait');
        }else {
          alert('la suprission est bien fait');
        }
      }
    );
  }


  get produit(): Produit {
    if (this._produit == null){
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if (this._produits == null){
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }
}
