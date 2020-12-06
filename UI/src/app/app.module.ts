import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LpHeaderComponent } from './lp-header/lp-header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusInputDirective } from './directives/focus-input.directive';
import { LpMapComponent } from './lp-map/lp-map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LpHeaderComponent,
    SearchbarComponent,
    FocusInputDirective,
    LpMapComponent,
    LpHeaderComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
