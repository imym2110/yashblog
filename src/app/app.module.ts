import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbDropdownMenu, NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemocardComponent } from './democard/democard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HttperrorInterceptor } from './httperror.interceptor';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { RegisterComponent } from './register/register.component';
import { AdministrationComponent } from './administration/administration.component';
import { StrapiTableComponent } from './strapi-table/strapi-table.component';
import { DecimalPipe, NgFor } from '@angular/common';
import { EditblogComponent } from './editblog/editblog.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SubscribeSectionComponent,
    HomeComponent,
    LoginComponent,
    AllCategoriesComponent,
    BlogCardsComponent,
    DemocardComponent,
    BlogListComponent,
    BlogdetailsComponent,
    LoaderComponent,
    RegisterComponent,
    AdministrationComponent,
    StrapiTableComponent,
    EditblogComponent,
    AdminCategoriesComponent,
    EditcategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ShowHidePasswordModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgbAlertModule,
    BrowserAnimationsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    DecimalPipe,
    NgFor,
    NgbDropdownMenu
    //NgxScrollTopModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttperrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
