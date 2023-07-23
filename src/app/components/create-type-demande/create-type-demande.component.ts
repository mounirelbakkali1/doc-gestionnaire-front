import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-type-demande',
  templateUrl: './create-type-demande.component.html',
  styleUrls: ['./create-type-demande.component.css'],
})
export class CreateTypeDemandeComponent {
  @Output() onAddTypeDemande = new EventEmitter<string>();

  title = '';

  onAddTypeDemandeClick() {
    if (this.title.trim() === '') return;
    this.onAddTypeDemande.emit(this.title);
  }
}
