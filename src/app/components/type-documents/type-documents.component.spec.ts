import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDocumentsComponent } from './type-documents.component';

describe('TypeDocumentsComponent', () => {
  let component: TypeDocumentsComponent;
  let fixture: ComponentFixture<TypeDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeDocumentsComponent]
    });
    fixture = TestBed.createComponent(TypeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
