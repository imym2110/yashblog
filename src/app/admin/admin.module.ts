import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddblogComponent } from './addblog/addblog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AddblogComponent,
    AddcategoryComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
   // BrowserAnimationsModule
  ]
})
export class AdminModule { }
