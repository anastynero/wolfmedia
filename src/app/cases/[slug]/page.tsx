import { notFound } from 'next/navigation';
import CaseDetails from '@/components/CaseDetails/CaseDetails';

export const revalidate = 60;

export default async function CasePage({params}: {params: Promise<{ slug: string }>}){
    const { slug } = await params;
    const response = await fetch(`https://api.cms.chulakov.dev/page/work/${slug}`);
    
    const caseData = await response.json();
    
    if (!caseData) notFound();

    return <CaseDetails data={caseData} />;
}