import React from 'react';
import axios from 'axios';
import Slide from './slide.jsx'
import RightArrow from './rightArrow.jsx';
import LeftArrow from './leftArrow.jsx';
import ExpandButton from './expandButton.jsx';
import Trigger from './trigger.jsx'


class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            showButtons: true
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
            console.log(this.state.currentIndex)
        } else {
            this.setState({
                currentIndex: 0
            })
            console.log(this.state.currentIndex)
        }
       
    }

    prevImage(e) {
        e.preventDefault();
        let currentIndex = this.state.currentIndex
        if (currentIndex > 0) {
            this.setState(prevState =>({
                currentIndex: prevState.currentIndex -1
            }))
            console.log(this.state.currentIndex)
        } else {
            this.setState({
                currentIndex: this.props.images.length-1
            })
            console.log(this.state.currentIndex)
        }
    }

    hoverImage() {
        this.setState({
            showButtons: true
        })
    }
    leaveImage() {
        this.setState({
            showButtons:false
        })
    }
    render() {
        return(
            <div>
                {this.state.showButtons === true &&
                <div> 
                  <Trigger>
                  <RightArrow nextImage={this.nextImage}/>
                  <LeftArrow prevImage={this.prevImage}/>
                  </Trigger>
                  
                  <ExpandButton />
                </div>
                }
                
                {this.props.images.map((image, key) => <Slide key={key} image={image}
                hoverImage={this.hoverImage} leaveImage={this.leaveImage} currentIndex={this.state.currentIndex}
                images={this.props.images} 
                />)}
                
            </div>
        )
    }
}
export default SlideShow;