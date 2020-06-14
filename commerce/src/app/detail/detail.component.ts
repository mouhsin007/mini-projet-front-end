import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Produit} from '../models/produit.model';
import {ProduitService} from '../services/produit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private produitService: ProduitService, private router: Router) { }
get produit(): Produit {
    return this.produitService.produit;
}
  ngOnInit(): void {
  }

}
