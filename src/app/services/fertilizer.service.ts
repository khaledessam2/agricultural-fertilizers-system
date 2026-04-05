import { Injectable } from '@angular/core';
import { Fertilizer, FertilizerType } from '../models/fertilizer.model';
import { PdfDocument, PdfCategory } from '../models/pdf-document.model';

@Injectable({ providedIn: 'root' })
export class FertilizerService {

  private fertilizers: Fertilizer[] = [
    {
      id: 1,
      nameAr: 'يوريا',
      nameEn: 'Urea',
      chemicalFormula: 'CO(NH₂)₂',
      type: 'nitrogen',
      descriptionAr: 'اليوريا هي أحد أهم الأسمدة النيتروجينية وأكثرها استخداماً في العالم، تحتوي على 46% نيتروجين وهي الأعلى تركيزاً بين الأسمدة الصلبة. تُستخدم على نطاق واسع لتحسين نمو المحاصيل الزراعية.',
      npk: { n: 46, p: 0, k: 0 },
      applicationRate: '100-200 كجم/فدان حسب المحصول',
      crops: ['قمح', 'ذرة', 'قصب السكر', 'أرز', 'خضروات'],
      benefits: [
        'أعلى تركيز نيتروجيني بين الأسمدة الصلبة',
        'سهلة الذوبان والامتصاص',
        'سعر مناسب ومتاحة',
        'يمكن استخدامها رشاً أو تحت السطح',
      ],
      warnings: [
        'تجنب تطبيقها قرب جذور النبات مباشرة',
        'لا تخلط مع الأسمدة الكالسيومية',
        'تحتاج إلى ري بعد التطبيق',
        'الإفراط قد يسبب حرق الجذور',
      ],
      pdfId: 1,
      source: {
        title: 'دليل الأسمدة الزراعية',
        author: 'وزارة الزراعة واستصلاح الأراضي',
        year: 2022,
        publisher: 'مركز بحوث الأراضي والمياه والبيئة',
      },
    },
    {
      id: 2,
      nameAr: 'نترات الأمونيوم',
      nameEn: 'Ammonium Nitrate',
      chemicalFormula: 'NH₄NO₃',
      type: 'nitrogen',
      descriptionAr: 'نترات الأمونيوم سماد نيتروجيني يحتوي على 33.5% نيتروجين بشكلين: نيتروجين أمونيومي ونيتروجين نترات. يمتاز بسرعة الامتصاص من قبل النبات.',
      npk: { n: 33.5, p: 0, k: 0 },
      applicationRate: '150-250 كجم/فدان',
      crops: ['قمح', 'شعير', 'ذرة', 'بنجر السكر', 'البطاطس'],
      benefits: [
        'نيتروجين سريع ومتأخر الإطلاق',
        'فعال في التربة الحمضية والقلوية',
        'يحسن جودة المحصول',
      ],
      warnings: [
        'مادة متفجرة - يتطلب تخزيناً وتداولاً خاصاً',
        'محظور في بعض الدول بكميات كبيرة',
        'تجنب التعرض للحرارة الشديدة',
      ],
      pdfId: 1,
      source: {
        title: 'الأسمدة النيتروجينية وتأثيرها على المحاصيل',
        author: 'د. محمد أحمد سالم',
        year: 2021,
        publisher: 'جامعة القاهرة - كلية الزراعة',
      },
    },
    {
      id: 3,
      nameAr: 'سوبر فوسفات ثلاثي',
      nameEn: 'Triple Superphosphate (TSP)',
      chemicalFormula: 'Ca(H₂PO₄)₂',
      type: 'phosphorus',
      descriptionAr: 'سوبر فوسفات ثلاثي هو أحد أهم الأسمدة الفوسفاتية ذات التركيز العالي، يحتوي على 46% P₂O₅. يعزز نمو الجذور وتطور الجهاز الجذري للنبات.',
      npk: { n: 0, p: 46, k: 0 },
      applicationRate: '50-100 كجم/فدان',
      crops: ['كل المحاصيل', 'قمح', 'ذرة', 'فول', 'خضروات ورقية'],
      benefits: [
        'تركيز فوسفوري عالٍ',
        'يعزز نمو الجذور',
        'يساعد في تكوين البذور والثمار',
        'يحسن مقاومة الأمراض',
      ],
      warnings: [
        'يرتبط بالكالسيوم في التربة القلوية مما يقلل فاعليته',
        'يجب خلطه جيداً مع التربة',
        'لا يُطبق على سطح التربة دون تغطية',
      ],
      pdfId: 2,
      source: {
        title: 'الأسمدة الفوسفاتية في الزراعة الحديثة',
        author: 'د. سامي عبد الرحمن',
        year: 2020,
        publisher: 'معهد بحوث الأراضي والمياه',
      },
    },
    {
      id: 4,
      nameAr: 'كلوريد البوتاسيوم',
      nameEn: 'Potassium Chloride (MOP)',
      chemicalFormula: 'KCl',
      type: 'potassium',
      descriptionAr: 'كلوريد البوتاسيوم أو ما يُعرف بالبوتاس المورياتي هو أكثر أسمدة البوتاسيوم شيوعاً. يحتوي على 60% K₂O ويستخدم لتحسين جودة المحاصيل ومقاومتها للأمراض.',
      npk: { n: 0, p: 0, k: 60 },
      applicationRate: '50-100 كجم/فدان',
      crops: ['بطاطس', 'طماطم', 'قصب السكر', 'موز', 'فاكهة'],
      benefits: [
        'يحسن جودة الثمار والحبوب',
        'يزيد مقاومة الأمراض والآفات',
        'يحسن القدرة على تحمل الجفاف',
        'يعزز الجودة التسويقية للمحصول',
      ],
      warnings: [
        'غير مناسب للتربة الملحية',
        'لا يُستخدم مع محاصيل حساسة للكلوريد كالتبغ والبطاطس',
        'الإفراط يؤثر على امتصاص المغنيسيوم',
      ],
      pdfId: 3,
      source: {
        title: 'دور البوتاسيوم في تغذية النبات',
        author: 'د. هاني صلاح',
        year: 2022,
        publisher: 'المركز الوطني للبحوث',
      },
    },
    {
      id: 5,
      nameAr: 'كبريتات الأمونيوم',
      nameEn: 'Ammonium Sulfate',
      chemicalFormula: '(NH₄)₂SO₄',
      type: 'nitrogen',
      descriptionAr: 'كبريتات الأمونيوم سماد نيتروجيني يحتوي على 21% نيتروجين و24% كبريت. يُستخدم بشكل خاص في التربة القلوية لخفض درجة الحموضة.',
      npk: { n: 21, p: 0, k: 0 },
      applicationRate: '200-300 كجم/فدان',
      crops: ['أرز', 'قمح', 'قصب السكر', 'بصل', 'ثوم'],
      benefits: [
        'يحتوي على الكبريت إضافة للنيتروجين',
        'يخفض pH التربة القلوية',
        'مناسب لتربة المناطق الجافة',
        'يحسن نكهة محاصيل البصل والثوم',
      ],
      warnings: [
        'يزيد من حموضة التربة عند الاستخدام المفرط',
        'غير مناسب للتربة الحمضية',
        'أقل تركيزاً من اليوريا',
      ],
      pdfId: 1,
      source: {
        title: 'الأسمدة الكبريتية ودورها في التربة',
        author: 'د. أحمد فريد',
        year: 2019,
        publisher: 'جامعة الإسكندرية',
      },
    },
    {
      id: 6,
      nameAr: 'السماد العضوي (الكمبوست)',
      nameEn: 'Organic Compost',
      type: 'organic',
      descriptionAr: 'الكمبوست هو مادة عضوية تنتج من تحلل بقايا النباتات والحيوانات. يحسن خصائص التربة الفيزيائية والكيميائية والبيولوجية ويزود النبات بجميع العناصر الغذائية.',
      npk: { n: 1.5, p: 0.5, k: 1.5 },
      applicationRate: '2-5 طن/فدان',
      crops: ['جميع المحاصيل', 'خضروات', 'فاكهة', 'نباتات زينة'],
      benefits: [
        'يحسن بنية التربة وتهويتها',
        'يزيد قدرة التربة على الاحتفاظ بالماء',
        'يوفر عناصر غذائية متوازنة',
        'يعزز نشاط الكائنات الدقيقة المفيدة',
        'آمن بيئياً ومستدام',
      ],
      warnings: [
        'يحتاج إلى فترة تخمر كاملة قبل الاستخدام',
        'التأثير بطيء مقارنة بالأسمدة الكيماوية',
        'الكمبوست غير الناضج يضر النبات',
      ],
      pdfId: 4,
      source: {
        title: 'الزراعة العضوية والتسميد العضوي',
        author: 'د. نهى عبد المنعم',
        year: 2023,
        publisher: 'مركز البحوث الزراعية',
      },
    },
    {
      id: 7,
      nameAr: 'سماد NPK 15-15-15',
      nameEn: 'NPK Compound 15-15-15',
      type: 'compound',
      descriptionAr: 'سماد مركب يحتوي على نسب متساوية من النيتروجين والفوسفور والبوتاسيوم. مناسب للاستخدام العام في معظم المحاصيل.',
      npk: { n: 15, p: 15, k: 15 },
      applicationRate: '100-200 كجم/فدان',
      crops: ['خضروات', 'فاكهة', 'محاصيل حقلية', 'نباتات زينة'],
      benefits: [
        'مغذٍ متوازن لجميع احتياجات النبات',
        'سهل الاستخدام لأي محصول',
        'يوفر وقت وجهد التسميد',
      ],
      warnings: [
        'قد لا يناسب المحاصيل ذات الاحتياجات الخاصة',
        'أغلى من الأسمدة المنفردة',
      ],
      pdfId: 5,
      source: {
        title: 'الأسمدة المركبة واستخداماتها',
        author: 'م. خالد محمود',
        year: 2021,
        publisher: 'شركة مصر للأسمدة',
      },
    },
    {
      id: 8,
      nameAr: 'كلات الحديد',
      nameEn: 'Iron Chelate (EDTA-Fe)',
      type: 'micronutrient',
      descriptionAr: 'كلات الحديد هو مصدر للحديد الميسر للنبات، يُستخدم لعلاج الاصفرار الناتج عن نقص الحديد في التربة القلوية.',
      npk: { n: 0, p: 0, k: 0 },
      applicationRate: '1-2 كجم/فدان رشاً ورقياً أو تربة',
      crops: ['فاكهة', 'خضروات', 'نباتات زينة', 'حوامض'],
      benefits: [
        'يعالج اصفرار النبات بسرعة',
        'متاح في التربة القلوية',
        'مستقر كيميائياً',
      ],
      warnings: [
        'مرتفع التكلفة',
        'الجرعة الزائدة تضر النبات',
        'يُخفف جيداً قبل الاستخدام',
      ],
      pdfId: 5,
      source: {
        title: 'العناصر الصغرى ودورها في التغذية النباتية',
        author: 'د. رانيا فتحي',
        year: 2022,
        publisher: 'كلية الزراعة جامعة عين شمس',
      },
    },
  ];

