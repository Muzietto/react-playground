class Content extends Logger {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      counter: 0,
      currentTime: this.props.time
    };
    console.log('Content constructor exiting');
  }
  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );

    //if (this.state.counter > 2) return React.createElement("div", null);
    //return React.createElement(Logger, { time: this.state.currentTime });
  }
}