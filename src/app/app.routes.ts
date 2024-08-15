import { ShowMyBetsComponent } from './components/show-my-bets/show-my-bets/show-my-bets.component';
import { PersonInfoComponent } from './components/person-info-component/person-info-component.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'showBets', component: ShowMyBetsComponent} ,
  {path: 'personInfo', component: PersonInfoComponent}

];
