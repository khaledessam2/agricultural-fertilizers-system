import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { FertilizerListComponent } from './components/fertilizers/fertilizer-list/fertilizer-list';
import { FertilizerDetailComponent } from './components/fertilizers/fertilizer-detail/fertilizer-detail';
import { PdfLibraryComponent } from './components/pdf-library/pdf-library';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer';
import { SourcesComponent } from './components/sources/sources';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    HomeComponent,
    FertilizerListComponent,
    FertilizerDetailComponent,
    PdfLibraryComponent,
    PdfViewerComponent,
    SourcesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
