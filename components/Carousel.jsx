import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
<<<<<<< HEAD
            <Title addClass="text-6xl">Fast-Food Restoranı</Title>
=======
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
<<<<<<< HEAD
            <button className="btn-primary">Sipariş Ver</button>
=======
            <button className="btn-primary">Order Now</button>
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
<<<<<<< HEAD
            <Title addClass="text-6xl">Fast-Food Restoranı</Title>
=======
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
<<<<<<< HEAD
            <button className="btn-primary">Sipariş Ver</button>
=======
            <button className="btn-primary">Order Now</button>
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
