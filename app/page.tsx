import Link from './components/Link';
import Pagination from './components/Pagination';

export default function Home() {
  // return <Link href={'/issues'}>View Issues</Link>;
  return <Pagination itemCount={100} pageSize={10} currentPage={5} />;
}
