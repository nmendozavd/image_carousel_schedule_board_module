import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './slideShow.jsx';
import Carousel from './carousel.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        this.getImages = this.getImages.bind(this);

    }

    getImages() {
        axios.get('/image')
          .then((response) => {
              this.setState({
                  images: response.data
              })
          })
          .catch((error) => {
              console.log(error)
          })
    }

    componentDidMount() {
        this.getImages();
    }

    render() {
        return(
            <div>
                Hello from React!!!!
                <SlideShow images={this.state.images}/>
                <Carousel images={this.state.images} />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));