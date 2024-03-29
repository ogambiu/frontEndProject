<<<<<<< HEAD
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../pages/api/hello";
=======
import React from "react";
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
<<<<<<< HEAD
  const [active, setActive] = useState(0);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`https://localhost:7063/api/Category`);
        setCategories(res?.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  // useEffect(() => {
  //   async () => {
  //     try {
  //       const products = await axios.get(
  //         `https://localhost:7063/api/Product/Details?PageNumber=${pageNumberParam}&PageSize=${pageSizeParam}`,
  //       );
  //       setFilter(
  //         products.data.filter(
  //           (product) =>
  //             product.categoryName ===
  //             categories[active].categoryName,
  //         ),
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // }, [categories, active]);

  const { isLoading, error, data } = useQuery(["products"], () =>
    fetchProducts(),
  );

  if (isLoading) return "Yükleniyor...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Menülerimiz</Title>
        <div className="mt-10">
          {categories.map((category, index) => (
            <button
              className={`px-6 py-2  rounded-3xl ${
                index === active && "bg-secondary text-white"
              }`}
              key={category.id}
              onClick={() => setActive(index)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {data.data.map((prods) => (
          <MenuItem key={prods.id} products={prods} />
        ))}
=======
  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl ">Burger</button>
          <button className="px-6 py-2  rounded-3xl ">Pizza</button>
          <button className="px-6 py-2  rounded-3xl ">Drink</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
      </div>
    </div>
  );
};

export default MenuWrapper;
