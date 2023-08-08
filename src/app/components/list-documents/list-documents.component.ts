import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from 'src/app/interfaces/Document';
import { DocumentServiceService } from 'src/app/services/document/document-service.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.css'],
})
export class ListDocumentsComponent implements OnInit {
  documents: Document[] = [];
  keyword: string = '';
  isCreateShown: boolean = false;

  getDocuments(): Document[] {
    return this.documents.filter((document) =>
      document.titre.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  onKeywordChange(newValue: string) {
    this.keyword = newValue;
    this.getDocuments;
  }
  onAddDocument(title: string) {
    if (title === '') return;
    this.documentService
      .addDocument({ titre: title } as Document)
      .subscribe((res) => {
        console.log(res);
        this.fetchDocs();
      });
    this.isCreateShown = false;
  }
  onDeleteDocument(id: number) {
    this.documentService.deleteDocument(id).subscribe((doc) => {
      this.fetchDocs();
    });
    this.fetchDocs();
  }
  constructor(private documentService: DocumentServiceService) {}
  ngOnInit(): void {
    this.fetchDocs();
  }
  onCreateClick() {
    this.isCreateShown = true;
  }
  fetchDocs() {
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }
}
