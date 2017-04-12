/**
 * Created by bradw on 4/8/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page.component';
import { VotingPageComponent } from './voting-page.component';


const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'voting', component: VotingPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
