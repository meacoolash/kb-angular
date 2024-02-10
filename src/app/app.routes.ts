import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';

const canActivateContact = () => true;

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, canActivate: [canActivateContact] },
    { path: 'detail/:id', component: DetailComponent },
];
