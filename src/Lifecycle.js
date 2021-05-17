import React, { Component } from "react";
import Counter from "./Counter";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () =>
      this.setState({
        mount: false,
      });

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });

    this.seedGenerator = () =>
      this.setState({
        seed: Number.parseInt(Math.random() * 100),
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.ignoreProp}>ignore Prop</button>
        <button onClick={this.seedGenerator}>seed generator</button>
        {this.state.mount && (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        )}
      </div>
    );
  }
}
