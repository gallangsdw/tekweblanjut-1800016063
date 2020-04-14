import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; //toolbar
import {MatButtonModule} from '@angular/material/button'; //button
import {MatCardModule} from '@angular/material/card'; //card
import {MatListModule} from '@angular/material/list'; // list
import {MatIconModule} from '@angular/material/icon'; //icon
import {MatMenuModule} from '@angular/material/menu'; //menu
import {MatDialogModule} from '@angular/material/dialog'; //dialog
import {MatFormFieldModule} from '@angular/material/form-field'; //formfield
import {MatInputModule} from '@angular/material/input'; //input
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component'; //otomatis tambah
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component'; //otamatis tambah
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component'; //otamatis tambah
import { HttpClientModule } from '@angular/common/http'; //koneksi http
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TambahAlamatComponent,
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent
  ],
  entryComponents:[
    TambahAlamatComponent,
    DetailAlamatComponent,
    DialogKonfirmasiComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, //toolbar
    MatButtonModule, //button
    MatCardModule, //card
    MatListModule, //list
    MatIconModule, //icon
    MatMenuModule, //menu
    MatDialogModule, //dialog
    MatFormFieldModule, //formfield
    MatInputModule, //input
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
