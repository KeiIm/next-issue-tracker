import dynamic from 'next/dynamic';
import IssueFormSkeleton from '@/app/issues/_components/IssueFormSkeleton';
import { Metadata } from 'next';

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;

export const metadata: Metadata = {
  title: 'New Issue',
  description: 'Create a new project issue',
};
