

import { useState } from "react";

function Taskone() {

  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center mt-20 gap-10">
      <button onClick={() => setShow(true)} className="bg-red-600 w-25 rounded-2xl p-1 text-white">
        Show
      </button>

      <button onClick={() => setShow(false)} className="bg-red-600 w-25 rounded-2xl p-1 text-white">
        Hide
      </button>

      {show && <h2>Welcome to React</h2>}

    </div>
  );
}

export default Taskone;