import {Author} from "../user/author.model";
import {CommentResponse} from "../comment/comment-response.model";
import {Media} from "../media.model";

export interface ArticleResponse {

    id: string;
    title: string;
    text: string;
    createdAt: Date;
    tags: string[];
    user: Author;
    comments: CommentResponse[];
    medias: Media[];
    postingTime: Date ;


}
