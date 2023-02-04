import { Component, Inject, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})


export class FormDataComponent implements OnInit {
  optionName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  pollData:any
  pollSelectedOption=false
  pollSelectedOptionValue:string=""
  pollSelectedAnswerValue:string=""
  optionValue:any
  emailFieldShow=false
  registerForm:any= FormGroup;
  submitted = false;


   constructor(private router:Router,private formBuilder: FormBuilder){
      console.warn(this.router.getCurrentNavigation()?.extras.state)
    this.pollData=this.router.getCurrentNavigation()?.extras.state
   }
  ngOnInit():void{
    console.log(this.pollData)
    this.registerForm = this.formBuilder.group({    
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
 });
//  a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
  }
 
  selectedOption(option:string,AnswerValue:string,i:any){ 
  
    console.log("value of i",i)
    if(!this.emailFieldShow){
      if(!this.pollSelectedOption){ 
        this.pollSelectedOptionValue=option                      
        this.pollSelectedAnswerValue=AnswerValue
        // this.emailFieldShow=true
        
        console.log("option =>",this.pollSelectedOptionValue)
        console.log("Answer =>",this.pollSelectedAnswerValue)
      }
      
      this.pollData.pollData.quantities.map((val:any,index:any)=>{
        if(index==i){
          val['isActive']=true
        }else{
          val['isActive']=false
        }
      })
    }
    
  }
  get f() { return this.registerForm.controls; }

  emailSubmit(){
    // this.emailFieldShow=true
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.emailFieldShow=true
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
  }

 

// convenience getter for easy access to form fields


//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
// }
// }


