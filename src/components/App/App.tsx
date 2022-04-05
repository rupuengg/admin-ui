import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ConnectedUserList from '../../connectedComponents/ConnectedUser/ConnectedUserList';

export const App = () => {
  return (
    <div className="App">
      <ConnectedUserList />
    </div>
  );
}

export default App;
