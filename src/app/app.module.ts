import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryStockListComponent } from './libraryStock-list/libraryStock-list.component';
import { LibraryStockComponent } from './libraryStock-list/libraryStock/libraryStock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibraryStockFormComponent } from './libraryStock-form/libraryStock-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryStockListComponent,
    LibraryStockComponent,
    LibraryStockFormComponent,
    UserFormComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
