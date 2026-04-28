import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  imports: [],
  templateUrl: './slide-show.html',
  styleUrl: './slide-show.css',
})

export class SlideShow {
images:string[]=["Slider/3.gif","Slider/3.gif","Slider/3.gif","Slider/4.gif","Slider/5.gif","Slider/6.gif"];
index:number=0;
dots:number[]=[0,1,2,3]
dot(i:number){
  
  this.index=i;
 
}
next(){
  this.index++;
  if(this.index>this.images.length-1){
    this.index=0;
  }
 
}
prev(){
  if(this.index>0){
    this.index--;
  }
  else{
    this.index=this.images.length-1;
  }
}
isPlaying: boolean = false;
  intervalId: any;

  startSlide() {
    this.isPlaying = true;
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
    }, 2000); 
  }

  stopSlide() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
  }

  toggleSlide() {
    if (this.isPlaying) {
      this.stopSlide();
    } else {
      this.startSlide();
    }}


}