import { useState, useEffect } from "react";
import Button from "../../atoms/Button/Button";
import ButtonProducts from "../../atoms/Button/ButtonProducts";
import Loading from "../../atoms/Catch/Loading";
import Error from "../../atoms/Catch/Error";
import Title from "../../atoms/Title/Title";

export default function GetProduct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    const apiUrl = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section>
      <Title>Product</Title>
      <Loading />
      </section>
    );
  }

  if (error) {
    return (
      <div>
        <Title>Product</Title>
        <Error />
        <br />
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-8 py-8 md:py-14">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold londrina-black tracking-wider">
          Product
        </h1>
      </div>

      {/* CARD */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col justify-between rounded-lg shadow-lg p-4 bg-gradient-to-br from-slate-300/40 from-4% to-primary/40 to-90%"
          >
            <div>
              <figure className="bg-white overflow-hidden rounded-lg p-3 flex flex-col items-center justify-center h-32 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain object-center"
                />
                <figcaption className="block capitalize text-xs text-gray-500">
                  {item.category}
                </figcaption>
              </figure>
              <div className="">
                <h2 className="londrina-black text-xs md:text-lg lead line-clamp-2 hover:line-clamp-none">
                  {item.title}
                </h2>
                <div className="mt-1 flex items-center xxs:items-start">
                  <p className="text-xs md:text-lg">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="12 17.27 18.18 21 15.64 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 8.36 13.97 5.82 21"
                        fill="#ffc107"
                      />
                    </svg>
                  </p>
                  <p className="text-xs md:text-2 text-gray-200">
                    {item.rating.rate} <span>|</span> {item.rating.count}{" "}
                    Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="mt-2 mb-2 text-xs md:text-lg font-bold">${item.price}</p>
              <Button>Buy</Button>
            </div>
            <div className="md:hidden">
              <p className="mt-2 mb-1 text-xs md:text-lg font-bold">
                ${item.price}
              </p>
              <ButtonProducts>Add to cart</ButtonProducts>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
