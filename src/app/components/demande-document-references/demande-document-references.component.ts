import { DemandeService } from 'src/app/services/demande/demande.service';
import { Component, OnInit } from '@angular/core';
import {
  Reference,
  TypeDemande,
  TypeDocument,
} from 'src/app/interfaces/Document';
import { DocumentServiceService } from 'src/app/services/document/document-service.service';

@Component({
  selector: 'app-demande-document-references',
  templateUrl: './demande-document-references.component.html',
  styleUrls: ['./demande-document-references.component.css'],
})
export class DemandeDocumentReferencesComponent implements OnInit {
  typeDocuments: TypeDocument[] = [];
  typeDemandes: TypeDemande[] = [];
  reference: Reference = {
    idTypeDemande: 0,
    idDocumentsRequis: [],
  };
  created: boolean = false;
  isErrorWhileCreating: boolean = false;
  constructor(
    private demandeService: DemandeService,
    private docService: DocumentServiceService
  ) {}
  ngOnInit(): void {
    this.docService.getTypeDocuments().subscribe((td) => {
      this.typeDocuments = td;
    });
    this.demandeService.getTypeDemandes().subscribe((td) => {
      this.typeDemandes = td;
    });
  }

  onSaveReference() {
    if (this.reference.idTypeDemande == 0) return;
    if (this.reference.idDocumentsRequis.length == 0) return;
    this.demandeService.addReference(this.reference).subscribe(
      (d) => {
        this.created = true;
        this.isErrorWhileCreating = false;
      },
      (err) => {
        this.created = false;
        this.isErrorWhileCreating = true;
      }
    );
  }
}
