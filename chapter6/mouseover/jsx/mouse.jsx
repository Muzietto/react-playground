class Mouse extends React.Component {
  render() {
    return <div>
      <div
        style={{border: '1px solid red'}}
        onMouseOverCapture={(event => {
          console.log('mouseover on capture');
          console.dir(event, this)
        }).bind(this)}
        onMouseOver={(event => {
          console.log('mouseover bubbling back');
          console.dir(event, this)
        }).bind(this)}>
        Move your mouse over here
      </div>
    </div>
  }
}