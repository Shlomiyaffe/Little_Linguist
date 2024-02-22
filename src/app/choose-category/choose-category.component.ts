import { Component , OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Category } from '../shared/Category/Category';
import { CategoryService } from '../services/category.service';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-choose-category',
  standalone: true,
  imports: [RouterModule,FormsModule,MatSelectModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './choose-category.component.html',
  styleUrl: './choose-category.component.css'
})
export class ChooseCategoryComponent implements OnInit { 
  allCategories: Category[] = [];
  chosenCategory : number = 0;
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.allCategories = this.categoryService.list();
    console.log(this.allCategories)
  }
 
}

