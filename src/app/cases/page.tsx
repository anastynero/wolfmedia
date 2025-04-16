import { store } from '@/store';
import { fetchProducts } from '@/store/casesSlice';
import ClientCases from '@/components/Cases/Cases';

export const revalidate = 60; 

export default async function CasesPage() {
  await store.dispatch(fetchProducts(0));
  const initialData = store.getState().cases.items;

  return <ClientCases initialData={initialData} />;
}