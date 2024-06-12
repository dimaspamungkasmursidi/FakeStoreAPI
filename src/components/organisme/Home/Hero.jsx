import Button from "../../atoms/Button/Button";
import { useEffect } from "react";
import gsap from "gsap";
import React from 'react'
import Circle from "../../atoms/Shapes/Circle";
import { Link } from "react-router-dom";

export default function Hero() {
  
  
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
        <Link to="/Product">
        <Button>Shop Now</Button>
        </Link>
      </div>
      <div className="w-[20rem] md:w-[26rem] -z-50">
        <img
        id="image"
          src="/images/shop.png"
          alt="Hero.png"
        />
      </div>
    </section>
  )
}
