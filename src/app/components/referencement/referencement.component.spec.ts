import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencementComponent } from './referencement.component';

describe('ReferencementComponent', () => {
  let component: ReferencementComponent;
  let fixture: ComponentFixture<ReferencementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferencementComponent]
    });
    fixture = TestBed.createComponent(ReferencementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
