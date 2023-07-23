import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Document } from 'src/app/interfaces/Document';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent {
  @Input() document: Document = {
    id: 0,
    titre: '',
  };

  @Output() onDeleteDocumentEvent = new EventEmitter<number>();

  onDeleteDocument(id: number) {
    this.onDeleteDocumentEvent.emit(id);
  }
}
