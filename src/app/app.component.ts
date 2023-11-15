import { Component } from '@angular/core';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicPopupComponent } from './dynamic-dilog/dynamic-popup/dynamic-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  title = 'dynamic_alert_popup_primeng';
   

  constructor(public dialogService: DialogService) {}
  ref!: DynamicDialogRef;
  show() {
    this.ref = this.dialogService.open(DynamicPopupComponent, {
      closable: true,
      header: this.title,
      style:{
        width: '50%',
        contentStyle: { overflow: 'auto' },
        maximizable: true,
        height:'50%',
        
      }
      
    });
   

}
}