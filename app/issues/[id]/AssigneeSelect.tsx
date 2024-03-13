'use client';
import { User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Skeleton, SkeletonTheme } from '@/app/components';
import { Issue } from '@prisma/client';
import toast, { Toaster } from 'react-hot-toast';

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60_000, // 60 seconds
    retry: 3,
  });

  if (isLoading)
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton />
      </SkeletonTheme>
    );

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || ''}
        onValueChange={async (userId) => {
          //alternative to try-catch:
          await axios
            .patch(`/api/issues/${issue.id}`, {
              // assignedToUserId: userId || null,
              // Workaround: 'unassigned' is used as value !== empty string
              assignedToUserId: userId === 'unassigned' ? null : userId,
            })
            .catch(() => {
              toast.error('Changes could not be saved.');
            });
        }}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
