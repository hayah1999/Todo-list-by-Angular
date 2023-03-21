import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DoneComponent } from './done/done.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DeletedComponent } from './deleted/deleted.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    NavBarComponent,
    NotFoundComponent,
    DoneComponent,
    FavoriteComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
