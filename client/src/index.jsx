import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './slideShow.jsx';
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
        let randomID = Math.floor(Math.random() * 100);
        axios.get('/image', {
            params: {
                ID: randomID
            }
        })
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
                  <SlideShow images={this.state.images}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));