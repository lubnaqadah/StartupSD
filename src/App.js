import React, { Component } from 'react';
import './App.css';
//import { BrowserRouter, Route} from 'react-router-dom'
import Speakersgram from './Components/Speakersgram/Speakersgram';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Speakersgram />
            </div>
        );
    }
}

export default App;