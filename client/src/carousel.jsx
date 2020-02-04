import React from 'react'
import CarouselEntry from './carouselEntry.jsx'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  width: 594px;
  flex-direction: row;
  position: absolute;
  top:510px;
  background-color: gray;
  outline: 5px solid gray;
  left: 175px;
  overflow: hidden;

`


class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div>
            <Container>
                {this.props.images.map((image,index) => <CarouselEntry image={image} key={index} 
            currentIndex={this.props.currentIndex} images={this.props.images}
            selectImage={this.props.selectImage} translateLeft={this.props.translateLeft} translateRight={this.props.translateRight}/>)}
            </Container>
        </div>
        )
    }
}

export default Carousel