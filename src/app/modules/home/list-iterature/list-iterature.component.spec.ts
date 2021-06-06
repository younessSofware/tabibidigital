import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIteratureComponent } from './list-iterature.component';

describe('ListIteratureComponent', () => {
  let component: ListIteratureComponent;
  let fixture: ComponentFixture<ListIteratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIteratureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
