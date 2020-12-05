import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LpHeaderComponent } from './lp-header/lp-header.component';
import { LpMapComponent } from './lp-map/lp-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LpMapComponent,
    LpHeaderComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
