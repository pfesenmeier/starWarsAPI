import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/Pokemon';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private _activatedRoute: ActivatedRoute, private pokemonService: ShipService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData.get('query'));
      this.pokemonService.getShip(routeData.get('query')).subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
      console.log(pokemon);
      })
    })
  }

}
