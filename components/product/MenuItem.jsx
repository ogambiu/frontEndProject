import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = ({products}) => {
=======
import {RiShoppingCart2Fill} from "react-icons/ri"

const MenuItem = () => {
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
  return (
    <div>
      <div className="bg-secondary rounded-3xl">
        <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
<<<<<<< HEAD
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
=======
          <div className="relative w-36 h-36 hover:scale-110 transition-all">
            <Image src="/images/f1.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="p-[25px] text-white">
          <h4 className="text-xl font-semibold">Delicious Pizza</h4>
          <p className="text-[15px]">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
            velit, magnam voluptatem repellendus sed eaque
          </p>
          <div className="flex justify-between items-center mt-4">
            <span>$20</span>
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
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
