import React,{Component} from "react";
class Counter extends Component {
  constructor(props) {
    console.log("First Constructor")
    super(props);
    this.state = {  count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
  console.log("Second Reander method")
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.decrement} >decr</button>
        <button onClick={this.increment}>incr</button>
      </div>
    );
  }
}
export default Counter;