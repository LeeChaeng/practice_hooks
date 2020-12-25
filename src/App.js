import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

class AppClass extends React.Component {
  state = {
    count: 0,
  };

  add = (n) => {
    this.setState({ count: n });
  };

  minus = (n) => {
    this.setState({ count: n });
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={() => this.add(count + 1)}>Increment</button>
        <button onClick={() => this.minus(count - 1)}>Decrement</button>
      </>
    );
  }
}

export default App;
