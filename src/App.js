import React, { Component } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

function App() {
  return (
    <>
      <div>
        <Button onClick={() => console.log('test')} text="console.log('test')" />
      </div>
      <div>
        <Parent />
      </div>
    </>
  );
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <Button onClick={this.onClick} text="Click" />
      </div>
    );
  }
}

class Child extends Component {
  getAlert() {
    alert('Alert from Child');
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default App;