  private pdfDocuments: PdfDocument[] = [
    {
      id: 1,
      titleAr: 'دليل الأسمدة النيتروجينية وتوصيات التسميد',
      titleEn: 'Guide to Nitrogen Fertilizers and Fertilization Recommendations',
      category: 'fertilizers',
      descriptionAr: 'دليل شامل يتناول أنواع الأسمدة النيتروجينية المختلفة وكيفية استخدامها بكفاءة في المحاصيل الزراعية المختلفة، مع توصيات تفصيلية لكل محصول.',
      author: 'وزارة الزراعة واستصلاح الأراضي',
      organization: 'مركز بحوث الأراضي والمياه والبيئة',
      year: 2022,
      pages: 85,
      fileUrl: 'assets/pdfs/nitrogen-fertilizers-guide.pdf',
      fileSize: '2.4 MB',
      tags: ['يوريا', 'نترات الأمونيوم', 'كبريتات الأمونيوم', 'نيتروجين', 'قمح', 'ذرة'],
      source: 'وزارة الزراعة المصرية - 2022',
      language: 'ar',
      downloads: 1250,
    },
    {
      id: 2,
      titleAr: 'الأسمدة الفوسفاتية في الزراعة الحديثة',
      titleEn: 'Phosphate Fertilizers in Modern Agriculture',
      category: 'fertilizers',
      descriptionAr: 'بحث متخصص في الأسمدة الفوسفاتية يشمل أنواعها ومصادرها وكيفية استخدامها لتحسين إنتاجية المحاصيل مع دراسة تأثيرها على خصائص التربة.',
      author: 'د. سامي عبد الرحمن',
      organization: 'معهد بحوث الأراضي والمياه والبيئة',
      year: 2020,
      pages: 62,
      fileUrl: 'assets/pdfs/phosphate-fertilizers.pdf',
      fileSize: '1.8 MB',
      tags: ['سوبر فوسفات', 'فوسفات', 'جذور', 'تربة'],
      source: 'مجلة بحوث الأراضي - المجلد 15 - 2020',
      language: 'ar',
      downloads: 890,
    },
    {
      id: 3,
      titleAr: 'دور البوتاسيوم في تحسين جودة المحاصيل',
      titleEn: 'Role of Potassium in Improving Crop Quality',
      category: 'fertilizers',
      descriptionAr: 'دراسة علمية تشرح دور عنصر البوتاسيوم في حياة النبات وكيفية تأثيره على جودة المحصول ومقاومة الأمراض والقدرة على تحمل الظروف البيئية القاسية.',
      author: 'د. هاني صلاح - د. مريم يوسف',
      organization: 'المركز الوطني للبحوث',
      year: 2022,
      pages: 48,
      fileUrl: 'assets/pdfs/potassium-role.pdf',
      fileSize: '1.2 MB',
      tags: ['بوتاسيوم', 'جودة المحصول', 'مقاومة الأمراض', 'بطاطس', 'طماطم'],
      source: 'المجلة المصرية للبستنة - 2022',
      language: 'ar',
      downloads: 640,
    },
    {
      id: 4,
      titleAr: 'التسميد العضوي والزراعة المستدامة',
      titleEn: 'Organic Fertilization and Sustainable Agriculture',
      category: 'fertilizers',
      descriptionAr: 'دليل التسميد العضوي يوضح فوائد استخدام الأسمدة العضوية في تحسين التربة وزيادة الإنتاجية مع الحفاظ على البيئة والزراعة المستدامة.',
      author: 'د. نهى عبد المنعم - د. عصام الدين محمد',
      organization: 'مركز البحوث الزراعية',
      year: 2023,
      pages: 110,
      fileUrl: 'assets/pdfs/organic-fertilization.pdf',
      fileSize: '3.1 MB',
      tags: ['كمبوست', 'سماد عضوي', 'زراعة عضوية', 'استدامة', 'تربة'],
      source: 'مركز البحوث الزراعية - مصر 2023',
      language: 'ar',
      downloads: 2100,
    },
    {
      id: 5,
      titleAr: 'الأسمدة المركبة والعناصر الصغرى',
      titleEn: 'Compound Fertilizers and Micronutrients',
      category: 'fertilizers',
      descriptionAr: 'مرجع شامل للأسمدة المركبة وعناصر التغذية الصغرى وأهميتها في الزراعة الحديثة، مع توصيات تفصيلية لمعالجة نقص العناصر في التربة.',
      author: 'م. خالد محمود - د. رانيا فتحي',
      organization: 'كلية الزراعة - جامعة عين شمس',
      year: 2021,
      pages: 75,
      fileUrl: 'assets/pdfs/compound-micronutrients.pdf',
      fileSize: '2.0 MB',
      tags: ['NPK', 'عناصر صغرى', 'حديد', 'زنك', 'منغنيز', 'بور'],
      source: 'جامعة عين شمس - كلية الزراعة 2021',
      language: 'ar',
      downloads: 755,
    },
    {
      id: 6,
      titleAr: 'تحليل التربة وبرامج التسميد',
      titleEn: 'Soil Analysis and Fertilization Programs',
      category: 'soil',
      descriptionAr: 'كيفية إجراء تحليل التربة وقراءة النتائج وبناء برامج تسميد متكاملة بناءً على احتياجات المحصول وخصائص التربة.',
      author: 'د. محمد السيد عثمان',
      organization: 'معهد بحوث الأراضي والمياه',
      year: 2023,
      pages: 95,
      fileUrl: 'assets/pdfs/soil-analysis-fertilization.pdf',
      fileSize: '2.8 MB',
      tags: ['تحليل التربة', 'pH', 'خصوبة', 'برامج تسميد'],
      source: 'معهد بحوث الأراضي والمياه - 2023',
      language: 'ar',
      downloads: 1830,
    },
    {
      id: 7,
      titleAr: 'تسميد محاصيل الخضروات',
      titleEn: 'Vegetable Crop Fertilization',
      category: 'crops',
      descriptionAr: 'دليل عملي لتسميد أهم محاصيل الخضروات في مصر والوطن العربي، يتضمن توصيات تفصيلية لكل محصول في كل مرحلة نمو.',
      author: 'فريق البحوث الزراعية',
      organization: 'وزارة الزراعة واستصلاح الأراضي',
      year: 2022,
      pages: 130,
      fileUrl: 'assets/pdfs/vegetable-fertilization.pdf',
      fileSize: '4.2 MB',
      tags: ['طماطم', 'خيار', 'فلفل', 'بطاطس', 'خضروات', 'تسميد'],
      source: 'وزارة الزراعة المصرية - 2022',
      language: 'ar',
      downloads: 3200,
    },
    {
      id: 8,
      titleAr: 'Fertilizer Use and Management in Egypt',
      titleEn: 'Fertilizer Use and Management in Egypt',
      category: 'research',
      descriptionAr: 'بحث باللغة الإنجليزية يستعرض واقع استخدام الأسمدة في مصر وتحديات إدارتها وتوصيات لتحسين كفاءة استخدام الأسمدة.',
      author: 'FAO Egypt Office',
      organization: 'Food and Agriculture Organization (FAO)',
      year: 2021,
      pages: 56,
      fileUrl: 'assets/pdfs/fao-fertilizer-egypt.pdf',
      fileSize: '1.6 MB',
      tags: ['FAO', 'Egypt', 'Fertilizer Management', 'Efficiency'],
      source: 'FAO - Food and Agriculture Organization 2021',
      language: 'en',
      downloads: 980,
    },
  ];

