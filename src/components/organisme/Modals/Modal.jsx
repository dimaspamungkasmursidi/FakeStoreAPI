// src/components/atoms/Modal/Modal.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../../atoms/Button/Button";

export default function Modal({ isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div
        ref={modalRef}
        className="bg-slate-500 mx-4 p-6 rounded-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="top-0 right-0 w-8">
          <Button onClick={onClose} size="p-1 px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
        </div>
        <h2 className="text-2xl londrina-black mt-8">Register Required</h2>
        <p className="mb-4">Please register first to move to the Shop or Product page.</p>
        <p className="mb-8 font-bold">*register using only your name.</p>
        <Button onClick={() => (window.location.href = "/register")}>
          Register
        </Button>
      </div>
    </div>
  );
}
