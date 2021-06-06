import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { PipesModule } from './pipes/pipes.module';
import { SingingComponent } from './modules/singing/singing.component';
import { TestPFEComponent } from './test-pfe/test-pfe.component';

@NgModule({
  declarations: [
    AppComponent,
    SingingComponent,
    TestPFEComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
