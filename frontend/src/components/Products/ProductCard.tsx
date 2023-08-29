import Link from "next/link";
import React, { FC } from "react";
import ProductCardClass from "./ProductCardClass";
import Image from "next/image";

interface ProductCardProps {
  productName: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { productName, slug, imageSrc, imageAlt, price } = props;
  return (
    <div>
      <Link href={slug} className="group">
        <div className={ProductCardClass.productWarp}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={200}
            width={200}
            className={ProductCardClass.productImg}
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{productName}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
