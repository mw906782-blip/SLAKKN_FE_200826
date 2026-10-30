
import { useState } from "react";

function Tasktwo() {

  const [number, setNumber] = useState(0);

  return (
    <div className="text-center mt-10">

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))} className="bg-amber-400 text-white text-center rounded-2xl"
      />

      <h2>Number: {number}</h2>

      {number % 2 === 0
        ? <h2>Even Number</h2>
        : <h2>Odd Number</h2>
      }

    </div>
  );
}

export default Tasktwo;
