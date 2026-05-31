export interface MockUser {
  id: number;
  name: string;
  email: string;
  role: 'Consultor' | 'Líder' | 'Administrador';
  status: 'Activo' | 'Pendiente' | 'Inactivo';
}

export const mockUsers: MockUser[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    role: 'Consultor',
    status: 'Activo',
  },
  {
    id: 2,
    name: 'Ana Gómez',
    email: 'ana.gomez@example.com',
    role: 'Líder',
    status: 'Pendiente',
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@example.com',
    role: 'Administrador',
    status: 'Inactivo',
  },
];