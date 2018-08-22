import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PipelineComponent } from './pipeline/pipeline/pipeline.component';
import { ProductsComponent } from './products/products/products.component';
import { TeamsComponent } from './teams/teams/teams.component';
import { LeadsComponent } from './leads/leads/leads.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'leads', component: LeadsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }