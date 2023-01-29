import { Fragment, useEffect, useState } from "react";
import "./App.css";
import supabase from "./config/supabase";

interface Pastry {
  name: string;
  description: string;
  img: string;
  ingredients: string[];
  rating: number;
  price: number;
}

function App() {
  const [errors, setErrors] = useState<string[]>();
  const [pastries, setPastries] = useState<any[]>();

  useEffect(() => {
    const fetchPastries = async () => {
      const { data, error } = await supabase.from("pastries").select();

      if (error) {
        setErrors(["Could not fetch pastries"]);
        setPastries([]);
      }
      if (data) {
        setPastries(data);
        setErrors([]);
      }

      console.log("pasticcini: ", pastries);
      console.log("errori: ", errors);
    };

    fetchPastries();
  }, []);

  return (
    <Fragment>
      <div className="bg-white text-white flex gap-2 px-8 py-3 w-full items-center justify-center flex-wrap">
        <h1 className="font-display font-bold text-2xl text-neutral-700 mr-auto">
          LOGO
        </h1>

        <div className="flex items-center gap-4">
          <a href="/" className="link">
            Home
          </a>
          <a href="/" className="link">
            Shop
          </a>
          <a href="/" className="link">
            About
          </a>
        </div>

        <div className="ml-auto">
          <button className="leading-10 px-5  bg-primary-600 text-white font-medium">
            Login
          </button>
        </div>
      </div>

      <div className="stripe-bg">
        <div className="container grid gap-4 place-items-start p-8">
          <h1 className="font-display font-bold text-xl text-neutral-700">
            Luxury pastry
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nesciunt sequi, deleniti repudiandae quasi velit cupiditate
            recusandae molestias, provident consectetur non culpa quae natus
            temporibus perferendis reiciendis optio. Labore, neque.
          </p>
          <button className="leading-10 px-6  bg-primary-600 text-white font-medium">
            Buy goodies
          </button>
        </div>
      </div>

      <div className="bg-neutral-200">
        <div className="container p-8 grid place-content-center place-items-start gap-4 ">
          <p className="text-neutral-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            officiis saepe blanditiis nesciunt sapiente molestias dolores. Eaque
            optio doloremque cumque.
          </p>
          <button className="leading-10 px-5  bg-neutral-500 text-white font-medium">
            button
          </button>
        </div>
      </div>

      <div className="p-8 grid place-content-center place-items-start gap-4 bg-secondary-100">
        <p className="text-gray-800">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          officiis saepe blanditiis nesciunt sapiente molestias dolores. Eaque
          optio doloremque cumque.
        </p>
        <button className="leading-10 px-5  bg-secondary-500 text-gray-50 font-medium">
          button
        </button>
      </div>

      <div className="flex gap-5 flex-wrap p-8">
        <article className="flex flex-col bg-white rounded-xl shadow-inner shadow-gray-700 overflow-hidden">
          <div className="w-full min-h-[6rem] bg-primary-200"></div>
          {/* container */}
          <div className="grid gap-3 p-4">
            <span>Titolo card</span>
            <p className="text-sm font-thin max-w-[30ch]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              explicabo!
            </p>
          </div>
        </article>
      </div>
    </Fragment>
  );
}

export default App;
