import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande, Reference, TypeDemande } from 'src/app/interfaces/Document';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  getDemandes() {
    return this.http.get<Demande[]>('/api/v1/referencement/demandes');
  }
  addReference(reference: Reference) {
    return this.http.post('/api/v1/referencement/references', reference);
  }
  addDemande(demande: Demande) {
    return this.http.post('/api/v1/referencement/demandes', demande);
  }
  addTypeDemande(td: { typedemande: TypeDemande }) {
    return this.http.post('/api/v1/parametrages/typeDemandes', td);
  }
  deleteTypeDemande(id: number) {
    return this.http.delete('/api/v1/parametrages/typeDemandes/' + id);
  }
  getTypeDemandes() {
    return this.http.get<TypeDemande[]>('/api/v1/parametrages/typeDemandes');
  }

  constructor(private http: HttpClient) {}
}
