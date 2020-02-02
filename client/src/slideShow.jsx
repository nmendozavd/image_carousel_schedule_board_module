import React from 'react';
import Slide from './slide.jsx'
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import ExpandButton from './expandButton.jsx';
import Trigger from './trigger.jsx'
import Carousel from './carousel.jsx';
import Counter from './counter.jsx';
import CarouselRight from './carouselRightArrow.jsx';
import CarouselLeft from './carouselLeftArrow.jsx';
import StreetView from './streetView.jsx';

class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            showButtons: false
        }
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.hoverImage = this.hoverImage.bind(this);
        this.leaveImage = this.leaveImage.bind(this);
    }
    
    
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.images !== this.state.images) {
    //         console.log(this.state.images);
    //     }
    // }

    nextImage(e) {
        e.preventDefault();
        let currentIndex = this.state.currentIndex
        if (currentIndex < this.props.images.length-1) {
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1
            })) 
        } else {
            this.setState({
                currentIndex: 0
            })
        }
    }

    prevImage(e) {
        e.preventDefault();
        let currentIndex = this.state.currentIndex
        if (currentIndex > 0) {
            this.setState(prevState =>({
                currentIndex: prevState.currentIndex -1
            }))
        } else {
            this.setState({
                currentIndex: this.props.images.length-1
            })
        }
    }

    hoverImage() {
        this.setState({
            showButtons: true
        })
        console.log(this.state.showButtons)
    }
    leaveImage() {
        this.setState({
            showButtons: false
        })
        console.log(this.state.showButtons)
    }
    render() {
        return(
            <div onMouseEnter={this.hoverImage}  onMouseLeave={this.leaveImage} >
                {this.state.showButtons === true &&
                  <div>
                  <RightArrow  nextImage={this.nextImage}/>
                  <LeftArrow  prevImage={this.prevImage}/>
                  <Counter currentIndex={this.state.currentIndex} images={this.props.images}/>
                  
                  </div>
                }
                
                {this.props.images.map((image, key) => <Slide key={key} image={image}
                hoverImage={this.hoverImage} leaveImage={this.leaveImage} currentIndex={this.state.currentIndex}
                images={this.props.images} 
                />)}
                <Carousel images={this.props.images} currentIndex={this.state.currentIndex} 
                hoverImage={this.hoverImage} leaveImage={this.leaveImage}
                />
                <CarouselRight/>
                <CarouselLeft/>
                <StreetView />
            </div>
        )
    }
}
export default SlideShow;