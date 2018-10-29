import React, { Component } from 'react';
import Tile from './components/Tile';

const FAKE_DATA = {
	picture:
		'https://images.unsplash.com/photo-1536185503-b705a9bec60d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fd8b49418abad0fbd2ffc6c66e81ace&auto=format&fit=crop&w=800&q=60',
	icon:
		'https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_rss-512.png',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tile
          picture={FAKE_DATA.picture}
          icon={FAKE_DATA.icon}
          copy="hello! This is some body copy"
          date="12/12/12"
          source="RSS"
        />
      </div>
    );
  }
}

export default App;
