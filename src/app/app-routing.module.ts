import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent} from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {PageNotFoundComponent} from './page-not-found.component'


const appRoutes : Routes = [
    {path:'', redirectTo :'/recipes', pathMatch :'full'},
    {path:'recipes', component: RecipesComponent , 
    children:[
        {path:'', component:RecipeStartComponent,},
        {path: 'new', component:RecipeEditComponent},
        {path:':id', component: RecipesDetailComponent},
        {path: ':id/edit' , component: RecipeEditComponent},
    ]},
    {path:'shopping-list', component: ShoppingListComponent},
    { path: '**',component: PageNotFoundComponent },
]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
})

export class AppRoutingModule {
}
