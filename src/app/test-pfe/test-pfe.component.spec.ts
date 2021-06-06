import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPFEComponent } from './test-pfe.component';

describe('TestPFEComponent', () => {
  let component: TestPFEComponent;
  let fixture: ComponentFixture<TestPFEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPFEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
