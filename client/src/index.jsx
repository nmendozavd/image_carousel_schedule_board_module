import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './slideShow.jsx';
import Carousel from './carousel.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                Hello from React!!!!
                <SlideShow />
                <Carousel />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));