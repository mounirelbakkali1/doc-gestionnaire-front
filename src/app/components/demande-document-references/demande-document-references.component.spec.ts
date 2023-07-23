import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDocumentReferencesComponent } from './demande-document-references.component';

describe('DemandeDocumentReferencesComponent', () => {
  let component: DemandeDocumentReferencesComponent;
  let fixture: ComponentFixture<DemandeDocumentReferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeDocumentReferencesComponent]
    });
    fixture = TestBed.createComponent(DemandeDocumentReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
