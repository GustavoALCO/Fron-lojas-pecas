import { Routes } from '@angular/router';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Contato', component: ContatosComponent},
    {path: 'busca', component: EstoqueComponent},
    {path: 'produto', component: ProdutoComponent},
    {path: 'shop', component: ShopComponent},
];
