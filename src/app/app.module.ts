import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AngularFireModule} from 'angularfire2';
import { AuthService } from './providers/auth.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
// import { environment } from '../environments/environment';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyCy9HuK8-DkBdZWiJrwPSCscOoWJmBqLQ8',
  authDomain: 'logindemo-23f28.firebaseapp.com',
  databaseURL: 'https://logindemo-23f28.firebaseio.com',
  projectId: 'logindemo-23f28',
  storageBucket: 'logindemo-23f28.appspot.com',
  messagingSenderId: '70784148192'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
