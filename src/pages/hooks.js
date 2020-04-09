import { useState, useEffect } from 'react';

function HookExamples() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // clean up
    return () => {
      alert('clean up...');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked 2 {count2} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me 2</button>
    </div>
  );
}

export default HookExamples;
