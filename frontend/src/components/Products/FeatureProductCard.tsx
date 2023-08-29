import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface FeatureProductCardProps {
  productName: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
}
const FeatureProductCard: FC<FeatureProductCardProps> = (props) => {
  const { productName, slug, imageAlt, imageSrc, price } = props;
  return (
    <div>
      <Link href={slug} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={250}
            height={200}
            className=""
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{productName}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      </Link>
    </div>
  );
};

const productCardClass{
    image: "h-full w-full object-cover object-center group-hover:opacity-75"
}

export default FeatureProductCard;
