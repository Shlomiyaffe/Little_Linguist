import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./table/table.component";
import { NewCategoryButtonComponent } from "./new-category-button/new-category-button.component";
import { FooterComponent } from './footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, TableComponent, NewCategoryButtonComponent,FooterComponent]
})
export class AppComponent {
  title = 'Little_Linguist';
}
