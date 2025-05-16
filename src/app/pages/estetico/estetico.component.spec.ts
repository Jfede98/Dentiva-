import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsteticoComponent } from './estetico.component';

describe('EsteticoComponent', () => {
  let component: EsteticoComponent;
  let fixture: ComponentFixture<EsteticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsteticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsteticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
