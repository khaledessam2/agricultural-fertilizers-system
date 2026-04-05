import { Component, OnInit } from '@angular/core';
import { FertilizerService } from '../../services/fertilizer.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  stats = { totalFertilizers: 0, totalPdfs: 0, totalDownloads: 0, categories: 0 };

  features = [
    { icon: '🌿', title: 'قاعدة بيانات الأسمدة', desc: 'معلومات شاملة عن جميع أنواع الأسمدة الكيماوية والعضوية', link: '/fertilizers' },
    { icon: '📚', title: 'مكتبة PDF', desc: 'مجموعة من الكتب والأبحاث العلمية في PDF قابلة للتنزيل', link: '/pdf-library' },
    { icon: '🔍', title: 'بحث متقدم', desc: 'ابحث عن أي سماد أو مادة زراعية بسهولة وسرعة', link: '/fertilizers' },
    { icon: '📖', title: 'المصادر العلمية', desc: 'جميع المراجع والمصادر موثقة من مؤسسات علمية معتمدة', link: '/sources' },
  ];

  constructor(private fertilizerService: FertilizerService) {}

  ngOnInit() {
    this.stats = this.fertilizerService.getStats();
  }
}
