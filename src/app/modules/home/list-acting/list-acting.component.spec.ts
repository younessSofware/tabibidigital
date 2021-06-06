import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActingComponent } from './list-acting.component';

describe('ListActingComponent', () => {
  let component: ListActingComponent;
  let fixture: ComponentFixture<ListActingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
