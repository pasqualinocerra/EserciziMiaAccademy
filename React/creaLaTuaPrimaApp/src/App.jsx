import { Component } from "react";

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!!!</h1>;
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
