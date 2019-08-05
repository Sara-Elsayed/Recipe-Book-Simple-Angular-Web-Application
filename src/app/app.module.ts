import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { UpperHeaderComponent } from './header/upper-header/upper-header.component';
import { MiddleHeaderComponent } from './header/middle-header/middle-header.component';
import { LowerHeaderComponent } from './header/lower-header/lower-header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    UpperHeaderComponent,
    MiddleHeaderComponent,
    LowerHeaderComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
