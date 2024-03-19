import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { MeetingsComponent } from './meetings/meetings.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home',     component: HomeComponent},
    {path: 'clients',  component: ClientsComponent},
    {path: 'meetings', component: MeetingsComponent},
];
