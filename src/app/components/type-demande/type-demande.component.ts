import { TypeDemande } from 'src/app/interfaces/Document';
import { DemandeService } from './../../services/demande/demande.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-type-demande',
  templateUrl: './type-demande.component.html',
  styleUrls: ['./type-demande.component.css'],
})
export class TypeDemandeComponent {
  private subscription: Subscription = new Subscription();
  constructor(private demandeService: DemandeService) {}
  isCreateShown: boolean = false;
  typeDemandes: TypeDemande[] = [];
  keyword: string = '';

  onAddTypeDemande(title: any) {
    this.demandeService
      .addTypeDemande({ typedemande: title })
      .subscribe((d) => {
        this.fetchTypeDemandes();
        this.isCreateShown = false;
      });
  }
  onDeleteTypeDemande(id: number) {
    this.subscription.add(
      this.demandeService.deleteTypeDemande(id).subscribe(
        (res) => {
          this.fetchTypeDemandes();
        },
        (error) => {
          console.error(error);
        }
      )
    );
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    this.getTypeDemandes();
  }
  onCreateClick() {
    this.isCreateShown = true;
  }

  getTypeDemandes() {
    return this.typeDemandes.filter((td) =>
      td.typedemande.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }
  ngOnInit(): void {
    this.fetchTypeDemandes();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); // Unsubscribe to prevent memory leaks
  }
  fetchTypeDemandes() {
    this.demandeService.getTypeDemandes().subscribe((td) => {
      this.typeDemandes = td;
    });
  }
}
