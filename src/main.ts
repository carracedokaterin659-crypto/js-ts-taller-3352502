import { type User, Role } from "./interfaces/user.interface";

const users: User[] = [
  { id: 1, name: "Pedro Pimienta", email: "pedro@sena.edu.co", role: Role.INSTRUCTOR, isActive: true },
  { id: 2, name: "Maria López", email: "maria@sena.edu.co", role: Role.LEARNER, isActive: true },
  { id: 3, name: "Juan Pérez", email: "juan@sena.edu.co", role: Role.LEARNER, isActive: false },
  { id: 4, name: "Ana Gomez", email: "ana@sena.edu.co", role: Role.ADMIN, isActive: true }
];

// 1. Desestructuración de Objetos y Arreglos
const [firstUser] = users;
const { name: firstName, email: firstEmail } = firstUser;

console.log(`Primer usuario extraído: ${firstName} (${firstEmail})`);

// 2. Manipulación de Arreglos (filter & map)
const activeUsers = users.filter(user => user.isActive);
const userEmails = users.map(user => user.email.toLowerCase());

console.log("Usuarios Activos:", activeUsers);
console.log("Lista completa de correos:", userEmails);


