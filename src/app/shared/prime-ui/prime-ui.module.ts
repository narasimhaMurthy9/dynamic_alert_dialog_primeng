import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[InputTextModule,DynamicDialogModule]
})
export class PrimeUiModule { }
