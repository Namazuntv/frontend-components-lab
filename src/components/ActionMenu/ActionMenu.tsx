import { IconButton, Menu, Portal, HStack, Text } from '@chakra-ui/react';
import { FiEdit, FiEye, FiMoreVertical, FiSend, FiTrash2 } from 'react-icons/fi';

interface ActionMenuProps {
  onSend?: () => void;
  onViewHistory?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function ActionMenu({
  onSend,
  onViewHistory,
  onEdit,
  onDelete,
}: ActionMenuProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton
          aria-label="Más acciones"
          variant="outline"
          size="sm"
        >
          <FiMoreVertical />
        </IconButton>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="send" onClick={onSend}>
              <HStack gap="2">
                <FiSend />
                <Text>Enviar</Text>
              </HStack>
            </Menu.Item>

            <Menu.Item value="history" onClick={onViewHistory}>
              <HStack gap="2">
                <FiEye />
                <Text>Histórico</Text>
              </HStack>
            </Menu.Item>

            <Menu.Item value="edit" onClick={onEdit}>
              <HStack gap="2">
                <FiEdit />
                <Text>Editar</Text>
              </HStack>
            </Menu.Item>

            <Menu.Item value="delete" onClick={onDelete} color="red.500">
              <HStack gap="2">
                <FiTrash2 />
                <Text>Eliminar</Text>
              </HStack>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}