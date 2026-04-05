import { Component, OnInit } from '@angular/core';
import { FertilizerService } from '../../services/fertilizer.service';
import { Fertilizer } from '../../models/fertilizer.model';
import { PdfDocument } from '../../models/pdf-document.model';

interface SourceEntry {
  id: string;
  title: string;
  author: string;
  organization: string;
  year: number;
  type: 'book' | 'research' | 'report' | 'guide';
  relatedFertilizers?: string[];
  pdfId?: number;
}

@Component({
  selector: 'app-sources',
  standalone: false,
  templateUrl: './sources.html',
  styleUrl: './sources.css'
})
export class SourcesComponent implements OnInit {
  fertilizers: Fertilizer[] = [];
  pdfs: PdfDocument[] = [];

  sources: SourceEntry[] = [
    {
      id: 'S1',
      title: 'دليل الأسمدة الزراعية - توصيات التسميد للمحاصيل الحقلية والبستانية',
      author: 'فريق البحوث الزراعية',
      organization: 'وزارة الزراعة واستصلاح الأراضي - مصر',
      year: 2022,
      type: 'guide',
      relatedFertilizers: ['يوريا', 'نترات الأمونيوم', 'كبريتات الأمونيوم'],
      pdfId: 1,
    },
    {
      id: 'S2',
      title: 'الأسمدة الفوسفاتية في الزراعة الحديثة - دراسة تحليلية',
      author: 'د. سامي عبد الرحمن',
      organization: 'معهد بحوث الأراضي والمياه والبيئة',
      year: 2020,
      type: 'research',
      relatedFertilizers: ['سوبر فوسفات ثلاثي'],
      pdfId: 2,
    },
    {
      id: 'S3',
      title: 'دور البوتاسيوم في حياة النبات وتحسين جودة المحاصيل',
      author: 'د. هاني صلاح - د. مريم يوسف',
      organization: 'المركز الوطني للبحوث',
      year: 2022,
      type: 'research',
      relatedFertilizers: ['كلوريد البوتاسيوم'],
      pdfId: 3,
    },
    {
      id: 'S4',
      title: 'التسميد العضوي والزراعة المستدامة - منظور بيئي',
      author: 'د. نهى عبد المنعم - د. عصام الدين محمد',
      organization: 'مركز البحوث الزراعية - مصر',
      year: 2023,
      type: 'book',
      relatedFertilizers: ['السماد العضوي (الكمبوست)'],
      pdfId: 4,
    },
    {
      id: 'S5',
      title: 'الأسمدة المركبة والعناصر الصغرى في التغذية النباتية',
      author: 'م. خالد محمود - د. رانيا فتحي',
      organization: 'كلية الزراعة - جامعة عين شمس',
      year: 2021,
      type: 'book',
      relatedFertilizers: ['سماد NPK 15-15-15', 'كلات الحديد'],
      pdfId: 5,
    },
    {
      id: 'S6',
      title: 'Fertilizer Use and Management in Egypt: Current Status and Future Prospects',
      author: 'FAO Egypt Country Office',
      organization: 'Food and Agriculture Organization (FAO) - United Nations',
      year: 2021,
      type: 'report',
      pdfId: 8,
    },
    {
      id: 'S7',
      title: 'تحليل التربة وبناء برامج التسميد المتكاملة',
      author: 'د. محمد السيد عثمان',
      organization: 'معهد بحوث الأراضي والمياه - وزارة الزراعة',
      year: 2023,
      type: 'guide',
      pdfId: 6,
    },
    {
      id: 'S8',
      title: 'دليل تسميد محاصيل الخضروات في مصر والوطن العربي',
      author: 'فريق البحوث الزراعية',
      organization: 'وزارة الزراعة واستصلاح الأراضي - مصر',
      year: 2022,
      type: 'guide',
      pdfId: 7,
    },
  ];

  typeLabels: Record<string, string> = {
    book: 'كتاب',
    research: 'بحث علمي',
    report: 'تقرير',
    guide: 'دليل',
  };

  typeColors: Record<string, string> = {
    book: 'bg-blue-100 text-blue-800',
    research: 'bg-purple-100 text-purple-800',
    report: 'bg-orange-100 text-orange-800',
    guide: 'bg-green-100 text-green-800',
  };

  constructor(private fertilizerService: FertilizerService) {}

  ngOnInit() {
    this.fertilizers = this.fertilizerService.getFertilizers();
    this.pdfs = this.fertilizerService.getPdfDocuments();
  }
}
