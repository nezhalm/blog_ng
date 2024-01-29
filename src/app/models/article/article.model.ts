import { Media } from "../media.model";
import {Author} from "../user/author.model";

export interface Article {

    id?: string;
    title: string;
    text: string;
    tags: string[];
    user: Author;
    medias: Media[];
    postingTime: Date ;

}
