import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-type-document',
  templateUrl: './create-type-document.component.html',
  styleUrls: ['./create-type-document.component.css'],
})
export class CreateTypeDocumentComponent {
  @Output() onAddDocument = new EventEmitter<string>();

  title = '';

  onAddTypeDocumentClick() {
    if (this.title.trim() === '') return;
    this.onAddDocument.emit(this.title);
  }
}
