import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlickModule } from 'ngx-slick';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/service/login.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { ComplexService } from './complex/complex.service';
import { DashboardCardContentComponent } from './dashboard/dashboard-card-content/dashboard-card-content.component';
import { LeadsComponent } from './leads/leads/leads.component';
import { PipelineComponent } from './pipeline/pipeline/pipeline.component';
import { ProductsComponent } from './products/products/products.component';
import { TeamsComponent } from './teams/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    DashboardCardContentComponent,
    LeadsComponent,
    PipelineComponent,
    ProductsComponent,
    TeamsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickModule.forRoot(),
    NgbModule
  ],
  providers: [LoginService, ComplexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
