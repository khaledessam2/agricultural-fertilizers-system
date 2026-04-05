import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FertilizerService } from '../../services/fertilizer.service';
import { PdfDocument } from '../../models/pdf-document.model';

@Component({
  selector: 'app-pdf-viewer',
  standalone: false,
  templateUrl: './pdf-viewer.html',
  styleUrl: './pdf-viewer.css'
})
export class PdfViewerComponent implements OnInit {
  pdf: PdfDocument | null = null;
  safeUrl: SafeResourceUrl | null = null;
  notFound = false;
  allPdfs: PdfDocument[] = [];
  showIframe = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fertilizerService: FertilizerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.allPdfs = this.fertilizerService.getPdfDocuments();
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const found = this.fertilizerService.getPdfById(id);
      if (found) {
        this.pdf = found;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(found.fileUrl);
        this.notFound = false;
        this.showIframe = false;
      } else {
        this.notFound = true;
        this.pdf = null;
      }
    });
  }

  goBack() {
    this.router.navigate(['/pdf-library']);
  }

  openPdf() {
    if (this.pdf) {
      window.open(this.pdf.fileUrl, '_blank');
    }
  }

  selectPdf(pdf: PdfDocument) {
    this.router.navigate(['/pdf-viewer', pdf.id]);
  }

  getLangLabel(lang: string): string {
    return lang === 'ar' ? 'عربي' : lang === 'en' ? 'English' : 'ثنائي اللغة';
  }

  toggleIframe() {
    this.showIframe = !this.showIframe;
  }
}
