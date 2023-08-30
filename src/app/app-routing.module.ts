import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoreComponent } from './components/core/core.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LugarComponent } from './lugar/lugar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'lugares', component: CoreComponent},
  {path: 'lugar', component: LugarComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
