import React from 'react';
import axios from 'axios';
import CarouselEntry from './carouselEntry.jsx'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            index: 0
        }
        this.getImage = this.getImage.bind(this);
    }
    
    getImage() {
        axios.get('/image')
          .then((response) => {
              this.setState({
                  images: response.data
              })
          })
          .catch((error) => {
              console.log('butwhy')
          })
    }

    componentDidMount() {
        this.getImage();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.images !== this.state.images) {
            console.log(this.state.images);
        }
    }
    render() {
        return(
            <div>
                <div>hello from carousel</div>
                {this.state.images.map((image, key) => <CarouselEntry key={key} image={image}/>)}
            </div>
        )
    }
}
export default Carousel;