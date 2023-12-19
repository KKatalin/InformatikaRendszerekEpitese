import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryStockListComponent } from './libraryStock-list/libraryStock-list.component';
import { LibraryStockFormComponent } from './libraryStock-form/libraryStock-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { 
    path: '',
    component: LibraryStockListComponent
  },
  {
    path: 'libraryStock-form',
    component: LibraryStockFormComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path: 'category-form',
    component: CategoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
