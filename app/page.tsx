import Link from './components/Link';
import Pagination from './components/Pagination';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  // return <Link href={'/issues'}>View Issues</Link>;
  return (
    <Pagination
      itemCount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
