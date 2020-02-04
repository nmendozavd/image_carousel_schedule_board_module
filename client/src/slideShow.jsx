import React from 'react';
import Slide from './slide.jsx'
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import Carousel from './carousel.jsx';
import Counter from './counter.jsx';
import CarouselRight from './carouselRightArrow.jsx';
import CarouselLeft from './carouselLeftArrow.jsx';
import StreetView from './streetView.jsx';
import ExpandButton from './expandButton.jsx'



class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            showButtons: false,
            translateLeft: false,
            translateRight: false
        }
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.hoverImage = this.hoverImage.bind(this);
        this.leaveImage = this.leaveImage.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.handleTranslateLeft = this.handleTranslateLeft.bind(this);
        this.handleTranslateRight = this.handleTranslateRight.bind(this);

    }
    
    componentDidUpdate() {
        
    }

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

    selectImage(e) {
        e.preventDefault();
        for( var i = 0; i < this.props.images.length; i++) {
            if (this.props.images[i].URL === e.target.src) {
                this.setState({
                    currentIndex: i
                })
            }
        }
    }

    hoverImage() {
        this.setState({
            showButtons: true
        })
    }
    leaveImage() {
        this.setState({
            showButtons: false
        })
    }
    
    handleTranslateLeft() {
        this.setState({
            translateLeft: true
        })
    }

    handleTranslateRight() {
        this.setState({
            translateRight: true
        })
    }
    
    render() {
        return(
            <div onMouseEnter={this.hoverImage}  onMouseLeave={this.leaveImage} >
                {this.state.showButtons === true &&
                  <div>
                  <RightArrow  nextImage={this.nextImage}/>
                  <LeftArrow  prevImage={this.prevImage}/>
                  <Counter currentIndex={this.state.currentIndex} images={this.props.images}/>
                  <ExpandButton />
                  </div>
                }
                
                {this.props.images.map((image, key) => <Slide key={key} image={image}
                hoverImage={this.hoverImage} leaveImage={this.leaveImage} currentIndex={this.state.currentIndex}
                images={this.props.images} 
                />)}
                <Carousel images={this.props.images} currentIndex={this.state.currentIndex} 
                hoverImage={this.hoverImage} leaveImage={this.leaveImage}
                selectImage={this.selectImage} translateLeft={this.state.translateLeft}
                />
                <CarouselRight handleTranslate={this.handleTranslateLeft}/>
                <CarouselLeft handleTranslate={this.handleTranslateRight}/>
                <StreetView />
            </div>
        )
    }
}
export default SlideShow;