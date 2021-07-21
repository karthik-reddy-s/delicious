import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
i=0;
  constructor() { }

  ngOnInit(): void {
  }
  getdata(){
    alert("i have clicked the button ")

  }

}
