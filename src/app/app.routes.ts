import { Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';


export const routes: Routes = [

    { 
        path: '', 
        component: ProdutoListComponent,
        title: 'Lista de Produtos'
    },

    { 
        path: 'add', 
        component: ProdutoFormComponent,
        title:'Adicionar'
    }
];
