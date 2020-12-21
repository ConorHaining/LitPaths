import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LpHeaderComponent } from './lp-header/lp-header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusInputDirective } from './directives/focus-input.directive';
import { LpMapComponent } from './lp-map/lp-map.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentLocationButtonComponent } from './current-location-button/current-location-button.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import * as Sentry from '@sentry/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LpHeaderComponent,
    SearchbarComponent,
    FocusInputDirective,
    LpMapComponent,
    LpHeaderComponent,
    CurrentLocationButtonComponent,
    LocationSearchComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
