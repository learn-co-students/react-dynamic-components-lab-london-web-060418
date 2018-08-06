import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this.props.opacity)
    console.log(this.props.opacity - 0.1)
    // let opacity =

      if (this.props.opacity > 0.2) {
        const newValue = (this.props.opacity - 0.1)
        return (
          <div className="color-box" style={{ opacity:this.props.opacity }} >
            <ColorBox opacity={newValue}/>
          </div>
        )
      } else {
        return null
      }
  }

}
