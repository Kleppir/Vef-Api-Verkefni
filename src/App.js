import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CardInfo from './CardInfo';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="App">
            <div className="headerContent">
              <h1>Card Information</h1>
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search cards..." />
            </div>
            <CardInfo searchTerm={searchTerm} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;