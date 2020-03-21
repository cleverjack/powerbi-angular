import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { NgxPowerBiModule } from './components/power-bi/public_api';

@NgModule({
  declarations: [
    AppComponent,
    PowerbiComponent,
    PowerbiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPowerBiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
