// src/pages/index.tsx
import React from "react";

import { Item } from "@/types";
import FilterableList from "../Components/FilterableList";

const items: Item[] = [
  {
    id: 1,
    name: "Laptop",
    category: "electronics",
    price: 999,
    image: "/laptop.jpg",
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "clothing",
    price: 19,
    image: "/path/to/laptop.jpg",
  },
  {
    id: 3,
    name: "Book",
    category: "books",
    price: 20,
    image: "/path/to/book.jpg",
  },
  {
    id: 4,
    name: "Frock",
    category: "clothing",
    price: 60,
    image: "/tshirt.avif",
  },
  {
    id: 5,
    name: "Iphone 15 Pro Max",
    category: "electronics",
    price: 150,
    image: "/iphone.webp",
  },
  {
    id: 6,
    name: "Book",
    category: "books",
    price: 50,
    image: "/path/to/book.jpg",
  },
  // Add more items as needed
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <FilterableList items={items} />
    </div>
  );
};

export default HomePage;
