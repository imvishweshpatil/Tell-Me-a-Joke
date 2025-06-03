"use client";
// import Link from "next/link";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaArrowRight } from "react-icons/fa";

export default function KnockKnockPage() {

    const [joke, setJoke ] = useState<{ setup: string; punchline: string } | null>(null);
    const router = useRouter();

    const fetchJoke = async () => {
        const res = await fetch("https://official-joke-api.appspot.com/jokes/knock-knock/random");
        const data = await res.json();
        setJoke(data[0]);
    };

    useEffect( () => {
        fetchJoke();
    },[]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#205295] to-black text-white px-6">
        <div className="w-full max-w-md bg-white text-black shadow-2xl rounded-3xl p-8 border-4 border-pink-300">
                <h2 className="text-2xl font-extrabold text-center mb-6 text-pink-700 tracking-wide">
                  Knock-Knock Joke
                </h2>
        
                {joke ? (
                  <div className="space-y-4">
                    <p className="text-lg font-medium text-gray-800">👉 {joke.setup}</p>
                    <p className="text-xl font-bold text-pink-600">😂 {joke.punchline}</p>
                  </div>
                ) : (
                  <p className="text-center text-gray-600 text-2xl">Knocking on your screen🚪😄</p>
                )}
        
                <div className="flex justify-between items-center mt-10">
                  <button
                    onClick={() => router.push("/")}
                    className="cursor-pointer flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl shadow transition"
                  >
                    <FaHome /> Home
                  </button>
                  <button
                    onClick={fetchJoke}
                    className=" cursor-pointer flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-xl shadow transition"
                  >
                    Next <FaArrowRight />
                  </button>
                </div>
              </div>
    </div>
  );
}
