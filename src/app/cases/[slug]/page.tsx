import { notFound } from 'next/navigation';
import { store } from '@/store';
import { CaseItem, fetchCaseBySlug } from '@/store/casesSlice';
import CaseDetails from '@/components/CaseDetails/CaseDetails';

export const revalidate = 60;

export async function generateStaticParams() {
    const response = await fetch('https://api.cms.chulakov.dev/page/work?limit=40');
    const cases = await response.json();
    
    return cases.items.map((caseItem: CaseItem) => ({
      slug: caseItem.slug 
    }));
  }

  export default async function CasePage({ params }: { params: { slug: string } }) {
    await store.dispatch(fetchCaseBySlug(params.slug));
    const caseData = store.getState().cases.currentCase;
  
    if (!caseData) return notFound();
  
    return <CaseDetails data={caseData} />;
  } 