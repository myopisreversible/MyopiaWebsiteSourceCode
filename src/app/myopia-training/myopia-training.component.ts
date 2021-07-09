import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myopia-training',
  templateUrl: './myopia-training.component.html',
  styleUrls: ['./myopia-training.component.css']
})
export class MyopiaTrainingComponent implements OnInit {

  height = 50;
  width = 50;
  white = 'white';
  black = 'black';

  focus = null;
  focus2 = null;
  focus3 = null;
  focus4 = null;
  focus5 = null;

  focusSmall = 0;
  show1 = false;
  rotation = ['rotateZ(0deg)','rotateZ(45deg)','rotateZ(90deg)','rotateZ(135deg)','rotateZ(180deg)','rotateZ(225deg)','rotateZ(270deg)','rotateZ(315deg)','rotateZ(360deg)'];

  intervalStyle = 'rotateZ(0deg)';

  speedReading = ['Hi','friends','thank','you','for','the','time','to','go','here','I','know','you','all','want'
    ,'to','improve','your','speed','reading','skills','I','just','want','you','to','focus','on','reading','this'
    ,'to','improve','your','concentration','in','order','for','you','to','enhance','your','speed','reading','skills'
    ,'most','people','failed','to','read','this','level','one','because','they','were','not','trained','to','focus'
    ,'and','concentrate','while','they','were','reading.','by','doing','this','for','a','coiple','of','weeks','you'
    ,'will','definitely','see','improvement','in','your','speed','reading','skills'];

    speedReadingWord = '';
  public innerWidth: any;

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  firstWord = 'A';
  secondWord = 'Z';
  level = 'LEVEL 1';

  interVal1: any;
  interVal2: any;
  interVal3: any;

  firstSlide = true;
  secondSlide = false;
  thirdSlide = false;
  fourthSlide = false;

  eyetest1 = false;
  letterHead = '';
  color1 = '';

  constructor() {

    setTimeout(() => {
    this.show1 = true;
  
    setTimeout(() => {
      this.eyetest1 = true;
      this.letterHead = 'W'
    },0)
    setTimeout(() => {
      this.color1 = 'yellow';
    }, 3000)

  }, 0);
}

  ngOnInit(): void {
    
  }


  focusNumber() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth <= 600) {
      setInterval(() => {
        this.focus = Math.floor(Math.random() * 99);
      }, 4000);
    } else {
      setInterval(() => {
        this.focus = Math.floor(Math.random() * 99);
      }, 2000);
    }
  }

}
