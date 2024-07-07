import React from 'react';
import { Home } from './Home';
import { useEffect } from 'react';
import ReactGA from 'react-ga';


function App() {
    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
      <div className="App">
        <Home />
      </div>
    );
  }

export default App;