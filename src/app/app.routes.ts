import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: '**', 
        component: NotFoundComponent
    }
];
