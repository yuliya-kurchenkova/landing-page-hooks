import React from 'react'
import './assets/scss/style.scss'
import HeaderTemplate from './components/HeaderTemplate/HeaderTemplate'
import MainTemplate from "./components/MainTemplate/MainTemplate"
import MapTemplate from './components/MapTemplate/MapTemplate'
import Feature from "./components/Feature/Feature";
import PriceTemplate from "./components/PriceTemplate/PriceTemplate";
import Sponsors from "./components/Sponsors/Sponsors";
import Subscribe from "./components/Subscribe/Subscribe";
import FooterTemplate from "./components/FooterTemplate/FooterTemplate";

function App() {
  return (
      <>
          <div className={'app__background'}>
              <div className={'app__wrapper'}>
                  <HeaderTemplate/>
                  <MainTemplate />
                  <Feature />
              </div>
          </div>
                  <PriceTemplate />
              <div className={'app__wrapper'}>
                  <MapTemplate />
                  <Sponsors />
                  <Subscribe />
              </div>
          <FooterTemplate />
      </>
);
}
export default App;
