import { Languages } from "./languages";
import { TranslatedWord } from "./TranslatedWord"

export class Category {
    constructor(
        public id: number,
        public name: string,
        public last_edit_date: Date,
        public target_language: Languages,
        public source_language: Languages,
        public arrayWords: TranslatedWord[]
    ) {}
}
