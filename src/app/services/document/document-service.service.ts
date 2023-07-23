import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from 'src/app/interfaces/Document';
import { customHeaders } from 'src/app/api/customHeaders';

@Injectable({
  providedIn: 'root',
})
export class DocumentServiceService {
  documents: Document[] = [];
  constructor(private http: HttpClient) {}

  getDocuments() {
    return this.http.get<Document[]>('/api/v1/documents', customHeaders);
  }

  ngOnInit() {
    this.getDocuments().subscribe((docs) => {
      this.documents = docs;
    });
  }
}
