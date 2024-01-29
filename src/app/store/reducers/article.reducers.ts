
import {Article} from "../../models/article/article.model";
import { createReducer, on } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';

export interface ArticleState {
  article: Article | null;
  loading: boolean;
  error: any;
}

export const initialState: ArticleState = {
  article: null,
  loading: false,
  error: null,
};


export const articleReducer = createReducer(
  initialState,
  on(ArticleActions.loadBArticlesSuccess, (state, { articles }) => ({ ...state, articles })),
  on(ArticleActions.addArticleSuccess, (state, { article }) => ({ ...state, article })),
  on(ArticleActions.updateArticleSuccess, (state, { article }) => ({ ...state, article })),
  on(ArticleActions.deleteArticleSuccess, (state, { id }) => ({ ...state, id })),

  on(ArticleActions.loadArticleSuccess, (state, { article }) => ({ ...state, article, loading: false })),
  on(ArticleActions.loadArticleFailure, (state, { error }) => ({ ...state, article: null, error }))
);


