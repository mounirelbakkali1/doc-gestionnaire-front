import { TypeDemande } from './../../interfaces/Document';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-type-document',
  templateUrl: './create-type-document.component.html',
  styleUrls: ['./create-type-document.component.css'],
})
export class CreateTypeDocumentComponent {
  @Output() onAddTypeDocument = new EventEmitter<string>();

  Typedocument = '';

  onAddTypeDocumentClick() {
    if (this.Typedocument.trim() === '') return;
    this.onAddTypeDocument.emit(this.Typedocument);
  }
}
