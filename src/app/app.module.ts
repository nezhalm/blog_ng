import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { ArticleComponent } from './components/article/article.component';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { articleReducer } from "./store/reducers/article.reducers";
import { ArticleEffects } from "./store/effects/article.effects";
import { HttpClientModule } from "@angular/common/http";
import { commentReducer } from "./store/reducers/comment.reducers";
import { CommentEffects } from "./store/effects/comment.effects";
import { TagsComponent } from './components/article/tags/tags.component';
import { TagComponent } from './components/article/tags/tag/tag.component';
import { CommentsComponent } from "./components/article/comments/comments.component";
import { CommentComponent } from "./components/article/comments/comment/comment.component";
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesComponent,
    NewArticleComponent,
    ArticleComponent,
    CommentsComponent,
    CommentComponent,
    TagsComponent,
    TagComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ArticleDetailsComponent,

  ],
  imports: [
    StoreModule.forRoot({ article: articleReducer }),
    EffectsModule.forRoot([ArticleEffects]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('articles', articleReducer),
    StoreModule.forFeature('comments', commentReducer),
    EffectsModule.forRoot([ArticleEffects, CommentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
