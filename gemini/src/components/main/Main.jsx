import { useState } from "react";
import { assets } from "../../assets/assets";
import { DATA } from "./gemini";
import Answer from "./Answer";

export default function Main() {
  const [question, setQuestion] = useState("");

  const [result, setResult] = useState(undefined);
  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  const send = async () => {
    let response = await fetch(DATA, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    response = await response.json();
    //console.log(response.candidates[0].content.parts[0].text)

    let datastring = response.candidates[0].content.parts[0].text;

    datastring = datastring.split("* ");
    datastring = datastring.map((item) => item.trim());
    setResult(datastring);
  };

  return (
    <div className=" h-screen   w-full ">
      <div
        id="nav"
        className="flex   items-center text-xl font-semibold text-gray-500 font-inter  p-4 justify-between "
      >
        <p className="ml-2">Gemini</p>
        <img
          src={assets.user_icon}
          alt=""
          className="size-12 rounded-full justify-center border-1 border-black "
        />
      </div>
      <div id="main-container">
        <div id="greet" className="text-start">
          <p className="text-transparent bg-gradient-to-l from-blue-700 to-green-700 bg-clip-text font-bold text-center text-4xl font-inter via-blue-600 ">
            <span>Hello, Abhishek</span>
          </p>
          <p className="text-center  mt-5 text-neutral-600 font-rubik font-medium  text-2xl">
            How can i help you today
          </p>
        </div>
      </div>

      <div className="text-black text-md text-center font-inter w-200 mx-auto mt-5 ">
        <div className=" rounded-xl text-center mt-5 bg-blue-200 border-2 border-blue-400 h-50 overflow-y-auto ">
          <h1 className=" flex justify-end p-2 rounded-2xl mt-2 mr-20 capitalize font-bold">
            {question}
          </h1>
          <ul>
            {result &&
              result.map((item, index) => (
                <div className="overflow-y-auto">
                  <li className=" p-1 text-left ml-5 font-bold ">
                    <Answer ans={item} key={index} />
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>

      <div id="main-container" className="flex flex-col items-center   ">
        <div
          id="search"
          className="flex mx-auto  items-center mt-7 bg-blue-100 px-5 py-3 space-x-75 justify-between rounded-2xl border-1 custom-container"
        >
          <input
            type="text"
            placeholder="Enter a prompt"
            className="outline-none text-md "
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <div className="flex gap-x-4">
            <img
              src={assets.send_icon}
              alt=""
              className="custom-img1"
              onClick={send}
            />
          </div>
        </div>
        <p id="bottom-info" className="mt-7">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
}
