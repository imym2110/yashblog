import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AuthGuard } from './auth.guard';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { DemocardComponent } from './democard/democard.component';
import { EditblogComponent } from './editblog/editblog.component';
;
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'categories', component:AllCategoriesComponent},
  { path: 'blogs', component:HomeComponent},
  { path:'bloglist/:catid', component:BlogListComponent,},
  { path:'blogdetail/:blogid', component:BlogdetailsComponent},
  { path:'register', component:RegisterComponent},
  { path:'edit/:blogid', component:EditblogComponent},
  { path:'admin', component:AdministrationComponent, canActivate: [AuthGuard]},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(
      module => module.AdminModule
    ), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
