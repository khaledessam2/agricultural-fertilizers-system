import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FertilizerService } from '../../services/fertilizer.service';
import { PdfDocument, PdfCategory, PDF_CATEGORY_LABELS } from '../../models/pdf-document.model';

@Component({
  selector: 'app-pdf-library',
  standalone: false,
  templateUrl: './pdf-library.html',
  styleUrl: './pdf-library.css'
})
export class PdfLibraryComponent implements OnInit {
  allPdfs: PdfDocument[] = [];
  filteredPdfs: PdfDocument[] = [];
  searchQuery = '';
  selectedCategory: PdfCategory | 'all' = 'all';

  readonly categoryLabels = PDF_CATEGORY_LABELS;

  readonly categories: Array<{ value: PdfCategory | 'all'; label: string; icon: string }> = [
    { value: 'all', label: 'الكل', icon: '📋' },
    { value: 'fertilizers', label: 'الأسمدة', icon: '🌿' },
    { value: 'soil', label: 'التربة', icon: '🟫' },
    { value: 'crops', label: 'المحاصيل', icon: '🌾' },
    { value: 'irrigation', label: 'الري', icon: '💧' },
    { value: 'pesticides', label: 'المبيدات', icon: '🧪' },
    { value: 'research', label: 'الأبحاث', icon: '🔬' },
  ];

  constructor(
    private fertilizerService: FertilizerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allPdfs = this.fertilizerService.getPdfDocuments();
    this.filteredPdfs = [...this.allPdfs];
  }

  onSearch() {
    this.applyFilters();
  }

  onCategoryChange(cat: PdfCategory | 'all') {
    this.selectedCategory = cat;
    this.applyFilters();
  }

  private applyFilters() {
    let results = [...this.allPdfs];
    if (this.selectedCategory !== 'all') {
      results = results.filter(p => p.category === this.selectedCategory);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.trim();
      results = results.filter(p =>
        p.titleAr.includes(q) ||
        p.titleEn.toLowerCase().includes(q.toLowerCase()) ||
        p.descriptionAr.includes(q) ||
        p.author.includes(q) ||
        p.tags.some(t => t.includes(q) || t.toLowerCase().includes(q.toLowerCase()))
      );
    }
    this.filteredPdfs = results;
  }

  viewPdf(pdf: PdfDocument, event?: Event) {
    event?.stopPropagation();
    this.router.navigate(['/pdf-viewer', pdf.id]);
  }

  getTotalDownloads(): number {
    return this.allPdfs.reduce((sum, p) => sum + p.downloads, 0);
  }

  getLangLabel(lang: string): string {
    return lang === 'ar' ? 'عربي' : lang === 'en' ? 'English' : 'عربي / English';
  }
}
