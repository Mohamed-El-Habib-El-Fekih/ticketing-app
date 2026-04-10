import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { DocPage } from './pages/doc-page/doc-page';
import { Notif } from './pages/notif/notif';
import { PageTickets } from './pages/page-tickets/page-tickets';
import { Settings } from './pages/settings/settings';
import { SignUp } from './pages/sign-up/sign-up';
import { PageChef } from './pages/page-chef/page-chef';
import { Conversation } from './pages/conversation/conversation';

export const routes: Routes = [
    { path: '', component: LoginPage },
    { path: 'docs', component: DocPage },
    { path: 'notification', component: Notif },
    { path: 'tickets', component: PageTickets },
    { path: 'settings', component: Settings },
    { path: 'signup', component: SignUp },
    { path: 'chef', component: PageChef },
    { path: 'conversation', component: Conversation },
    { path: '**', redirectTo: '' }
];
