import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-basket',
  templateUrl: './alert-basket.component.html',
  styleUrls: ['./alert-basket.component.css']
})
export class AlertBasketComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
    constructor() {}
  
    ngOnInit(): void {
    }
    closeIt(){
      this.close.emit();
    }
  }




