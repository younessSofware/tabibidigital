import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementMaladeComponent } from './traitement-malade.component';

describe('TraitementMaladeComponent', () => {
  let component: TraitementMaladeComponent;
  let fixture: ComponentFixture<TraitementMaladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementMaladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementMaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
