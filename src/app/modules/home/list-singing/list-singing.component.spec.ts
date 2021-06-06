import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingingComponent } from './list-singing.component';

describe('ListSingingComponent', () => {
  let component: ListSingingComponent;
  let fixture: ComponentFixture<ListSingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
