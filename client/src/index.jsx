import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                Hello from React!!!!
                <Carousel />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));