// Any js in here is automatically ran

// Import React Library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component
class App extends Component {
  constructor(props) {
    super(props);

    // inicializacion de variable state
    this.state = { images: [] };
  }

  componentWillMount() {
    // fantastic place to load data
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

// Render component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
