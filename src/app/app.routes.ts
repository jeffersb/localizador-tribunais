import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TribunalDetalheComponent } from './pages/tribunal-detalhe/tribunal-detalhe.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tribunal-detalhe', component: TribunalDetalheComponent },
];
