"use client"

import { useState } from "react";

export default function Home() {

  const [text, setText] = useState("");
  const [res, setRes] = useState(null);
  const [vLink, setVLink] = useState(null);

  // console.log(text.length);
  // https://www.youtube.com/watch?v=0yDOloeUtfM

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('api/response', {
      method: 'POST',
      body: JSON.stringify({
        text
      })
    })
    // console.log(await response.text());
    if(response.status == 201){
      setRes(true);
      setVLink(response.text())
    }else{
      setRes(false);
      setVLink(response.text())
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-10 font-mono">
      <header className="mx-auto text-center">
        <h1 className=" text-3xl font-semibold ">
          There is a reason behind for every reason !
        </h1>
        <span>If you know you know!</span>
      </header>
      {res == true && (
        <>
          <h2 className="text-4xl font-semibold mt-2">It's a Thala moment!</h2>
          <video
            src="success.mp4"
            width="320"
            height="240"
            className="mt-5"
            autoPlay
          ></video>
        </>
      )}
      {res == false && (
        <>
          <h2 className="text-4xl font-semibold mt-2">Moye! Moye!</h2>
          <video
            src="fail.mp4"
            width="320"
            height="240"
            className="mt-5"
            autoPlay
          ></video>
        </>
      )}
      <form type="submit" className="flex gap-3 pt-10">
        <input
          type="text"
          placeholder="Check for your Thala !"
          className=" pl-3 py-3 rounded-sm bg-transparent border border-gray-500"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-transparent border border-gray-500 p-3 rounded-sm"
          onClick={handleSubmit}
        >
          Check
        </button>
      </form>
    </main>
  );
}
