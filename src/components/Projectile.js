import React, {Component} from 'react';

export class Projectile extends Component {
  componentDidMount() {
    this.setState(
      {position: {x: 0, y: 0} }
    )

    // this.interval = setInterval(() => this.tick(), 1/60);
  }
  
  render() {
  }
}

