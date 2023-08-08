export interface Document {
  id: number;
  titre: string;
}
export interface TypeDocument {
  id: number;
  typedocument: string;
}

export interface TypeDemande {
  id: number;
  typedemande: string;
  documentsRequired: TypeDocument[];
}

export interface Demande {
  id: number;
  title: string;
  description: string;
  typeDemande: TypeDemande;
  documentsAttache: Document[];
}

export interface Reference {
  idTypeDemande: number;
  idDocumentsRequis: number[];
}
