

import { useState } from "react";

function Taskone() {

  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>
        Show
      </button>

      <button onClick={() => setShow(false)}>
        Hide
      </button>

      {show && <h2>Welcome to React</h2>}

    </div>
  );
}

export default Taskone;