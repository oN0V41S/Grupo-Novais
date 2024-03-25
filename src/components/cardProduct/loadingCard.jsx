// Importando estilos
import '@components/cardProduct/cardProduct.scss'

export default function LoadingCard(){
  return(
    <span id="loadingCard" className="loadingCard">
      <span className="blur"></span>
    </span>
  )
}