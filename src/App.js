import React from 'react'
import './assets/scss/style.scss'
import HeaderTemplate from './components/HeaderTemplate/HeaderTemplate'
import MainTemplate from "./components/MainTemplate/MainTemplate"
import MapTemplate from './components/MapTemplate/MapTemplate'
import Feature from "./components/Feature/Feature";

function App() {
  return (
      <div className={'app__background'}>
          <div className={'app__wrapper'}>
              <HeaderTemplate/>
              <MainTemplate />
              <Feature />
              <MapTemplate />
          </div>
      </div>
);
}

export default App;
