import React from 'react';
import MediaQueryContext from './MediaQueryContext';
import viewport from './viewportModel';
import Granpa from './Granpa';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: '',
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.setState({ device: viewport.get(width) });
  }

  render() {
    return (
      <MediaQueryContext.Provider value={this.state.device}>
        {this.props.children}
      </MediaQueryContext.Provider>
    );
  }
}

export default Provider;
