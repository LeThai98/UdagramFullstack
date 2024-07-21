import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes.module';
import {LoginComponent} from './components/login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatButton, 
    MatTooltip,
    MatSliderModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    // ApiService,
    // StatusBar,
    // SplashScreen,
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
