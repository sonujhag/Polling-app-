import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { PollComponent } from '../poll/poll.component';
@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
  
})


export class DialogFormComponent {

  constructor(private matDialog:MatDialog){}
  // openDialog(){
  //   this.matDialog.open(PollComponent,{
  //     height: '800vh',
  //     width: '600px',
  //     panelClass:"custom",     
  //   })
  // }
}
