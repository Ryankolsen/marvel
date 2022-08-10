import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div>
      <div className="flex items-stretch px-10">
        <p className="h-10 w-250 rounded-full border-4 px-10">
          TailWind Whaat!?
        </p>
        <div className="h-52 w-85 rounded-md border-spacing-24 py-4 px-10 ">
          Something else
          <button className="bg-blue-300 hover:bg-slate-400 text-white font-bold mx-5 px-4 rounded h-12 w-25 focus:ring-4 focus:ring-emerald-800">
            click this
          </button>
        </div>
      </div>

      <div>Marvel Stuff</div>
    </div>
  );
}

export default App;
