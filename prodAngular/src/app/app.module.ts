import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbInputModule, NbButtonModule, NbCardModule, NbIconModule, NbFormFieldModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ConnectionComponent } from './components/connection/connection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TieInterceptor } from './services/tie.interceptor';
import { NavComponent } from './components/nav/nav.component';
import { BadRequestPagesComponent } from './components/bad-request-pages/bad-request-pages.component';
import { Request404Component } from './components/bad-request-pages/request404/request404.component';
import { DatesPipe } from './pipes/dates.pipe';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    NavComponent,
    BadRequestPagesComponent,
    Request404Component,
    DatesPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ReactiveFormsModule,
    NbSidebarModule.forRoot(),
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule,
    NbListModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : TieInterceptor, multi : true}
  ],                                                          // multi =  nombre d'instance sur l'intercepteur
  bootstrap: [AppComponent]
})
export class AppModule { }
