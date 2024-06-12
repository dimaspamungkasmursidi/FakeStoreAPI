import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Circle( props ) {

  const { size = "w-60 h-60 -left-20 -top-40" } = props

    const shapeRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(
        shapeRef.current,
        { x: -200 },
        {
          duration: 1.5,
          x: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: shapeRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }, []);
  return (
    <div ref={shapeRef} className={`absolute hidden md:block -z-50 rounded-full ${size} bg-gradient-to-br from-slate-300 from-4% to-primary to-90% filter blur-sm`}></div>
  )
}


    // {/* <span ref={shapeRef} className="absolute hidden md:block -z-50 bottom-20 left-96 w-32 h-32 rounded-full bg-gradient-to-br from-slate-300 from-4% to-primary to-90% filter blur-sm"></span>
    // <span ref={shapeRef} className="absolute hidden md:block -z-50 top-8 right-96 w-20 h-20 rounded-full bg-gradient-to-br from-slate-300 from-4% to-primary to-90% filter blur-sm"></span> */}
    // {/* <span ref={shapeRef} className="absolute md:hidden -z-50 top-0 left-4 w-40 h-40 rounded-full bg-gradient-to-br from-slate-400 from-4% to-primary to-90% filter blur-sm"></span> */}
    // {/* <span ref={shapeRef} className="absolute md:hidden -z-50 bottom-32 left-4 w-40 h-40 rounded-full bg-gradient-to-br from-slate-400 from-4% to-primary to-90% filter blur-sm"></span> */}
