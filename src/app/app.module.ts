import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { MaterialModule } from './material.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostListComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
