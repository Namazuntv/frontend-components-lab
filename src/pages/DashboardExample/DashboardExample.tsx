import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { DataTable } from '../../components/DataTable';

export function DashboardExample() {
  return (
    <Box>
      <VStack align="stretch" gap={6}>
        <Box>
          <Heading size="lg">Dashboard administrativo</Heading>
          <Text color="gray.600" mt={2}>
            Ejemplo de tabla con usuarios, estados y menú de acciones reutilizable.
          </Text>
        </Box>

        <DataTable />
      </VStack>
    </Box>
  );
}