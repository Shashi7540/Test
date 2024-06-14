// src/components/ItemImage.tsx
import React from "react";
import Image from "next/image";

interface Props {
  item: {
    id: number;
    name: string;
    category: string;
    price: number;
  };
}

const ItemImage: React.FC<Props> = ({ item }) => {
  // Function to render the appropriate image based on item.name
  const renderImage = () => {
    switch (item.name) {
      case "Laptop":
        return (
          <Image
            src="/laptop.jpg"
            width={300}
            height={100}
            className="object-fill"
            alt={`${item.name} - ${item.category}`}
          />
        );
      case "T-Shirt":
        return (
          <Image
            src="/tshirt.avif"
            width={200}
            height={100}
            className="object-fill"
            alt={`${item.name} - ${item.category}`}
          />
        );
      case "Book":
        return (
          <Image
            src="/book 1.jpg"
            width={200}
            height={100}
            className="object-fill"
            alt={`${item.name} - ${item.category}`}
          />
        );
      case "Iphone 15 Pro Max":
        return (
          <Image
            src="/iphone.jpeg"
            width={300}
            height={100}
            className="object-fill"
            alt={`${item.name} - ${item.category}`}
          />
        );
      case "Frock":
        return (
          <Image
            src="/frock.jpg"
            width={200}
            height={100}
            className="object-fill"
            alt={`${item.name} - ${item.category}`}
          />
        );
      case "Book 2":
        return (
          <Image
            src="/book 2.webp"
            width={200}
            height={100}
            className="object-fill"
            alt={`${item.name} - ${item.category}`}
          />
        );
      default:
        return null;
    }
  };

  return <div className="flex justify-center">{renderImage()}</div>;
};

export default ItemImage;
