export type PdfCategory = 'fertilizers' | 'soil' | 'crops' | 'irrigation' | 'pesticides' | 'research';

export const PDF_CATEGORY_LABELS: Record<PdfCategory, string> = {
  fertilizers: 'الأسمدة',
  soil: 'التربة',
  crops: 'المحاصيل',
  irrigation: 'الري',
  pesticides: 'المبيدات',
  research: 'الأبحاث',
};

export interface PdfDocument {
  id: number;
  titleAr: string;
  titleEn: string;
  category: PdfCategory;
  descriptionAr: string;
  author: string;
  organization: string;
  year: number;
  pages: number;
  fileUrl: string;
  fileSize: string;
  tags: string[];
  source: string;
  language: 'ar' | 'en' | 'both';
  downloads: number;
}
