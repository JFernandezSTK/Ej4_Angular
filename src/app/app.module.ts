import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArraysTsComponent } from './arrays-ts/arrays-ts.component';
import { FormsModule } from '@angular/forms';
import { UnionDeTiposTsComponent } from './union-de-tipos-ts/union-de-tipos-ts.component';
import { EnumeracionesTsComponent } from './enumeraciones-ts/enumeraciones-ts.component';
import { DirectivasAngularComponent } from './directivas-angular/directivas-angular.component';
import { PadreRecibeComponent } from './padre-recibe/padre-recibe.component';
import { HijoEnviaComponent } from './hijo-envia/hijo-envia.component';
import { PadreEnviaComponent } from './padre-envia/padre-envia.component';
import { HijoRecibeComponent } from './hijo-recibe/hijo-recibe.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraysTsComponent,
    UnionDeTiposTsComponent,
    EnumeracionesTsComponent,
    DirectivasAngularComponent,
    PadreRecibeComponent,
    HijoEnviaComponent,
    PadreEnviaComponent,
    HijoRecibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
