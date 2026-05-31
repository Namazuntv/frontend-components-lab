import { Box, Table } from '@chakra-ui/react';
import { mockUsers } from '../../data/mockUsers';
import { ActionMenu } from '../ActionMenu';
import { StatusBadge } from '../StatusBadge';

export function DataTable() {
  const showAction = (action: string, name: string) => {
    window.alert(`${action}: ${name}`);
  };

  return (
    <Box bg="white" borderRadius="xl" boxShadow="sm" overflowX="auto">
      <Table.Root variant="line">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Nombre</Table.ColumnHeader>
            <Table.ColumnHeader>Email</Table.ColumnHeader>
            <Table.ColumnHeader>Rol</Table.ColumnHeader>
            <Table.ColumnHeader>Estado</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="right">Acciones</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {mockUsers.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell fontWeight="medium">{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>
                <StatusBadge status={user.status} />
              </Table.Cell>
              <Table.Cell textAlign="right">
                <ActionMenu
                  onSend={() => showAction('Enviar', user.name)}
                  onViewHistory={() => showAction('Histórico', user.name)}
                  onEdit={() => showAction('Editar', user.name)}
                  onDelete={() => showAction('Eliminar', user.name)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}