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
import SliderTemplate from "./components/SliderTemplate/SliderTemplate";
import Feedback from "./components/Feedback/Feedback";
import MenuTemplate from "./components/MenuTemplate/MenuTemplate";

function App() {
  return (
      <>
          <div className={'app__background'}>
              <div className={'app__wrapper'}>
                  <MenuTemplate />
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
          <Feedback />
          <FooterTemplate />
      </>
);
}
export default App;

// isModal useState(false)
// передаем в хеадер прпс ис модал, и метод который меняет пропс
// модалка-cоздание 1) имя. почта пароль (с типами, передать пропсы) кнопка(console.log(с данными))
// модалка-логин 2) 2 поля- логин и пароль кнопка(console.log(с данными))
//