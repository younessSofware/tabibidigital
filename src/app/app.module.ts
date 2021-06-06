import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { TestPFEComponent } from './test-pfe/test-pfe.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPFEComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
