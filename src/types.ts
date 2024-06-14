// src/types.ts

export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  image?: string; // Make sure image is optional with `?`
}
