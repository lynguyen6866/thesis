import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ChartsModule} from 'ng2-charts';

import { environment } from 'src/environments/environment';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';


import { from } from 'rxjs';
import { MainComponent } from './main/main.component';
import { StudyListComponent } from './study/study-list/study-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    StudyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
