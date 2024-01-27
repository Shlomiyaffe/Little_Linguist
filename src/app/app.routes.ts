import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NewCategoryComponent } from './new-category/new-category.component';


export const routes: Routes = [
    {path: '', component: TableComponent},
    {path: 'newCategory', component: NewCategoryComponent},
    {path: 'category/:id', component: NewCategoryComponent},

];
