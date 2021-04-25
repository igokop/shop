import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  searchResult: FormGroup;
  openedBar = false;
  basketOpened = false;
  accountOpened = false;
  constructor() { }

  ngOnInit(): void {
    this.searchResult = new FormGroup({
      'search': new FormControl
    })
  }

  onSubmit(){
    console.log(this.searchResult.value)
    this.searchResult.patchValue({
      'search' : ''
    })
  }

  openBar(){
    this.openedBar = !this.openedBar;
  }

  openBasket(){
    this.basketOpened = !this.basketOpened;
  }

  openAccount(){
    this.accountOpened = !this.accountOpened;
  }
}
