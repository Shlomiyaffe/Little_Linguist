import { Injectable , OnInit} from '@angular/core';
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

export class CategoryService  {
  categories = new Map<number, Category>();
  // categories = categories1;
  private readonly NEXT_ID_KEY = 'nextId';
  private readonly CATEGORIES_KEY = 'categories';
  nextId = 1;
  // categories= this.getCategories()


  constructor() { }

  private getNextId(): number {
    let nextIdString = localStorage.getItem(this.NEXT_ID_KEY);
    return nextIdString ? parseInt(nextIdString) : 0;
  }
  private setNextId(id: number): void {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }


  private setCategories(allCategories: Map<number, Category>): void {
    localStorage.setItem(this.CATEGORIES_KEY,
      JSON.stringify(Array.from(allCategories.values())));
  }

  private getCategories(): Map<number, Category> {
    let CategoryString = localStorage.getItem(this.CATEGORIES_KEY);
    let idToCategory = new Map<number, Category>();

    if (CategoryString) {
      JSON.parse(CategoryString).forEach((Category: Category) => {
        idToCategory.set(Category.id, Category);
      });
    }
    return idToCategory;
  }

  list(): Category[] {
    return Array.from(this.getCategories().values());
  }

  get(id: number): Category | undefined {
    this.categories= this.getCategories()
    if (!this.categories.has(id)) {
      throw new Error(
      "Failed to retrieve person by id: " +
      id);
      }
    return this.getCategories().get(id);
  }

  add(newCategory: Category): void {
    let newId = this.getNextId();
    let categoriesMap = this.getCategories();
    newCategory.id = newId
    categoriesMap.set(newId, newCategory);
    this.setCategories(categoriesMap)
    this.setNextId(++newId);
  }

  Update(existingCategory: Category): void {
    this.categories= this.getCategories();
    if (!this.categories.has(existingCategory.id)) {
      throw new Error(
      "Failed to update person by id: " +
      existingCategory.id);
      }
    let categoriesMap = this.getCategories();
    categoriesMap.set(existingCategory.id, existingCategory);
    this.setCategories(categoriesMap)
    // if (this.categories.has(existingCategory.id)) {
    //   this.categories.set(existingCategory.id, existingCategory)
    // }
  }

  delete(existingCategoryId: number): void {
    this.categories= this.getCategories()
    if (!this.categories.delete(existingCategoryId)) {
      throw new Error(
      "Failed to delete person by id: " +
      existingCategoryId);
      }
    let categoriesMap = this.getCategories();
    categoriesMap.delete(existingCategoryId);
    this.setCategories(categoriesMap)

    // if (this.categories.has(existingCategoryId)) {
    //   this.categories.delete(existingCategoryId)
    // }
  }
}
