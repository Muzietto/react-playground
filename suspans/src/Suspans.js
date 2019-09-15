import React from 'react';

class Suspans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: null,
    };
  }

  componentDidCatch(thrown) {
    console.log(thrown);
  }

  render() {
    return <div className='parent'>
      {(this.state.childData)
        ? this.props.children
        : <this.props.placeholder/>}
    </div>;
  }
}

export default Suspans;
