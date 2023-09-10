import React from 'react';
import Jobs from './components/Jobs';
import JobsData from './data/data';
import image from './assets/logos/scoot.svg' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        
      </header>
     

     { JobsData.map((job) => (<Jobs key={job.id} {...job}/>))}
      
    </div>
  );
}

export default App;
