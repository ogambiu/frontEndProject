import Image from "next/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = ({products}) => {
  return (
    <div>
      <div className="bg-secondary rounded-3xl">
        <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
          <Link href={`/productInfo/${products.id}`}>
            <div className="relative w-36 h-36 hover:scale-110 transition-all" priority="true">
              <Image src="/images/f1.png" alt="" layout="fill"/>
            </div>
          </Link>
        </div>
        <div className="p-[25px] text-white" priority="true">
          <h4 className="text-xl font-semibold">{products.productName}</h4>
          <p className="text-[15px]">
            {products.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span>${products.price}</span>
            <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
              <RiShoppingCart2Fill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
