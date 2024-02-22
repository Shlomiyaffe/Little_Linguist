import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../shared/Category/Category';
import { TranslatedWord } from '../shared/Category/TranslatedWord';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-play',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, MatIconModule , MatButtonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent implements OnInit {

  id?: string | null;
  currentCategory: Category | undefined;
  arrayWords: TranslatedWord[] = [];
  inputValues: string[] = []
  comparisonResults: boolean[] = [];
  showSummary = false
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
      this.currentCategory = existingCategory;
      this.arrayWords = existingCategory!.arrayWords;
    }
  }
  checkWords() {

    this.comparisonResults = this.inputValues.map((value, index) => value === this.arrayWords[index].target);
    this.showSummary = true;
  }

  getCorrectCount(): number {
    return this.comparisonResults.filter(result => result).length;
  }

  showTranslate(){
    this.inputValues = this.arrayWords.map(word => word.target.toString());
  }

}
