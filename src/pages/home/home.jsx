import Header from '@layout/header'

import CardProduct from '@components/cardProduct/cardProduct'
import LoadingCard from '@components/cardProduct/loadingCard'

/* Importando Carrosel */ 
import '@splidejs/react-splide/css/skyblue';

function App() {  
  return (
    <>
      <Header/>
      <h1 className='titleHome'>Recentemente Adicionados</h1>
      <div className="recentlyAdded">
        <CardProduct 
          nome="Yeezy 300" 
          preco="150" 
          link="https://www.cssbuy.com/item-micro-6255884078.html?promotionCode=" 
          img="https://si.geilicdn.com/wdseller1425026222-4a120000018df1188aec0a22d30e_1080_1080.jpg"/>
        <CardProduct 
          nome="Yeezy 300" 
          preco="150" 
          link="https://www.cssbuy.com/item-micro-6255884078.html?promotionCode=" 
          img="https://si.geilicdn.com/wdseller1425026222-4a120000018df1188aec0a22d30e_1080_1080.jpg"/>
      </div>
    </>
  )
}

export default App
