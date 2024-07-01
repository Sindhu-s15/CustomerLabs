
import React from 'react';
import SaveSegmentButton from './components/SaveSegmentButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Customer Labs Segment Builder</h1>
      <SaveSegmentButton />
    </div>
  );
};

export default App;
