import { Skeleton, SkeletonTheme } from '@/app/components';
import { Box } from '@radix-ui/themes';

const IssueFormSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Box className="max-w-xl">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </Box>
    </SkeletonTheme>
  );
};

export default IssueFormSkeleton;
