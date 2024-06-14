"use client"
import { Item } from "@/types";
import React from "react";
import FilterableList from "./Components/FilterableList";
// Adjust path as per your project structure

const items: Item[] = [
  { id: 1, name: "Laptop", category: "electronics", price: 999 },
  { id: 2, name: "T-Shirt", category: "clothing", price: 19 },
  { id: 3, name: "Book", category: "books", price: 10 },
  { id: 4, name: "Frock", category: "clothing", price: 80 },
  { id: 5, name: "Iphone 15 Pro Max", category: "electronics", price: 1299 },
  { id: 6, name: "Book 2", category: "books", price: 20 },
  // Add more items as needed
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center bg-black text- text-[38px] font-bold">
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          Product List
        </span>
      </h1>
      <FilterableList items={items} />
    </div>
  );
};

export default HomePage;
