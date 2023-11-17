import React from 'react';
import ReactDOM from 'react-dom';
import CardInfo from './CardInfo';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Card Information</h1>
            <CardInfo />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;