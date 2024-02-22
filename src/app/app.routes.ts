import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { PlayComponent } from './play/play.component';


export const routes: Routes = [
    {path: '', component: TableComponent},
    {path: 'newCategory', component: NewCategoryComponent},
    {path: 'category/:id', component: NewCategoryComponent},
    {path: 'chooseCategory', component: ChooseCategoryComponent},
    {path: 'play/:id', component: PlayComponent},
];
