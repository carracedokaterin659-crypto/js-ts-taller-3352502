// src/services/user.service.ts
import type { User } from "../interfaces/user.interface";

// Función flecha con tipo de retorno explícito
export const countUsersByStatus = (
  usersList: User[]
): { active: number; inactive: number } => {
  const active = usersList.filter((u) => u.isActive).length;
  const inactive = usersList.length - active;

  return { active, inactive };
};

// Función con retorno múltiple mediante Tupla
export const getUsersSummary = (user: User): [string, string, boolean] => {
  return [user.name, user.role, user.isActive];
};