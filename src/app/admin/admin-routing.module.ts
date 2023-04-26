import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddblogComponent } from './addblog/addblog.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

const routes: Routes = [  
  { path: 'addblog', component: AddblogComponent},
  { path: 'addcategory', component: AddcategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
