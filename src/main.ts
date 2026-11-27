import { type User, Role } from "./interfaces/user.interface";

const instructor: User = {
  id: 1,
  name: "Pedro Pimienta",
  email: "pedro@sena.edu.co",
  role: Role.INSTRUCTOR,
  isActive: true,
  age: 28
};

const learner1: User = {
  id: 2,
  name: "María López",
  email: "maria@sena.edu.co",
  role: Role.LEARNER,
  isActive: true
};

console.log("Instructor registrado:", instructor);
console.log(`Aprendiz: ${learner1.name} | Rol: ${learner1.role}`);
