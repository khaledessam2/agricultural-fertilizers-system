import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FertilizerService } from '../../../services/fertilizer.service';
import { Fertilizer, FERTILIZER_TYPE_LABELS, FERTILIZER_TYPE_COLORS } from '../../../models/fertilizer.model';

@Component({
  selector: 'app-fertilizer-detail',
  standalone: false,
  templateUrl: './fertilizer-detail.html',
  styleUrl: './fertilizer-detail.css'
})
export class FertilizerDetailComponent implements OnInit {
  fertilizer: Fertilizer | null = null;
  notFound = false;

  readonly typeLabels = FERTILIZER_TYPE_LABELS;
  readonly typeColors = FERTILIZER_TYPE_COLORS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fertilizerService: FertilizerService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const f = this.fertilizerService.getFertilizerById(id);
    if (f) {
      this.fertilizer = f;
    } else {
      this.notFound = true;
    }
  }

  goBack() {
    this.router.navigate(['/fertilizers']);
  }

  viewPdf() {
    if (this.fertilizer?.pdfId) {
      this.router.navigate(['/pdf-viewer', this.fertilizer.pdfId]);
    }
  }

  getNpkPercent(val: number): number {
    return Math.min(val, 100);
  }
}
