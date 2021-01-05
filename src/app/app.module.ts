import { ElevesService } from './services/eleve.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistreAppelComponent } from './registre-appel/registre-appel.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistreAppelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ElevesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
