import { notFound } from 'next/navigation';
import { store } from '@/store';
import { CaseItem, fetchCaseBySlug } from '@/store/casesSlice';
import CaseDetails from '@/components/CaseDetails/CaseDetails';

export const revalidate = 60;

export async function generateStaticParams() {
    const response = await fetch('https://api.cms.chulakov.dev/page/work?limit=37');
    const cases = await response.json();
    
    return cases.items.map((caseItem: CaseItem) => ({
      slug: caseItem.slug 
    }));
  }

  interface PageProps {
    params: {
      slug: string
    }
  }

  export default async function CasePage({ params }: PageProps) {
    const response = await fetch(`https://api.cms.chulakov.dev/page/work/${params.slug}`)
    const caseData = await response.json() as CaseItem
    
    if (!caseData) {
      return <h2>Кейс не найден</h2>
    }
  
    return <CaseDetails data={caseData} />
  }