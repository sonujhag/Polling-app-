import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollComponent } from './poll.component';

describe('PollComponent', () => {
  let component: PollComponent;
  let fixture: ComponentFixture<PollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});







<!-- <div class="form">
<div class="f-heading">
  Create Poll
</div>

<div class="f-nav">
  Playout poll link
</div>
<div class="f-nav2">
  WebSite poll link
</div>

<div class="f-nav3">
 Share poll link
</div>

<div class="f-h">
 Playout Configuration
 </div>

 <h1 class="left">Left</h1>
 <div class="l-b">
  1000px
 </div>

 <h1 class="top">Top</h1>
 <div class="t-b">
  1000px
 </div>

 <h1 class="width">Width</h1>
 <div class="w-b">
  1000px
 </div>

 <button class="btn">Save</button>

 <div class="website">
  Website Configuration 
 </div>

 <h1 class="left1">Left</h1>
 <div class="left-b">
  1000px
 </div>
 <h1 class="top1">Top</h1>
 <div class="top1-b">
  1000px
 </div>

 <h1 class="width1">Width</h1>
 <div class="width-b">
  1000px
 </div>

 <button class="edit">Edit</button>

 <form [formGroup]="productForm">
  <div class="question">
    <h1 class="q">question</h1>
    <textarea class="text" type="text" id="name" name="name" formControlName="name"></textarea>
  </div>
  
  <div formArrayName="quantities">
    <h1 class="option">option</h1>
    <div class="option-d" *ngFor="let quantity of quantities().controls; let i=index" [formGroupName]="i">
      <div class="opt">
        <input type="text" formControlName="option" >
        <button *ngIf="i > 1 " type="button" class="btn close" (click)="removeQuantity(i)"
          data-dismiss="alert" aria-label="Close" style="margin-bottom:10px ;">
           
          <span aria-hidden="true">×</span>
      </button>   
      <span class="small text-danger" *ngIf="this.productForm.value.quantities[i].option=='' ">value cannot be blank   </span> 

      </div>
    </div>
  </div>

  
 </form>

</div>

<button type="button" (click)="addQuantity()"  [disabled]="isDisableAdd()"   class="btn btn-primary btn-lg btn-block">Add option</button>

<button type="button"  (click)="openPoll()"   class="btn btn-secondary btn-lg btn-block">start poll</button> --> -->




// <label for="formGroupExampleInput2" style="color: white;">Option {{pollOptions[i]}}</label>
