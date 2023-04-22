import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LaptopsListComponent} from "./laptops-list/laptops-list.component";

import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {environment} from '../../environments/environment';

@NgModule({
  declarations: [
    LaptopsListComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [LaptopsListComponent]
})
export class LaptopsModule {
}
