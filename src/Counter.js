import React, { Component } from "react";

const ErrorComponent = () => <div>error</div>;

export default class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () =>
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    this.decrement = () =>
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      console.log("get derived state from props");
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("component did mount");
    console.log("-------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("next props", nextProps);
    // console.log("next state", nextState);
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldn't component update");
      return false;
    }
    console.log("should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
    return null;
  }

  render() {
    console.log("render");
    if (this.state.error) {
      console.log("error", this.state.error);
      return <div>we have encounted an error! {this.state.error.message}</div>;
    }
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h2>Counter: {this.state.counter}</h2>
        <ErrorComponent />
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("prev props", prevProps);
    // console.log("pre state", prevState);
    // console.log("snap shot", snapshot);
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    console.log("----------------------");
  }

  componentDidCatch(error, info) {
    console.log("component did catch");
    this.setState({ error, info });
  }
}
