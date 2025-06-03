"use client";
import { useState, useEffect } from "react";
import Loader from "./components/loader";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="/images/bgimg-joke.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="main relative z-10 flex flex-col items-center justify-center min-h-screen bg-black/50 px-4">
        {loading ? (
          <div className="flex flex-col justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-white mb-12">Welcome to Tell Me a Joke!</h1>

            <div className="text-black bg-white/50 p-10 rounded-xl shadow-md flex flex-col items-center space-y-6">
              <p className="text-3xl font-bold">What's your type?</p>

              <Link href="/general" className="w-60">
                <button className="cursor-pointer w-full px-6 py-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500  font-extrabold text-xl rounded-xl transform transition-transform duration-300 hover:scale-110 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                  Surprise Me!
                </button>
              </Link>
              <Link href="/programming" className="w-60">
                <button
                  className="cursor-pointer w-full px-6 py-3 text-white rounded-xl font-semibold"
                  style={{ backgroundColor: "#750E21" }}
                >
                  Programming
                </button>
              </Link>

              <Link href="/dad" className="w-60">
                <button
                  className="cursor-pointer w-full px-6 py-3 text-white rounded-xl font-semibold"
                  style={{ backgroundColor: "#ED2B2A" }}
                >
                  Dad
                </button>
              </Link>

              <Link href="/knock-knock" className="w-60">
                <button
                  className="cursor-pointer w-full px-6 py-3 text-white rounded-xl font-semibold"
                  style={{ backgroundColor: "#205295" }}
                >
                  Knock-Knock
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
