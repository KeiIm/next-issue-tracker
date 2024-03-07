import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';

const DeleteIssueButton = ({ href }: { href: string }) => {
  return (
    <Button color="red">
      {/* <Link href={href}>
        <Flex gap="2" align="center">
          <Pencil2Icon /> */}
      <span>Delete Issue</span>
      {/* </Flex>
      </Link> */}
    </Button>
  );
};

export default DeleteIssueButton;
