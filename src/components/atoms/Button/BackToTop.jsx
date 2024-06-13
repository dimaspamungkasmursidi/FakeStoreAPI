import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hook kustom untuk memantau posisi scroll
  const useWindowScroll = () => {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });
      };

      // Tambahkan event listener scroll pada mount komponen
      window.addEventListener('scroll', handleScroll);

      // Membersihkan event listener pada unmount komponen
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // hanya dijalankan sekali pada mount komponen

    return scrollPosition;
  };

  // Memanggil hook useWindowScroll untuk memantau posisi scroll
  const { y: pageYOffset } = useWindowScroll();

  // Tinggi total dokumen
  const totalPageHeight = document.documentElement.scrollHeight;

  // Tinggi jendela browser
  const windowHeight = window.innerHeight;

  // Efek untuk menampilkan atau menyembunyikan tombol berdasarkan posisi scroll
  useEffect(() => {
    if (pageYOffset > 100 && pageYOffset + windowHeight < totalPageHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [pageYOffset, totalPageHeight, windowHeight]);

  // Fungsi untuk melakukan scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-6 right-6 bg-gradient-to-r from-slate-400 from-4% to-primary to-90% py-2 px-4 rounded opacity-100 z-50 shadow-md"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
