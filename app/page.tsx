import IssueSummary from './IssueSummary';
import LatestIssue from './LatestIssue';
import Link from './components/Link';
import { Flex, Text } from '@radix-ui/themes';
import prisma from '@/prisma/client';
import IssueChart from './IssueChart';

export default async function Home() {
  const open = await prisma?.issue.count({
    where: { status: 'OPEN' },
  });
  const inProgress = await prisma?.issue.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closed = await prisma?.issue.count({
    where: { status: 'CLOSED' },
  });

  return (
    <Flex direction="column" gap="5">
      <LatestIssue />
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <IssueChart open={open} inProgress={inProgress} closed={closed} />
    </Flex>
  );
}
