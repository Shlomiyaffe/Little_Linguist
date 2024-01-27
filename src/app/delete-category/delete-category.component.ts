import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component , Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle,
  MatDialogContent, MatDialogActions, MatDialogClose
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  standalone: true,
  imports: [
    CommonModule, MatDialogContent, MatDialogActions, MatDialogClose
  ],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryComponent { 
  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string,) {}
}
