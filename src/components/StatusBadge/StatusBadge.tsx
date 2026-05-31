import { Badge } from '@chakra-ui/react';

interface StatusBadgeProps {
  status: 'Activo' | 'Pendiente' | 'Inactivo';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colorScheme = {
    Activo: 'green',
    Pendiente: 'yellow',
    Inactivo: 'red',
  }[status];

  return (
    <Badge colorScheme={colorScheme} borderRadius="full" px={3} py={1}>
      {status}
    </Badge>
  );
}