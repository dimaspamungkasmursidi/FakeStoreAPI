import { useEffect, useRef } from "react";
import gsap from "gsap";

const Button = (props) => {
  const {
    children,
    type = "button",
    onClick = () => {},
    variant = "bg-gradient-to-r from-slate-400 from-4% to-primary to-90% transform transition duration-500 hover:scale-110 shadow-lg",
  } = props;
  const buttonRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, width: 0 },
      {
        duration: 0.5,
        opacity: 1,
        width: "100%",
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`p-2 ${variant} px-6 rounded-md transition duration-300 ease-in-out`}
    >
      <p ref={titleRef} className="flex item-center justify-center">
        {children}
      </p>
    </button>
  );
};

export default Button;
