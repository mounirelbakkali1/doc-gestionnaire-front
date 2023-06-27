import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { ListDocumentsComponent } from './components/list-documents/list-documents.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateDocumentComponent,
    EditDocumentComponent,
    ListDocumentsComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
