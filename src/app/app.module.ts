import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopularComponent } from './popular/popular.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    NewRecipeComponent,
    NotFoundComponent,
    PopularComponent,
    RecipeComponent,
    RecipesComponent,
    SearchRecipeComponent,
    UpdateRecipeComponent,
    RegisterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
