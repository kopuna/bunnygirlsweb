import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Profiles } from './profiles/profiles';
import { Profile } from './profiles/profile/profile';

export const routes: Routes = [
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
        runGuardsAndResolvers: 'always',
    },
];
