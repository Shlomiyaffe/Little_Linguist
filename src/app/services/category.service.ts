import { Injectable } from '@angular/core';
import { Category } from '../shared/Category/Category';
import { Languages } from '../shared/Category/languages';
// import { Fruit } from '../shared/Category/Fruit';
// import { Animals } from '../shared/Category/Animals';
// import { OurBody } from '../shared/Category/OurBody';

@Injectable({
  providedIn: 'root'
})

// const categories1 = [
//   new Fruit(new Date(), Languages.Hebrew, Languages.English),
//   new Animals(new Date(), Languages.Hebrew, Languages.English),
//   new OurBody(new Date(), Languages.Hebrew, Languages.English)
// ]

export class CategoryService {
  categories = new Map<number, Category>();
  // categories = categories1;
  nextId = 1;
  constructor() {  }

  list() : Category[]{
    return Array.from(this.categories.values());
  }

  get(id : number) : Category | undefined{
    return this.categories.get(id);
  }

  add(newCategory : Category): void {
    let newId = this.nextId;
    newCategory.id = newId
    this.categories.set(newId, newCategory);
    ++this.nextId;
  }

  Update(existingCategory : Category): void {
    if(this.categories.has(existingCategory.id)){
      this.categories.set(existingCategory.id, existingCategory)
    }
  }

  delete(existingCategoryId : number): void {
    if(this.categories.has(existingCategoryId)){
      this.categories.delete(existingCategoryId)
    }
  }

}
