import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ShipDetailComponent } from './components/ships/ship-detail/ship-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShipIndexComponent } from './components/ships/ship-index/ship-index.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTableModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule
 } from '@angular/material';
import { ShipService } from './services/ship.service';


const routes = [
  { path: 'pokemon/:query', component: ShipDetailComponent},
  { path: '**', component: ShipIndexComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailComponent,
    ShipIndexComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    ShipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
