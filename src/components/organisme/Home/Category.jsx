import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Circle from "../../atoms/Shapes/Circle";
import Loading from "../../atoms/Catch/Loading";
import Title from "../../atoms/Title/Title";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCategories() {
    const apiUrl = "https://fakestoreapi.com/products/categories";
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setCategories(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div>
        <Title>Category</Title>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Title>Category</Title>
        <Error />
        <br />
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="relative px-8 md:py-14">

      {/* BACKGROUND */}
      <Circle size="w-80 h-80 left-10 top-0" />
      {/* <Circle size="w-32 h-32 left-[calc(54%-16px)] top-0" /> */}
      <Circle size="w-60 h-60 right-10 bottom-0" />

      {/* TITLE */}
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold londrina-black tracking-wider mt-4 md:mt-0">
          Category
        </h1>
      </div>

      {/* CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full flex flex-col align-center justify-beetween rounded-lg shadow-lg p-4 bg-gradient-to-br from-slate-300/40 from-4% to-primary/40 to-90%"
          >
            <img
              src={`https://via.placeholder.com/150?text=${category}`}
              alt={category}
              className="w-full h-20 object-cover rounded-lg opacity-80"
            />
            <div className="mt-4">
              <h2 className="text-lg londrina-black font-bold">{category}</h2>
              <p className="">
                Discover our range of {category} products.
              </p>
            </div>
            <div className="mt-4">
              <Link to="/Product">
              <Button>Shop Now</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center"></div>
    </section>
  );
}
