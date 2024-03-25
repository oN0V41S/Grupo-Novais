import Header from '@layout/header'

import CardProduct from '@components/cardProduct/cardProduct'
import LoadingCard from '@components/cardProduct/loadingCard'

function App() {

  return (
    <>
      <Header/>
      <section className="recentlyAdded">
        <h1>Recehtemente Adicionados</h1>
        <LoadingCard/>
        {/*<CardProduct nome="Nike" img="" preco={"0"}/>*/}
      </section>
    </>
  )
}

export default App
