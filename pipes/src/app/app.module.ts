import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PipesExemploComponent } from './pipes-exemplo/pipes-exemplo.component';
import { CamelCasePipe } from './camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipesExemploComponent,
    CamelCasePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
      {  
      provide: LOCALE_ID,
      useValue: 'en-US'
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
