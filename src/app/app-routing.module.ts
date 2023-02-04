import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  {path:'form-data' ,component:FormDataComponent },
  {path:"**" ,component:PollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
