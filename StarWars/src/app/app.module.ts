import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ShipDetailComponent } from './components/ships/ship-detail/ship-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShipIndexComponent } from './components/ships/ship-index/ship-index.component';
const routes = [
  { path: 'pokemon', component: ShipDetailComponent},
  { path: '**', component: ShipDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailComponent,
    ShipIndexComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
