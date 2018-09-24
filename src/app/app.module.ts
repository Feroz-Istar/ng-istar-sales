import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlickModule } from 'ngx-slick';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { ComplexService } from './complex/complex.service';
import { DashboardCardContentComponent } from './dashboard/dashboard-card-content/dashboard-card-content.component';
import { LeadsComponent } from './leads/leads/leads.component';
import { PipelineComponent } from './pipeline/pipeline/pipeline.component';;
import { TeamsComponent } from './teams/teams/teams.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { LoginComponent } from './login/login/login.component';
import { ProductCardExpandedComponent } from './products/product-card-expanded/product-card-expanded.component';
import { ProductServiceService } from './products/service/product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    DashboardCardContentComponent,
    LeadsComponent,
    PipelineComponent,
    TeamsComponent,
    ProductsComponent,
    ProductCardComponent,
    LoginComponent,
    ProductCardExpandedComponent,
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
  providers: [ComplexService, ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
