import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FertilizerService } from '../../../services/fertilizer.service';
import { Fertilizer, FertilizerType, FERTILIZER_TYPE_LABELS, FERTILIZER_TYPE_COLORS } from '../../../models/fertilizer.model';

@Component({
  selector: 'app-fertilizer-list',
  standalone: false,
  templateUrl: './fertilizer-list.html',
  styleUrl: './fertilizer-list.css'
})
export class FertilizerListComponent implements OnInit {
  allFertilizers: Fertilizer[] = [];
  filteredFertilizers: Fertilizer[] = [];
  searchQuery = '';
  selectedType: FertilizerType | 'all' = 'all';

  readonly typeLabels = FERTILIZER_TYPE_LABELS;
  readonly typeColors = FERTILIZER_TYPE_COLORS;

  readonly types: Array<{ value: FertilizerType | 'all'; label: string }> = [
    { value: 'all', label: 'الكل' },
    { value: 'nitrogen', label: 'نيتروجينية' },
    { value: 'phosphorus', label: 'فوسفاتية' },
    { value: 'potassium', label: 'بوتاسية' },
    { value: 'organic', label: 'عضوية' },
    { value: 'compound', label: 'مركبة' },
    { value: 'micronutrient', label: 'عناصر صغرى' },
  ];

  constructor(
    private fertilizerService: FertilizerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allFertilizers = this.fertilizerService.getFertilizers();
    this.route.queryParams.subscribe(params => {
      if (params['type']) {
        this.selectedType = params['type'] as FertilizerType;
      }
      this.applyFilters();
    });
  }

  onSearch() {
    this.applyFilters();
  }

  onTypeChange(type: FertilizerType | 'all') {
    this.selectedType = type;
    this.applyFilters();
  }

  private applyFilters() {
    let results = [...this.allFertilizers];
    if (this.selectedType !== 'all') {
      results = results.filter(f => f.type === this.selectedType);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.trim();
      results = results.filter(f =>
        f.nameAr.includes(q) ||
        f.nameEn.toLowerCase().includes(q.toLowerCase()) ||
        f.descriptionAr.includes(q) ||
        f.crops.some(c => c.includes(q))
      );
    }
    this.filteredFertilizers = results;
  }

  getTypeLabel(type: FertilizerType): string {
    return this.typeLabels[type];
  }

  getTypeColor(type: FertilizerType): string {
    return this.typeColors[type];
  }

  getNpkDisplay(f: Fertilizer): string {
    return `N:${f.npk.n} - P:${f.npk.p} - K:${f.npk.k}`;
  }
}
