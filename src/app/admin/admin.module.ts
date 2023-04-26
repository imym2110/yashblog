import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddblogComponent } from './addblog/addblog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcategoryComponent } from './addcategory/addcategory.component';


@NgModule({
  declarations: [
    AddblogComponent,
    AddcategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
