import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShipDetailComponent } from './components/ships/ship-detail/ship-detail.component';

const routes = [
  { path: 'pokemon', component: ShipDetailComponent},
  { path: '**', component: ShipDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShipDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
