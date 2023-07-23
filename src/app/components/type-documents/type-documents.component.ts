import { Component } from '@angular/core';

@Component({
  selector: 'app-type-documents',
  templateUrl: './type-documents.component.html',
  styleUrls: ['./type-documents.component.css'],
})
export class TypeDocumentsComponent {
  isCreateShown: boolean = false;

  onAddTypeDocument(title: any) {
    console.log(title);
    this.isCreateShown = false;
  }
  onDeleteTypeDocument(id: number) {
    console.log(id);
  }

  onKeywordChange(keyword: string) {
    console.log(keyword);
  }
  onCreateClick() {
    this.isCreateShown = true;
  }

  getTypeDocuments() {
    return [
      { id: 1, titre: 'Type Document 1' },
      { id: 2, titre: 'Type Document 2' },
      { id: 3, titre: 'Type Document 3' },
      { id: 4, titre: 'Type Document 4' },
    ];
  }
}
