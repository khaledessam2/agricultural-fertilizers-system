export type FertilizerType = 'nitrogen' | 'phosphorus' | 'potassium' | 'organic' | 'compound' | 'micronutrient';

export interface FertilizerSource {
  title: string;
  author: string;
  year: number;
  publisher?: string;
  url?: string;
}

export interface Fertilizer {
  id: number;
  nameAr: string;
  nameEn: string;
  chemicalFormula?: string;
  type: FertilizerType;
  descriptionAr: string;
  npk: { n: number; p: number; k: number };
  applicationRate: string;
  crops: string[];
  benefits: string[];
  warnings: string[];
  pdfId?: number;
  source: FertilizerSource;
  imageUrl?: string;
}

export const FERTILIZER_TYPE_LABELS: Record<FertilizerType, string> = {
  nitrogen: 'أسمدة نيتروجينية',
  phosphorus: 'أسمدة فوسفاتية',
  potassium: 'أسمدة بوتاسية',
  organic: 'أسمدة عضوية',
  compound: 'أسمدة مركبة',
  micronutrient: 'عناصر صغرى',
};

export const FERTILIZER_TYPE_COLORS: Record<FertilizerType, string> = {
  nitrogen: 'bg-blue-100 text-blue-800',
  phosphorus: 'bg-orange-100 text-orange-800',
  potassium: 'bg-purple-100 text-purple-800',
  organic: 'bg-green-100 text-green-800',
  compound: 'bg-teal-100 text-teal-800',
  micronutrient: 'bg-yellow-100 text-yellow-800',
};
