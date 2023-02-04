import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
// [ ]{ }

import {FormGroup,FormBuilder,FormArray} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { FormDataComponent } from '../form-data/form-data.component';
import { project } from '../data-type';
import { projects } from '../data-type';
import { Router } from '@angular/router';
import { left, offset } from '@popperjs/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { translate } from '@angular/localize/src/utils';
@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})



export class PollComponent implements OnInit {
 
  faAngleDown =faAngleDown;
  showColorInput=false
  websiteList:any={
    'left':0,
    'top':0,
    'width':0,
    };
   playoutList: any={
    'playoutLeft':0,
    'playoutTop':0,
    'playoutWidth':100,
   };
   
  isEdit =false;
  isEditPlayout=false;
  isFormReady = false;
  productForm: FormGroup;
  pollOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  dataList: any;
  p: any[]=[];
  maxWidth:number=0
  maxHeight:number=0
  // bgColor="black";
  //bgColor:string="black";
  // color2: string = "#1976D2";

  showTheme=false
  fileToUpload: any;  
  url:any
  customColor: string = "#000000";
  bgColorValue:string="1";
  height:number=0
  isFullscreenOptionShow: boolean = false;
  selectedColor = '#ffffff';
  // @ViewChild('myDiv', { static: true }) myDiv: ElementRef
 
selectedFontFamily: string = 'Arial';
selectedFontWeight: string = 'normal';
selectedFontSize: string = '16px';

fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Courier','monospace','serif','sans serif','cursive','fantasy'];
fontWeights = ['normal', 'bold', 'bolder', 'lighter','400','500','600','700','800','900'];
fontSizes = ['12px', '14px', '16px', '18px', '20px','22px'];

  constructor(private fb:FormBuilder,private route:Router){
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([ ])
    }); 
  }
 
  @ViewChild('fullScreenDiv')  fullScreenDivEle! : ElementRef


  ngOnInit():void{
   this.addQuantity();
   this.addQuantity();

   
  }
   
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      option: ''
     
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }
  openPoll() {
    
    if(!this.isDisableAdd() && this.productForm.value.name!=''){
       this.isFormReady=true
       
      //  this.matDialog.open(FormDataComponent,{data: this.productForm.value })
       
       this.route.navigate(['form-data'],{ state: { pollData: this.productForm.value } }) ;
      
    } 
    }
  
  isDisableAdd(){
    let disable = false
   this.productForm.value.quantities.map((q:any)=>{
    if(q.option==""){
      disable =true
    }
    
   })
   return disable
  }
  editWebsite(){ 
    console.warn("data")
    this.isEdit=true
   }

   editPlayout(){ 
    console.warn("data")
    this.isEditPlayout=true
    this.dataList = this.productForm.value
    console.log(this.dataList)
    
    console.log("bgColorValue->",this.bgColorValue)
    if(this.bgColorValue=='2'){

      //set Timeout to show the image
      setTimeout(()=>{
        let rectangleImage:any = document.getElementById("pollScreen");   
      console.log("rectangleImage",rectangleImage)
      rectangleImage.style.background='none'      
       rectangleImage.style.background='url('+this.url+')'
      },10)  
    }
    // this.onDragEnded(event)
setTimeout(()=>{
  let playoutScreen:any = document.getElementById("playoutScreen");
  let playoutHeight = playoutScreen.offsetHeight
  let pollTop = (this.playoutList.playoutTop*playoutHeight)/100

  let pollScreen:any = document.getElementById("pollScreen");
  
  let playoutWidth = playoutScreen.offsetWidth
  let pollLeft = (this.playoutList.playoutLeft*playoutWidth)/100
  pollScreen.style.transform='translate('+pollLeft+'px ,' +pollTop+'px)'
},10)
   
   }
   savePlayout(){
    this.isEditPlayout= false
   
    // let rectangleImage:any = document.getElementById("pollScreen");
    // rectangleImage.style.background='url('+this.url+')'
    // console.log("image url",this.url)
   }
 


  website(data:project){ 
   
  this.isEdit=false
   this.websiteList=data
  // console.warn(data)
  // console.warn(this.websiteList)
  }
 

  onlyNumbersAllowed(event:KeyboardEvent):boolean{ 
    const charCode = (event.which)?event.which: event.keyCode;

    if(charCode >31 && (charCode <48 || charCode > 57))
    { 
      console.log('charcode is restricted' + charCode);
      return false;
    }
    return true
  }

  playout(data:projects){ 
    this.isEditPlayout=false
    console.log(data)
     this.playoutList=data
    // console.warn(data)
    // console.warn(this.playoutList)
    }
   
