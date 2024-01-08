import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-new-category-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './new-category-button.component.html',
  styleUrl: './new-category-button.component.css'
})
export class NewCategoryButtonComponent {

}
