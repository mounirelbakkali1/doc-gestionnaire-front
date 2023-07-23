import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css'],
})
export class SearchDocumentComponent {
  @Input() keyword: string = '';
  @Output() keywordChange = new EventEmitter<string>();

  onInputChange(value: string) {
    console.log(value);
    this.keywordChange.emit(value);
  }
}
