/* Importando Estilos */
import '@pages/home/home.scss'
/* Importando Componentes */
import Header from '@layout/header/header'

import CardProduct from '@components/cardProduct/cardProduct'
import LoadingCard from '@components/cardProduct/loadingCard'

function App() {  
  const data = [];
  
  return (
    <>
      <Header/>
      <h1 className='titleHome'>Recentemente Adicionados</h1>
      {/*
      <RecentementeAdicionados>
        
        {data.map(produto => {
       return(
         <CardProduct nome={produto.nome} img={produto.img} preco={produto.preco} link={produto.link} />
       )
        })}
      
      </RecentementeAdicionados>
      */}
      <h2 className='titleHome'>Promoção</h2>
      <div className="promo productCarousel">
        <CardProduct name="Yeezy 300" preco="150" img="https://photos.app.goo.gl/HBghjh5ZRfNVhwE3A"/>
        <CardProduct name="Yeezy 300" preco="150" />
      </div>
    </>
  )
}

export default App

import React from 'react';
// import { Splide, SplideSlide } from 'react-splide';
// import 'react-splide/dist/css/themes/splide-default.min.css';

/* const RecentementeAdicionados = ({children}) => {
  return (
    <Splide >
      <SplideSlide>
        {children}
      </SplideSlide>
    </Splide>
  );
}
*/