import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeDemandeComponent } from './create-type-demande.component';

describe('CreateTypeDemandeComponent', () => {
  let component: CreateTypeDemandeComponent;
  let fixture: ComponentFixture<CreateTypeDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTypeDemandeComponent]
    });
    fixture = TestBed.createComponent(CreateTypeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
