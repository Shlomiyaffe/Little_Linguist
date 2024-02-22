import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Category } from '../shared/Category/Category';
import { CategoryService } from '../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Languages } from '../shared/Category/languages';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'



@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatIconModule
  ],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NewCategoryComponent implements OnInit {
  @Input()
  id?: string | null;
  currentCategory!: Category;
  categories: any;
  registrationForm: any;
  displayedColumns: string[] = ['origin', 'target', 'Actions'];
  arrayOfWords: any[] = [];
  openForm = false;
  currentWord: any = {
    origin: "",
    target: ""
  };
  constructor(
    private categoriesService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    if (this.id) {
      let numbericId = parseInt(this.id);
      let existingCategory = this.categoriesService.get(numbericId);
      console.log(existingCategory)
      let allCategories = this.categoriesService.list();
      console.log(allCategories)

      if (existingCategory) {
        this.currentCategory = existingCategory;
        this.arrayOfWords = existingCategory.arrayWords;
        console.log(existingCategory.arrayWords)
        console.log(this.arrayOfWords)
      } else {
        this.currentCategory = new Category(0, "", new Date(), Languages.English, Languages.Hebrew, []);
      }
    } else {
      this.currentCategory = new Category(0, "", new Date(), Languages.English, Languages.Hebrew, []);
    }
  }


  submitRegistrationForm() {
    if (this.id) {
      this.categoriesService.Update(this.currentCategory);
    } else {
      this.categoriesService.add(this.currentCategory);
    }

    this.router.navigate(["/"]);
  }

  clickNewWord() {
    this.openForm = true
  } 
  submitWord() {
    console.log(this.currentWord);
    this.arrayOfWords = [...this.arrayOfWords , this.currentWord]
    this.currentCategory.arrayWords = [...this.arrayOfWords];
    this.currentWord = {
      origin: "",
      target: ""
    };
  }
}
