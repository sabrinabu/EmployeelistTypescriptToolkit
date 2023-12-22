import { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";

function App() {
  const [addform, setAddform] = useState<boolean>(false);

  return (
    <div className="flex">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="basis-1/4">
        <button
          className="w-20 h-8 m-6 bg-slate-400 rounded-md"
          onClick={() => setAddform(!addform)}
        >
          Add Form
        </button>
        {addform && <Add />}
      </div>
    </div>
  );
}

export default App;
