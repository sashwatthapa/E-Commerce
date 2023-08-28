import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import ProductCardClass from "../Products/ProductCardClass";

interface CategoryCardProps {
  categoryName: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
}

const CategoryCard: FC<CategoryCardProps> = (props) => {
  const { categoryName, slug, imageSrc, imageAlt } = props;
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
        <h6 className="mt-4 text-xs text-gray-600">{categoryName}</h6>
      </Link>
    </div>
  );
};

export default CategoryCard;
