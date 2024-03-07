import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

const EditIssueButton = ({ href }: { href: string }) => {
  return (
    <Button>
      <Link href={href}>
        <Flex gap="2" align="center">
          <Pencil2Icon />
          <span>Edit Issue</span>
        </Flex>
      </Link>
    </Button>
  );
};

export default EditIssueButton;
