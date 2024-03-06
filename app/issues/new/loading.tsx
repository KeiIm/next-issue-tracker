import { Skeleton, SkeletonTheme } from '@/app/components';
import { Box } from '@radix-ui/themes';

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
