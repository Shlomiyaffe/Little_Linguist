import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-new-category-button',
  standalone: true,
  imports: [MatButtonModule,RouterModule],
  templateUrl: './new-category-button.component.html',
  styleUrl: './new-category-button.component.css'
})
export class NewCategoryButtonComponent {

}