//drag drop


  onDragEnded(event:any) {
    
    // let p = event.source.getRootElement().getBoundingClientRect();
    //  console.log(p);

     //finding value with id
     let pollScreen:any = document.getElementById("pollScreen");
     let playoutScreen:any = document.getElementById("playoutScreen");
     let questionScreen:any = document.getElementById("question");
     let optionAScreen:any = document.getElementById("option-A");
     let optionBScreen:any = document.getElementById("option-B");

     if(pollScreen && playoutScreen){
      console.log("Inside If")

      let poll = new WebKitCSSMatrix(window.getComputedStyle(pollScreen).transform)
      let questions = new WebKitCSSMatrix(window.getComputedStyle(questionScreen).transform)
      let option1 = new WebKitCSSMatrix(window.getComputedStyle(optionAScreen).transform)
      let option2 = new WebKitCSSMatrix(window.getComputedStyle(optionBScreen).transform)
      let playout = new WebKitCSSMatrix(window.getComputedStyle(playoutScreen).transform)
      
      let pollLeft = poll.m41
      let pollTop = poll.m42
      let pollWidth = pollScreen.offsetWidth
      let pollHeight = pollScreen.offsetHeight

      let playoutLeft = playoutScreen.offsetLeft;
      let playoutHeight = playoutScreen.offsetHeight
      let playoutWidth = playoutScreen.offsetWidth 

      let questionLeft = questions.m41
      let questionTop = questions.m42
      
      let optionALeft = option1.m41
      let optionsATop = option1.m42

      let optionBLeft = option2.m41
      let optionsBTop = option2.m42

      
      // this.maxHeight = playoutHeight-pollTop
      // this.height= pollScreen.offsetWidth +pollScreen.offsetHeight
      
      let standaloneplayoutLeft = (pollLeft/playoutWidth)*100 
      let standaloneplayoutTop = (pollTop/playoutHeight)*100 
      let standaloneplayoutWidth = (pollWidth/playoutWidth)*100 
      
      this.maxWidth = 100-standaloneplayoutLeft
      //for questions area
      let standaloneQuestionLeft = (questionLeft/playoutWidth)*100 
      let standaloneQuestionTop = (questionTop/playoutHeight)*100 

      
       //for option A area
       let standaloneoptionALeft = (optionALeft/playoutWidth)*100 
       let standaloneoptionATop = (optionsATop/playoutHeight)*100 

       //for option B area
       let standaloneoptionBLeft = (optionBLeft/playoutWidth)*100 
       let standaloneoptionBTop = (optionsBTop/playoutHeight)*100 

     

      this.playoutList.playoutLeft = Math.trunc(standaloneplayoutLeft);
      this.playoutList.playoutTop = Math.trunc(standaloneplayoutTop);     
      this.playoutList.playoutWidth = Math.trunc(standaloneplayoutWidth);
       
      console.log("playoutLeft", this.playoutList.playoutLeft )
      console.log("playoutTop", this.playoutList.playoutTop )
      console.log("playoutWidth", this.playoutList.playoutWidth )
     }       
      
   }
  
  
   changeBackground(){
    this.showTheme=true
   }
   closeTheme(){
    this.showTheme=false
   }
   onselectFile(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        let rectangleImage:any = document.getElementById("pollScreen");
        rectangleImage.style.background='url('+this.url+')'
     
      }
    }
   }
   bgColorValueChanged(event:any) { 
    // console.log (event.value,this.bgColorValue)    
    this.bgColorValue = event.value; 
    this.showColorInput=false 
    // if(this.bgColorValue=='1'){
    //   this.showTheme=false
    // }
    this.url=''
  }
  changeColor(event:any){
    let rectangleImage:any = document.getElementById("pollScreen");
    rectangleImage.style.background='none'
    this.bgColorValue = event.target.value;  
    rectangleImage.style.backgroundColor=this.bgColorValue
    this.bgColorValue='1'
    this.showColorInput=false
    
  }
  // setColorInput(){
  //   document.getElementById("customcolor")?.click()
   
  // }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.fullScreenDivEle.nativeElement.requestFullscreen();
      this.isFullscreenOptionShow = !this.isFullscreenOptionShow;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        this.isFullscreenOptionShow = !this.isFullscreenOptionShow;
    }
  }
}
 