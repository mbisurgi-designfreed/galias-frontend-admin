import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LocationComponent } from './location/location.component';
import { UserService } from './user/user.service';
import { FiltrosVendedoresComponent } from './location/filtros-vendedores/filtros-vendedores.component';
import { MapComponent } from './location/map/map.component';
import { MenubarModule, MenuModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    LocationComponent,
    FiltrosVendedoresComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MenuModule,
    MenubarModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCGFEKoKeoJoa4FaXg0EMfectEhz1sbY8'
    })
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
