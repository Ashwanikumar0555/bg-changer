import { useState } from "react"

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-200"
    style={{ backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 py-2 rounded-3xl">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl shadow-md hover:bg-blue-600"
      onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded-3xl shadow-md hover: bg-red-600"
      onClick={() => setColor("red")}
      >
        Red
      </button>
       <button className="px-4 py-2 bg-yellow-50 text-white rounded-3xl shadow-md hover: bg-yellow-600"
       onClick={() => setColor("yellow")} 
       >
        Yellow
       </button>
       <button className="px-4 py-2 bg-pink-500 text-white rounded-3xl shadow-md hover: bg-pink-600"
       onClick={() => setColor("pink")}
       >
        pink
       </button>
       <button className="px-4 py-2 bg-olive-500 text-green rounded-3xl shadow-md hover: bg-green-600"
       onClick={() => setColor("green")}
       >
        Green
       </button>
       <button className="px-4 py-2 bg-purple-500 text- rounded-3xl shadow-md hover: bg-purple-600"
       onClick={() => setColor("purple")}
       >
        Purple
        </button>
        <button className="px-4 py-2 bg-teal-500 text- rounded-3xl shadow-md hover: bg-teal-600"
       onClick={() => setColor("teal")}
       >
        Teal
        </button>
        <button className="px-4 py-2 bg-orange-500 text- rounded-3xl shadow-md hover: bg-orange-600"
       onClick={() => setColor("orange")}
       >
        Orange
        </button>
        <button className="px-4 py-2 bg-black-500 text- rounded-3xl shadow-md hover: bg-gray-600"
       onClick={() => setColor("black")}
       >
        Reset
        </button>
      </div>
    </div>
    </div>
  )
}

export default App;
