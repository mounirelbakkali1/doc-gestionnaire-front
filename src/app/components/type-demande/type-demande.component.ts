import { Component } from '@angular/core';

@Component({
  selector: 'app-type-demande',
  templateUrl: './type-demande.component.html',
  styleUrls: ['./type-demande.component.css'],
})
export class TypeDemandeComponent {
  isCreateShown: boolean = false;

  onAddTypeDemande(title: any) {
    console.log(title);
    this.isCreateShown = false;
  }
  onDeleteTypeDemande(id: number) {
    console.log(id);
  }

  onKeywordChange(keyword: string) {
    console.log(keyword);
  }
  onCreateClick() {
    this.isCreateShown = true;
  }

  getTypeDemandes() {
    return [
      { id: 1, titre: 'Type Demande 1' },
      { id: 2, titre: 'Type Demande 2' },
      { id: 3, titre: 'Type Demande 3' },
      { id: 4, titre: 'Type Demande 4' },
    ];
  }
}
