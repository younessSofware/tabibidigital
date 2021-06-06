import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { TextResumePipe } from './text-resume.pipe';



@NgModule({
  declarations: [
    DateFormatPipe,
    TextResumePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DateFormatPipe,
    TextResumePipe
  ]
})
export class PipesModule { }
