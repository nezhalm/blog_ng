import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./components/articles/articles.component";
import {NewArticleComponent} from "./components/new-article/new-article.component";
import {ArticleComponent} from "./components/article/article.component";
import {LoginComponent} from "./components/login/login.component";
import {ArticleDetailsComponent} from "./components/article-details/article-details.component";

const routes: Routes = [
  // { path: "", redirectTo: "/articles", pathMatch: "full" },
   { path: "", component: ArticlesComponent },
  // { path: "articles/new", component: NewArticleComponent },
   { path: "article-details/:id", component: ArticleDetailsComponent},
  { path: 'articles', component: ArticleComponent },

  { path: "login", component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
