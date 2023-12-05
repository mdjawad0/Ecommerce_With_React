import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-63 mx-6 my-2 p-4">
      <div className="h-48 w-full">
        <img
          className="object-cover object-center w-full h-full"
          src={product.imageUrl}
          alt="Product"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
