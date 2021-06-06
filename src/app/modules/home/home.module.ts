import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule } from '@angular/material/icon';
import { ListSingingComponent } from './list-singing/list-singing.component';
import { ListActingComponent } from './list-acting/list-acting.component';
import { ListIteratureComponent } from './list-iterature/list-iterature.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    ListSingingComponent,
    ListActingComponent,
    ListIteratureComponent
  ],
  imports: [
    CommonModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
    MatIconModule,
    
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class HomeModule { }
