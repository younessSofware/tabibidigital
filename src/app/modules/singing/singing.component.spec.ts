import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingComponent } from './singing.component';

describe('SingingComponent', () => {
  let component: SingingComponent;
  let fixture: ComponentFixture<SingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