  getFertilizers(): Fertilizer[] {
    return this.fertilizers;
  }

  getFertilizerById(id: number): Fertilizer | undefined {
    return this.fertilizers.find(f => f.id === id);
  }

  getFertilizersByType(type: FertilizerType): Fertilizer[] {
    return this.fertilizers.filter(f => f.type === type);
  }

  searchFertilizers(query: string): Fertilizer[] {
    const q = query.toLowerCase();
    return this.fertilizers.filter(f =>
      f.nameAr.includes(query) ||
      f.nameEn.toLowerCase().includes(q) ||
      f.descriptionAr.includes(query) ||
      f.crops.some(c => c.includes(query))
    );
  }

  getPdfDocuments(): PdfDocument[] {
    return this.pdfDocuments;
  }

  getPdfById(id: number): PdfDocument | undefined {
    return this.pdfDocuments.find(p => p.id === id);
  }

  getPdfsByCategory(category: PdfCategory): PdfDocument[] {
    return this.pdfDocuments.filter(p => p.category === category);
  }

  searchPdfs(query: string): PdfDocument[] {
    const q = query.toLowerCase();
    return this.pdfDocuments.filter(p =>
      p.titleAr.includes(query) ||
      p.titleEn.toLowerCase().includes(q) ||
      p.descriptionAr.includes(query) ||
      p.tags.some(t => t.includes(query) || t.toLowerCase().includes(q)) ||
      p.author.includes(query)
    );
  }

  getStats() {
    return {
      totalFertilizers: this.fertilizers.length,
      totalPdfs: this.pdfDocuments.length,
      totalDownloads: this.pdfDocuments.reduce((sum, p) => sum + p.downloads, 0),
      categories: [...new Set(this.pdfDocuments.map(p => p.category))].length,
    };
  }
}
