import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LpHeaderComponent } from './lp-header/lp-header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusInputDirective } from './directives/focus-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    LpHeaderComponent,
    SearchbarComponent,
    FocusInputDirective
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
