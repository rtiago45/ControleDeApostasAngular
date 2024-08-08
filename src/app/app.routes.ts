import { ShowMyBetsComponent } from './components/show-my-bets/show-my-bets/show-my-bets.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'showBets', component: ShowMyBetsComponent} ,

];
