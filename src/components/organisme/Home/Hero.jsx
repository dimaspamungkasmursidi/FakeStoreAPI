import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Button from "../../atoms/Button/Button";
import Circle from "../../atoms/Shapes/Circle";
import Modal from "../Modals/Modal";
// import { Link } from "react-router-dom";

export default function Hero() {
  
  const name = localStorage.getItem("name");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShopNow = () => {
    if (!name) {
      setIsModalOpen(true);
    } else {
      window.location.href = "/product";
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo("#image", { scale: 1.2 }, { scale: 1, duration: 1, ease: "power4.out" });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".animasi",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full px-8 py-12 md:py-14 flex flex-wrap-reverse md:flex-nowrap item-center justify-center md:gap-10">
      <div className="w-[34rem] flex flex-col items-center justify-center md:items-start">
        <div className="relative mt-8 mb-2 text-center md:text-left">
          <Circle />
          <h1 className="animasi text-5xl font-bold londrina-black tracking-wider">ShopShapi</h1>
          <p className="animasi text-xl">selling electronics, jewelry and clothing. the products we sell are the best products in the world.</p>
        </div>
        <div>
        <Button onClick={handleShopNow}>Shop Now</Button>
        </div>
      </div>
      <div className="w-[20rem] md:w-[26rem] -z-50">
        <img
          id="image"
          src="/images/shop.png"
          alt="Hero.png"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
