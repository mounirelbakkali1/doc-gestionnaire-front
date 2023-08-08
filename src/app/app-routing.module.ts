import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchDocumentComponent } from './components/search-document/search-document.component';
import { ReferencementComponent } from './components/referencement/referencement.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { TypeDocumentsComponent } from './components/type-documents/type-documents.component';
import { TypeDemandeComponent } from './components/type-demande/type-demande.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateDemandeComponent } from './components/create-demande/create-demande.component';
import { DemandeDocumentReferencesComponent } from './components/demande-document-references/demande-document-references.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { RoleGuardService } from './services/role-gard/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'references',
    component: ReferencementComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ROLE_REFERENT',
    },
    children: [
      {
        path: '',
        redirectTo: 'create-demande',
        pathMatch: 'full',
      },
      {
        path: 'create-demande',
        component: CreateDemandeComponent,
      },
      {
        path: 'demande-document-references',
        component: DemandeDocumentReferencesComponent,
      },
    ],
  },
  {
    path: 'parametres',
    component: ParametresComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ROLE_ADMIN',
    },
    children: [
      {
        path: '',
        redirectTo: 'documents',
        pathMatch: 'full',
      },
      {
        path: 'documents',
        component: ListDocumentsComponent,
      },
      {
        path: 'type-documents',
        component: TypeDocumentsComponent,
      },
      {
        path: 'type-demandes',
        component: TypeDemandeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
