import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') namekey!: ElementRef
  @ViewChild('email') emailkey!: ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.namekey.nativeElement.value);
    localStorage.setItem("email",this.emailkey.nativeElement.value);
  }

}
