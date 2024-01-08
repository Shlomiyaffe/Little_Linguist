import { Component , OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { Fruit } from '../shared/Category/Fruit';
import { Languages } from '../shared/Category/languages';
import { Animals } from '../shared/Category/Animals';
import { OurBody } from '../shared/Category/OurBody';
import { Category } from '../shared/Category/Category';

const categories = [
  new Fruit(new Date(), Languages.Hebrew, Languages.English),
  new Animals(new Date(), Languages.Hebrew, Languages.English),
  new OurBody(new Date(), Languages.Hebrew, Languages.English)
]

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule , MatIconModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Category_Name', 'No_of_words', 'Last_edit_date', 'actions'];
  dataSource = categories;

  ngOnInit(){
    console.log(categories)
  }

  getNumbersOfWords (category : Category) : string {
    return String(category.arrayWords.size);
    }
}
