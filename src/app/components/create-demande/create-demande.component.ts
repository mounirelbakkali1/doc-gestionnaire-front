import { Component, OnInit } from '@angular/core';
import { Demande, Document, TypeDemande } from 'src/app/interfaces/Document';
import { DemandeService } from 'src/app/services/demande/demande.service';
import { DocumentServiceService } from 'src/app/services/document/document-service.service';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css'],
})
export class CreateDemandeComponent implements OnInit {
  isCreateClicked: boolean = false;
  view: boolean = false;
  documentsAttached: Document[] = [];

  demandes: Demande[] = [];
  constructor(
    private demandeService: DemandeService,
    private docService: DocumentServiceService
  ) {}
  typeDemandeSelected: boolean = false;
  public demande: Demande = {
    id: 0,
    title: '',
    description: '',
    typeDemande: {
      typedemande: '',
    } as TypeDemande,
    documentsAttache: [],
  };
  selectedFiles: File[] = [];

  typeDemandes: TypeDemande[] = [];
  documents: Document[] = [];
  createNewDemande() {
    this.isCreateClicked = true;
  }

  viewDocumentsAttached(id: number) {
    this.view = true;
    this.demandes
      .find((d) => d.id == id)
      ?.documentsAttache.forEach((d) => {
        this.documentsAttached.push(d);
      });
    console.log(this.documentsAttached);
  }
  onAddDemandeClick() {
    // let formData = new FormData();
    // for (let file of this.selectedFiles) {
    //   formData.append('documents', file);
    // }
    // formData.append('demande', JSON.stringify(this.demande));
    if (this.demande.title.trim() === '') return;
    if (this.demande.description.trim() === '') return;
    if (this.demande.typeDemande.typedemande.trim() === '') return;
    if (this.demande.documentsAttache.length == 0) return;
    this.demandeService.addDemande(this.demande).subscribe(
      (d) => {
        console.log(d);
        this.isCreateClicked = false;
        this.fetchDemandes();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onTypeDemandeChange(event: any) {
    this.typeDemandeSelected = true;
    if (event.target.value == 0) {
      this.typeDemandeSelected = false;
    }
  }

  onFileSelected(event: any): void {
    this.selectedFiles.push(event.target.files);
    console.log(this.selectedFiles);
  }
  ngOnInit(): void {
    this.demandeService.getTypeDemandes().subscribe((td) => {
      this.typeDemandes = td;
    });
    this.docService.getDocuments().subscribe((d) => {
      this.documents = d;
    });
    this.fetchDemandes();
  }

  fetchDemandes() {
    this.demandeService.getDemandes().subscribe((d) => {
      this.demandes = d;
    });
  }
}
