import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import {MatDialogModule} from "@angular/material/dialog";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollComponent } from './poll/poll.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormDataComponent } from './form-data/form-data.component';
import { RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ColorPickerModule } from "primeng/colorpicker";
import { MatRadioModule } from '@angular/material/radio';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    DialogFormComponent,
    FormDataComponent, 
   
    ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatDialogModule,
    DragDropModule,
    NgbModule,
    ColorPickerModule,
    MatRadioModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
