import React, {Component} from 'react';
import { Character } from './Character';

export class GameView extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div className="background">
        <Character></Character>
      </div>
    )
  }
}

