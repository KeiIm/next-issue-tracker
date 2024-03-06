import { Box } from '@radix-ui/themes';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingNewIssuePage = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Box className="max-w-xl">
        <Skeleton />
        <Skeleton height="20rem" />
      </Box>
    </SkeletonTheme>
  );
};

export default LoadingNewIssuePage;
