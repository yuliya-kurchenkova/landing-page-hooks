import React, { useState } from 'react'
import './assets/scss/style.scss'
import HeaderTemplate from './components/HeaderTemplate/HeaderTemplate'
import MainTemplate from "./components/MainTemplate/MainTemplate"
import MapTemplate from './components/MapTemplate/MapTemplate'
import Feature from "./components/Feature/Feature";
import PriceTemplate from "./components/PriceTemplate/PriceTemplate";
import Sponsors from "./components/Sponsors/Sponsors";
import Subscribe from "./components/Subscribe/Subscribe";
import FooterTemplate from "./components/FooterTemplate/FooterTemplate";
import Feedback from "./components/Feedback/Feedback";
import MenuTemplate from "./components/MenuTemplate/MenuTemplate";
import sliderBlock from '../src/constants/Sliders'



function App() {
    const arr = sliderBlock
    console.log(arr)
    const [isModalType, setIsModalType] = useState('')

  return (
      <>
          <div className={'app__background'}>
              <div className={'app__wrapper'}>
                  <MenuTemplate />
                  <HeaderTemplate
                      onChange={setIsModalType}
                      value={isModalType}
                  />
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
          <Feedback
              sliderBlock={sliderBlock}
          />
          <FooterTemplate />
      </>
);
}
export default App;

