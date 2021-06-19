import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthModule } from './modules/auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { TestPFEComponent } from './test-pfe/test-pfe.component';
import { ChatbootComponent } from './chatboot/chatboot.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPFEComponent,
    ChatbootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    AuthModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
