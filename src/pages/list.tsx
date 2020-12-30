import React, { useState } from 'react';

function List() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
    </button>
    </div>
  );
}

export default List;