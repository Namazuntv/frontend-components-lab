import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { DashboardExample } from './pages/DashboardExample/DashboardExample';

function App() {
  return (
    <Box minH="100vh" bg="gray.50" py={10}>
      <Container maxW="6xl">
        <VStack align="stretch" gap={8}>
          <Box>
            <Heading>Frontend Components Lab</Heading>
            <Text color="gray.600" mt={2}>
              Laboratorio de componentes reutilizables para interfaces administrativas.
            </Text>
          </Box>

          <DashboardExample />
        </VStack>
      </Container>
    </Box>
  );
}

export default App;