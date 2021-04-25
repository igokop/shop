import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBasketComponent } from './alert-basket.component';

describe('AlertBasketComponent', () => {
  let component: AlertBasketComponent;
  let fixture: ComponentFixture<AlertBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
