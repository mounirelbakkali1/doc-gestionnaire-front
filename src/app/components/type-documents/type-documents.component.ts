import { TypeDemande } from './../../interfaces/Document';
import { Component, OnInit } from '@angular/core';
import { TypeDocument } from 'src/app/interfaces/Document';
import { DocumentServiceService } from 'src/app/services/document/document-service.service';

@Component({
  selector: 'app-type-documents',
  templateUrl: './type-documents.component.html',
  styleUrls: ['./type-documents.component.css'],
})
export class TypeDocumentsComponent implements OnInit {
  isCreateShown: boolean = false;
  keyword: string = '';
  typeDocs: TypeDocument[] = [];
  constructor(private documentService: DocumentServiceService) {}
  ngOnInit(): void {
    this.fetchTypeDocs();
  }

  onAddTypeDocument(title: any) {
    this.documentService
      .addTypeDocument({
        typedocument: title,
      } as TypeDocument)
      .subscribe((d) => {
        this.fetchTypeDocs();
      });

    this.isCreateShown = false;
  }
  onDeleteTypeDocument(id: number) {
    this.documentService.deleteTypeDocument(id).subscribe(
      (doc) => {
        this.fetchTypeDocs();
        console.log(doc);
      },
      (err) => {
        console.log(err);
      }
    );
    this.fetchTypeDocs();
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    this.getTypeDocuments();
  }
  onCreateClick() {
    this.isCreateShown = true;
  }

  getTypeDocuments() {
    return this.typeDocs.filter((tp) =>
      tp.typedocument.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }
  fetchTypeDocs() {
    this.documentService.getTypeDocuments().subscribe((docs) => {
      this.typeDocs = docs;
    });
  }
}
