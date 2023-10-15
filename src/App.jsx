import React from 'react';
import './App.css';
import Data from './components/Data';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const urlEnv = import.meta.env.VITE_APP_URL;
  
  return (
    <>
      <Data url={`${urlEnv}data`} />
      <Error url={`${urlEnv}error`} />
      <Loading url={`${urlEnv}loading`} />
    </>
  );
}

export default App;