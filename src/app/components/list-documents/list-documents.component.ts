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
    this.documents = this.documents.filter((document) =>
      document.titre.toLowerCase().includes(newValue.toLowerCase())
    );
  }
  onAddDocument(title: string) {
    console.log('parent : ' + title);

    this.documents.push({
      id: this.documents.length + 1,
      titre: title,
    });
    this.isCreateShown = false;
  }
  onDeleteDocument(id: number) {
    this.documents.splice(
      this.documents.findIndex((document) => document.id === id),
      1
    );
  }
  constructor(private documentService: DocumentServiceService) {}
  ngOnInit(): void {
    this.documentService.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }
  onCreateClick() {
    this.isCreateShown = true;
  }
}
