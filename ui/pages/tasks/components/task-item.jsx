import { Box, Button, Checkbox, HStack, Stack } from '@chakra-ui/react';
import React, { memo } from 'react';
import { useTaskItem } from '../hooks/use-task-item';

export const TaskItem = memo(({ task }) => {
  const { onDelete, onMarkAsDone } = useTaskItem();

  return (
    <HStack mt={4}>
      <Box w="80%">
        <Checkbox
          colorScheme="green"
          isChecked={task.done}
          onChange={() => onMarkAsDone(task._id)}
          style={{ textDecoration: task.done ? 'line-through' : 'none' }}
        >
          {task.description}
        </Checkbox>
      </Box>
      <Stack w="20%" justify="flex-end" direction="row">
        <Button
          colorScheme="red"
          variant="outline"
          size="xs"
          onClick={() => onDelete(task._id)}
        >
          Remove
        </Button>
      </Stack>
    </HStack>
  );
});
