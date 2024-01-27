import { Component, OnInit, Inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Category } from '../shared/Category/Category';
import { CategoryService } from '../services/category.service';
import { NewCategoryButtonComponent } from "../new-category-button/new-category-button.component";
import {
  MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle,
  MatDialog,
  MatDialogContent, MatDialogActions, MatDialogClose
} from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, NewCategoryButtonComponent, RouterModule, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Category_Name', 'No_of_words', 'Last_edit_date', 'Actions'];
  allCategories: Category[] = [];
  constructor(private categoryService: CategoryService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.allCategories = this.categoryService.list();
    console.log(this.allCategories)
  }

  getNumbersOfWords(category: Category): string {
    return String(category.arrayWords.length);
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id);
    this.allCategories = this.categoryService.list();
  }

  deleteCategoryClick(id: number, name: string) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, { data: name, });
    dialogRef.afterClosed().subscribe((deletionConfirmed: any) => {
      if (deletionConfirmed) {
        this.deleteCategory(id)
      }
    });
  }

  }
