import { Languages } from "./languages";

export interface Category{
    name:string;
    id: number;
    last_edit_date: Date;
    target_language:Languages;
    source_language:Languages;
    arrayWords: Map<string, string>;
}