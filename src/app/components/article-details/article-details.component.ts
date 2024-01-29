import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ArticleActions from "../../store/actions/article.actions";
import { ArticleResponse } from "../../models/article/article-response.model";
import { AppStore } from "../../store/reducers";
import { selectArticles } from "../../store/selectors/article.selectors";
import { ActivatedRoute } from '@angular/router';  // Importez ActivatedRoute

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article$: Observable<ArticleResponse[]>; // Mettez le type approprié ici
  article: ArticleResponse[] = [];

  constructor(private store: Store<AppStore>, private route: ActivatedRoute) {  // Ajoutez ActivatedRoute dans les dépendances
    this.article$ = this.store.pipe(select(selectArticles))
  }

  ngOnInit(): void {
    console.log("nezha");
    const articleId = this.route.snapshot.paramMap.get('id');

    // Déclencher la demande
    this.store.dispatch(ArticleActions.loadArticle({ articleId }));

    // Observer les changements dans l'observable
    this.article$.subscribe(article => {
      // Mettre à jour les articles lorsque la réponse arrive
      this.article = article;
      console.log(this.article);
    });
  }
}
