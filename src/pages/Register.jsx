import React from "react";
import Button from "../components/atoms/Button/Button";

export default function Register() {
  
  const handleRegister = (event) => { // event adalah parameter, bisa dimanakan apapun, bisa e aja dll, tp pake nama event biar jelas fungsinya
    event.preventDefault();
    localStorage.setItem("name", event.target.name.value);
    window.location.href = "/Home";
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-14">
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-4xl londrina-black mb-4">Register</h1>
      </div>

      {/* form */}
      <form onSubmit={handleRegister} action="" className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <label htmlFor="name">just enter your name to register</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Input your name here.."
            className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <Button type="submit">Register</Button>
        </div>
      </form>
    </section>
  );
}
