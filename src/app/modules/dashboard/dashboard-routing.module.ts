import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard.component';
import { TraitementMaladeComponent } from './traitement-malade/traitement-malade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
  },
  {
    path : 'traitementMalade',
    component : TraitementMaladeComponent,
  },
  {
    path : 'messages',
    component : MessagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
