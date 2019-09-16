import React from 'react';
import { setItem } from '@src/lib/storage';

class Suspans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promise: null,
    };
  }

  /* in order to use this method, it is necessary to comment out
     node_modules/react-dom/cjs/react-dom.development.js:18311 */
  componentDidCatch(thrown) {

    if (thrown instanceof Promise) {
      console.log(thrown);
      this.setState({ promise: thrown }, () => thrown
        .then(data => {
          setTimeout(() => {
            data.text().then(text => {
              const giasone =  JSON.parse(text);
              console.log(giasone);
              setItem(data.url, giasone);
              this.setState({ promise: null });
            });
          }, 2500);
        }));
    } else throw thrown;
  }

  render() {
    return <div className='parent'>
      {(this.state.promise)
        ? <this.props.fallback/>
        : this.props.children}
    </div>;
  }
}

export default Suspans;
