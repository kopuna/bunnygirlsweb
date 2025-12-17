import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Profiles } from './profiles/profiles';
import { Profile } from './profiles/profile/profile';
import { Gallerys } from './gallerys/gallerys';
import { Gallery } from './gallerys/gallery/gallery';

export const routes: Routes = [
    {
        path: '',
        component: Welcome
    },
    {
        path: 'welcome',
        component: Welcome
    },
    {
        path: 'profiles',
        component: Profiles
    },
    {
        path: 'profile/:name',
        component: Profile,
    },
    {
        path: 'gallerys',
        component: Gallerys
    },
    {
        path: 'gallery/:name',
        component: Gallery,
    },
];
