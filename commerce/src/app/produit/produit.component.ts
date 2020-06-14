import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProduitService} from '../services/produit.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService: ProduitService,
              private activedRoute: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

}
