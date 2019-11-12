import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/app/services/ship.service';
import { Pokemon } from 'src/app/models/Pokemon';
import { MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-index',
  templateUrl: './ship-index.component.html',
  styleUrls: ['./ship-index.component.css']
})
export class ShipIndexComponent implements OnInit {


  private searchForm: FormGroup;
    
  columnNames = ['Name','Details']

  dataSource: MatTableDataSource<Pokemon>;

  constructor(private form: FormBuilder, private _shipService: ShipService, private router: Router) {
      this.createForm();
   }

  ngOnInit() {
      this._shipService.getShips().subscribe((pokemons: Pokemon[]) => {
        this.dataSource = new MatTableDataSource<Pokemon>(pokemons);
        console.log(pokemons);
      });
  }

  createForm(){
      this.searchForm = this.form.group({
        Search: new FormControl
      });
  }

  onSubmit(){

  }

}



