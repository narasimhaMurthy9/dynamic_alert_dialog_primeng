import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'primeng/api';
import { DynamicPopupComponent } from './dynamic-dilog/dynamic-popup/dynamic-popup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    AppComponent,
    DynamicPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
