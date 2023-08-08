import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DocumentComponent } from './components/document/document.component';
import { SearchDocumentComponent } from './components/search-document/search-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReferencementComponent } from './components/referencement/referencement.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { TypeDocumentsComponent } from './components/type-documents/type-documents.component';
import { CreateTypeDocumentComponent } from './components/create-type-document/create-type-document.component';
import { TypeDemandeComponent } from './components/type-demande/type-demande.component';
import { CreateTypeDemandeComponent } from './components/create-type-demande/create-type-demande.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateDemandeComponent } from './components/create-demande/create-demande.component';
import { DemandeDocumentReferencesComponent } from './components/demande-document-references/demande-document-references.component';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter(): string | null {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateDocumentComponent,
    EditDocumentComponent,
    ListDocumentsComponent,
    SignUpComponent,
    NavBarComponent,
    HomePageComponent,
    DocumentComponent,
    SearchDocumentComponent,
    ReferencementComponent,
    ParametresComponent,
    TypeDocumentsComponent,
    CreateTypeDocumentComponent,
    TypeDemandeComponent,
    CreateTypeDemandeComponent,
    LogoutComponent,
    CreateDemandeComponent,
    DemandeDocumentReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
