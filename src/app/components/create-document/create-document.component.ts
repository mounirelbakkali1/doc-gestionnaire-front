import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css'],
})
export class CreateDocumentComponent {
  @Output() onAddDocument = new EventEmitter<string>();

  title = '';

  onAddDocumentClick() {
    if (this.title.trim() === '') return;
    this.onAddDocument.emit(this.title);
  }
}
