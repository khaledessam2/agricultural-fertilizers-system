import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { FertilizerListComponent } from './components/fertilizers/fertilizer-list/fertilizer-list';
import { FertilizerDetailComponent } from './components/fertilizers/fertilizer-detail/fertilizer-detail';
import { PdfLibraryComponent } from './components/pdf-library/pdf-library';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer';
import { SourcesComponent } from './components/sources/sources';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fertilizers', component: FertilizerListComponent },
  { path: 'fertilizers/:id', component: FertilizerDetailComponent },
  { path: 'pdf-library', component: PdfLibraryComponent },
  { path: 'pdf-viewer/:id', component: PdfViewerComponent },
  { path: 'sources', component: SourcesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
