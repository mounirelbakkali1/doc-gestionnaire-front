import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document, TypeDocument } from 'src/app/interfaces/Document';
import { customHeaders } from 'src/app/api/customHeaders';

@Injectable({
  providedIn: 'root',
})
export class DocumentServiceService {
  addTypeDocument(typeDoc: TypeDocument) {
    return this.http.post('/api/v1/parametrages/typeDocuments', typeDoc);
  }
  deleteTypeDocument(id: number) {
    return this.http.delete('/api/v1/parametrages/typeDocuments/' + id);
  }
  getTypeDocuments() {
    return this.http.get<TypeDocument[]>('/api/v1/parametrages/typeDocuments');
  }
  documents: Document[] = [];
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<Document[]>('/api/v1/parametrages/documents');
  }
  deleteDocument(id: number) {
    return this.http.delete('/api/v1/parametrages/documents/' + id);
  }

  addDocument(document: Document) {
    return this.http.post('/api/v1/parametrages/documents', document);
  }
}
