import React from 'react';
import './scss/application.scss';
import './scss/_variables.scss';
import Steps from './components/Steps';

function App() {
  return (
    <div>
      <header>
        <h1 className="logo">FantasticBoxCo</h1>
      </header>
      <main>  
        <Steps />
      </main>
    </div>
  );
}

export default App;
