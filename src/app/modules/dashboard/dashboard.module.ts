import { RouterModule } from '@angular/router';
import { PdfComponent } from './traitement-malade/pdf/pdf.component';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { TraitementMaladeComponent } from './traitement-malade/traitement-malade.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeContentComponent,
    TraitementMaladeComponent,
    PdfComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
