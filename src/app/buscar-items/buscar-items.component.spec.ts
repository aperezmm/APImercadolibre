import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarItemsComponent } from './buscar-items.component';

describe('BuscarItemsComponent', () => {
  let component: BuscarItemsComponent;
  let fixture: ComponentFixture<BuscarItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
