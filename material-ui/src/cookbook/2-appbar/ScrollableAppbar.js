import React from 'react';
import Fade from '@material-ui/core/Fade';
import { AppbarParameterisedPosition } from '@src/cookbook/2-appbar/FixedPosition';

class ScrollableAppbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
      scrollTop: 0,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(e) {
    this.setState({
      scrollTop: e.target.documentElement.scrollTop,
      scrolling: e.target.documentElement.scrollTop > this.state.scrollTop,
    });
  }

  shouldComponentUpdate(props, state) {
    return this.state.scrolling !== state.scrolling;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { classes, title } = this.props;
    return <Fade in={!this.state.scrolling}>
      <div style={{ position: 'fixed', height: '30px', width: '100%', border: '2px solid red' }}>
        {title}
      </div>
      {/* why the frigging Appbar down here does not disappear,
        while the one in AppbarWithButtons2.js does??? */}
      {/* <AppbarParameterisedPosition classes={classes} title={title} position='fixed' /> */}
    </Fade>;
  }
}

export default ScrollableAppbar;
