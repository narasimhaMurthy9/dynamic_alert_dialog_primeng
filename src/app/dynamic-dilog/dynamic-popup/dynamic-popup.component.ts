import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.scss']
})
export class DynamicPopupComponent {
  dialogForm:FormGroup
constructor(private fb:FormBuilder){
this.dialogForm=this.fb.group({
  name:[''],
  fullName:['']
})

}

submit(){
  console.log(this.dialogForm.value);
  
}
}
