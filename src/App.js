import React from 'react'
import './assets/scss/style.scss'
import HeaderTemplate from './components/HeaderTemplate/HeaderTemplate'
import MainTemplate from "./components/MainTemplate/MainTemplate"

function App() {
  return (
      <div className={'app__background'}>
          <div className={'app__wrapper'}>
              <HeaderTemplate/>
              <MainTemplate />
          </div>
      </div>
);
}

export default App;
