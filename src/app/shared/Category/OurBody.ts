import { Category } from "./Category";
import { Languages } from "./languages";

export class OurBody implements Category{
    name:string = "OurBody";
    id: number = 3;
    last_edit_date: Date;
    target_language:Languages.Hebrew;
    source_language:Languages.English;
    arrayWords: Map<string, string>= new Map<string, string>([
        ["ראש", "head"],
        ["עיניים", "eyes"],
        ["יד", "hand"]
    ]);

        constructor(last_edit_date:Date,target_language:Languages.Hebrew,source_language:Languages.English){
            this.last_edit_date=last_edit_date;
            this.target_language=target_language;
            this.source_language=source_language;
        }
    }